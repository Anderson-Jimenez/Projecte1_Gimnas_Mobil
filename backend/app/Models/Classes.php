<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $table = "classes";
    protected $fillable = ['name','date','start_time','end_time','capacity','instructor_id'];

    
    public function instructor(){
        return $this->belongsTo(Instructor::class, 'instructor_id');
    }
    
    public function reservations(){
        return $this->hasMany(Reservation::class, 'class_id');
    }
}
