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

            $classDateTime = $class->date . ' ' . $class->start_time;
            $classTimestamp = strtotime($classDateTime);
            $limitTimestamp = strtotime('+24 hours');
            
            if ($classTimestamp <= $limitTimestamp) {
                return response()->json([
                    'success' => false,
                    'message' => "Les reserves s'han de fer un mínim de 24 hores abans!"
                ], 400);
            }

            $reservation = Reservation::create([
                'user_id' => $user_id,
                'class_id' => $class->id,
                'status' => 'ACTIU',
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Classe reservada correctament',
                'reservation_id' => $reservation->id
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage()
            ], 500);
        }
    }
    
    // ENDPOINT PARA EL TIMETABLE - SOLO IDs
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
    
    // ENDPOINT PARA LA VISTA DE RESERVATIONS - COMPLETO Y ORDENADO
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
}