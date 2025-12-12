<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Administrators extends Model
{
    
    protected $table = "administrators";
    protected $fillable = ['surnames','name','dni','password','state'];
    
}