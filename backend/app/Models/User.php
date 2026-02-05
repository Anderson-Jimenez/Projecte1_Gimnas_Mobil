<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';
    public $timestamps = false; // tu tabla no tiene created_at / updated_at

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
        return $this->hasMany(Reservation::class, 'fk_id_user');
    }
}
