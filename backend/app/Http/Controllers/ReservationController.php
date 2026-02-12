<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\Classes;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'class_id' => 'required|exists:classes,id',
            ]);

            $class = Classes::findOrFail($request->class_id);
            $user_id = Auth::id();

            $currentReservations = Reservation::where('class_id', $class->id)
                ->where('status', 'ACTIU')
                ->count();
                
            if ($currentReservations >= $class->capacity) {
                return response()->json([
                    'success' => false,
                    'message' => 'La classe està plena'
                ], 400);
            }

            //validar reserva duplicada
            $existingReservation = Reservation::where('class_id', $class->id)
                ->where('user_id', $user_id)
                ->where('status', 'ACTIU')
                ->first();
                
            if ($existingReservation) {
                return response()->json([
                    'success' => false,
                    'message' => 'Ja tens una reserva en aquesta classe'
                ], 400);
            }

            //validar que la reserva sea minimo 24h antes
            $classDateTime = $class->date . ' ' . $class->start_time;
            $classTimestamp = strtotime($classDateTime);
            $limitTimestamp = strtotime('+24 hours');
            
            if ($classTimestamp <= $limitTimestamp) {
                return response()->json([
                    'success' => false,
                    'message' => "Les reserves s'han de fer un mínim de 24 hores abans!"
                ], 400);
            }

            // Crear la reserva
            $reservation = Reservation::create([
                'user_id' => $user_id,
                'class_id' => $class->id,
                'status' => 'ACTIU',
            ]);

            //GENERAR QR AUTOMÁTICAMENTE
            $qrToken = bin2hex(random_bytes(16));
            $reservation->qr_token = $qrToken;
            $reservation->qr_generated_at = now();
            $reservation->save();

            // Datos para el QR (id + token)
            $qrData = json_encode([
                'reservation_id' => $reservation->id,
                'token' => $qrToken
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Classe reservada correctament',
                'reservation_id' => $reservation->id,
                'qr_data' => $qrData,
                'class' => [
                    'name' => $class->name,
                    'date' => $class->date,
                    'time' => $class->start_time
                ]
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }
    
    public function reserves()
    {
        try {
            $reservations = Reservation::where('user_id', Auth::id())
                ->where('status', 'ACTIU')
                ->get();
                
            return response()->json([
                'success' => true,
                'reservations' => $reservations
            ], 200);
            
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }
    
    public function myReservations()
    {
        try {
            $reservations = Reservation::where('user_id', Auth::id())
                ->where('status', 'ACTIU')
                ->with(['class.instructor'])
                ->get()
                ->sortBy(function($reservation) {
                    return $reservation->class->date . ' ' . $reservation->class->start_time;
                })
                ->values();
                
            foreach ($reservations as $reservation) {
                $reservation->class->reservations_count = Reservation::where('class_id', $reservation->class_id)
                    ->where('status', 'ACTIU')
                    ->count();
            }
                
            return response()->json([
                'success' => true,
                'reservations' => $reservations
            ], 200);
            
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }
    
    public function cancel($id)
    {
        try {
            $reservation = Reservation::where('id', $id)
                ->where('user_id', Auth::id())
                ->where('status', 'ACTIU')
                ->first();

            if (!$reservation) {
                return response()->json([
                    'success' => false,
                    'message' => 'Reserva no trobada'
                ], 404);
            }

            $reservation->delete();

            return response()->json([
                'success' => true,
                'message' => 'Reserva cancel·lada correctament'
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }
    public function generateQR($id)
    {
        try {
            $reservation = Reservation::where('id', $id)
                ->where('user_id', Auth::id())
                ->where('status', 'ACTIU')
                ->first();

            if (!$reservation) {
                return response()->json([
                    'success' => false,
                    'message' => 'Reserva no trobada'
                ], 404);
            }

            if ($reservation->qr_token) {
                $qrData = json_encode([
                    'reservation_id' => $reservation->id,
                    'token' => $reservation->qr_token
                ]);
                
                return response()->json([
                    'success' => true,
                    'qr_data' => $qrData,
                    'message' => 'QR recuperat correctament'
                ], 200);
            }

            $qrToken = bin2hex(random_bytes(16));
            $reservation->qr_token = $qrToken;
            $reservation->qr_generated_at = now();
            $reservation->save();

            $qrData = json_encode([
                'reservation_id' => $reservation->id,
                'token' => $qrToken
            ]);

            return response()->json([
                'success' => true,
                'qr_data' => $qrData,
                'message' => 'QR generat correctament'
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }

    // Endpoint para ESCANEAR el QR y USAR la reserva
    public function scanQR(Request $request)
    {
        try {
            $request->validate([
                'qr_data' => 'required'
            ]);

            $qrData = json_decode($request->qr_data, true);
            
            if (!$qrData || !isset($qrData['reservation_id']) || !isset($qrData['token'])) {
                return response()->json([
                    'success' => false,
                    'message' => 'QR invàlid'
                ], 400);
            }

            $reservation = Reservation::where('id', $qrData['reservation_id'])
                ->where('qr_token', $qrData['token'])
                ->where('status', 'ACTIU')
                ->first();

            if (!$reservation) {
                return response()->json([
                    'success' => false,
                    'message' => 'Reserva no trobada o QR invàlid'
                ], 404);
            }

            // ✅ CAMBIAR A 'FINALITZADA' o cualquier estado que NO sea 'ACTIU'
            $reservation->status = 'UTILITZAT';  // Así no aparece en el listado
            $reservation->qr_used = true;
            $reservation->qr_used_at = now();
            $reservation->save();

            return response()->json([
                'success' => true,
                'message' => 'QR registrat correctament',  // ← Mensaje para el alert
                'reservation_id' => $reservation->id
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }

    // Endpoint para verificar estado de una reserva (opcional)
    public function checkReservationStatus($id)
    {
        try {
            $reservation = Reservation::where('id', $id)
                ->where('user_id', Auth::id())
                ->first();

            if (!$reservation) {
                return response()->json([
                    'success' => false,
                    'message' => 'Reserva no trobada'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'status' => $reservation->status,
                'qr_used' => $reservation->qr_used,
                'qr_used_at' => $reservation->qr_used_at
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }
}