<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    protected $table = "instructor";
    protected $fillable = ['surnames','name','dni','password','email','phone','address','status'];

    public function classes(){
        return $this->hasMany(Classes::class, 'fk_id_instructor');
    }
}
