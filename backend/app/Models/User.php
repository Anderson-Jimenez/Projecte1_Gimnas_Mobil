<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{   
    use HasApiTokens, Notifiable;
    protected $table = 'users';

    protected $fillable = [
        'surnames',
        'name',
        'dni',
        'password',
        'mail',
        'phone',
        'IBAN',
        'address',
        'status'
    ];

    public function reservations(){
        return $this->hasMany(Reservation::class, 'id_user');
    }
}
