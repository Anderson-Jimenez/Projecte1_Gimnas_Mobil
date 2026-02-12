<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| Rutas públicas
|--------------------------------------------------------------------------
|
| Estas rutas NO requieren autenticación (ej: login, ver clases públicas)
|
*/

// Login
Route::post('/login', [LoginController::class, 'login']);

// Obtener todas las clases (público)
Route::get('/allClasses', [ClassController::class, 'index']);

/*
--------------------------------------------------------------------------
Rutas protegidas (requieren token de usuario)
--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    // Info del usuario logueado
    Route::get('/user', function (Request $request) {
        
        return response()->json([
            'user' => [
                'id' => $request->user()->id,
                'name' => $request->user()->name,
                'surnames' => $request->user()->surnames,
                'email' => $request->user()->email,
            ]
        ]);
    });    


    Route::post('/reserva', [ReservationController::class, 'store']);
    Route::get('/reserves', [ReservationController::class, 'reserves']); // Para Timetable (solo IDs)
    Route::get('/myReservations', [ReservationController::class, 'myReservations']); // Para vista Reservations (completo)
    Route::delete('/reserva/{id}', [ReservationController::class, 'cancel']);

});
Route::middleware('auth:sanctum')->post('/logout', function () {
    auth()->user()->currentAccessToken()->delete();
    return response()->json(['success' => true]);
});
Route::middleware('auth:sanctum')->get('/verify-token', function () {
    return response()->json(['success' => true]);
});