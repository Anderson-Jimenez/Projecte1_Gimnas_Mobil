<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        //Agarrar el usuario autentificado por middleware
        $user = $request->user();
        
        return response()->json([
            'success' => true,
            'user' => $user,
            'dashboard_data' => [
                'message' => 'Bienvenido al Panel de control!',
            ]
        ]);
    }
}