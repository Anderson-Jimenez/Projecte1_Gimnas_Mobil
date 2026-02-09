<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = "reservation";
    protected $fillable = ['status','user_id','class_id'];

    
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function class(){
        return $this->belongsTo(Classes::class, 'class_id');
    }
}
