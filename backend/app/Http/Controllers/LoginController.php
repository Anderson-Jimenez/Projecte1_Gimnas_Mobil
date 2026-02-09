<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    public function login(Request $request)
    {      
        // Validar los datos
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);


        // Verificar mediante auth, agarrando los datos directamente del request
        if (!Auth::guard('web')->attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => false,
                'message' => 'Credenciales incorrectas'
            ], 401);
        }
        $user = Auth::guard('web')->user();

        $token = $user->createToken('mobile-token')->plainTextToken;
        // Si todo está bien, retornar éxito
        return response()->json([
            'success' => true,
            'message' => 'Login correcto!;)',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'surnames' => $user->surnames,
                'email' => $user->email,
            ]
        ],200);
    }
}