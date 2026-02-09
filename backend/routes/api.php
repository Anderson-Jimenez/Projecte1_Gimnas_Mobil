<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\LoginController;

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

    // Rutas de usuarios protegidas
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']); 
});