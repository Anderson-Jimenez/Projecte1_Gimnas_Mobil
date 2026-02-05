<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = "reservation";
    protected $fillable = ['status','fk_id_user','fk_id_class'];

    
    public function user(){
        return $this->belongsTo(User::class, 'fk_id_user');
    }
    
    public function class(){
        return $this->belongsTo(Classes::class, 'fk_id_class');
    }
}
