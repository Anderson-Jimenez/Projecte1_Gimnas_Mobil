<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $table = "classes";
    protected $fillable = ['name','date','start_time','end_time','capacity','fk_id_instructor'];

    
    public function instructor(){
        return $this->belongsTo(Instructor::class, 'fk_id_instructor');
    }
    
    public function reservations(){
        return $this->hasMany(Reservation::class, 'fk_id_class');
    }
}
