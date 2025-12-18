<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsersGym extends Model
{
    protected $table = "users";
    protected $fillable = ['surnames','name','dni','password','mail','phone','IBAN','address','status'];
    
    public function reservation(){
        return $this->hasMany(Reservation::class);
    }
}
