<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;
    protected $table = "classes";
    protected $fillable = ['name','date','start_time','end_time','capacity','instructor_id'];

    
    public function instructor(){
        return $this->belongsTo(Instructor::class);
    }
    
    public function reservations(){
        return $this->hasMany(Reservation::class, 'class_id');
    }
}
