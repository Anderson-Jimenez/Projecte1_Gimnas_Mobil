<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Classes;
use App\Models\Reservation;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(Request $request)
    {

        $ultimaReserva = Reservation::with(['gymClass' => function($query) {$query->withCount('reservations')->with('instructor');}])->where('user_id', $request->user()->id)->first();
        
        $userId = $request->user()->id;

        $stats = Reservation::join('classes', 'reservations.class_id', '=', 'classes.id')
            ->where('reservations.user_id', $userId)
            // Filtrem per les classes dels últims 7 dies fins avui
            //->whereRaw('classes.date BETWEEN DATE_SUB(NOW(), INTERVAL 7 DAY) AND NOW()')
            ->select(
                DB::raw("DAYNAME(classes.date) as dia"), 
                DB::raw("COUNT(*) as total")
            )
            ->groupBy('dia')
            // Ordenem per dia de la setmana
            ->orderByRaw("FIELD(dia, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')")
            ->get();

        return response()->json([
            'success' => true,
            'ultimaReserva' => $ultimaReserva,
            'stats' => $stats,
            'message' => 'Reserva',
        ]);

        /*
        $user = $request->user();
        
        return response()->json([
            'success' => true,
            'user' => $user,
            'dashboard_data' => [
                'message' => 'Bienvenido al Panel de control!',
            ]
        ]);
        */
    }
}