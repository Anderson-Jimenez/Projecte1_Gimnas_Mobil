<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $credentials['email'])->first();

        // verificacio de si existeix un profesional amb el nom indicat i la contrasenya del mateix existeix
        if ($user && Hash::check($credentials['password'], $user->password)) {

           //session(['center_id' => $professional->center_id]);
            Auth::login($professional);
            return redirect()->route('dashboard');
        }
        return back()->withErrors([
            'login' => 'Email o contraseña incorrectos.',
        ]);
    }
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
