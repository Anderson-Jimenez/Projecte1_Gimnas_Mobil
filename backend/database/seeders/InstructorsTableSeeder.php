<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class InstructorsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('instructors')->insert([
            ['id'=>1,'surnames'=>'Gómez López','name'=>'Laura','dni'=>'12345678A','password'=>Hash::make('1234'),'email'=>'laura.gomez@gym.com','phone'=>'600111222','address'=>'Carrer Major 12, BCN','status'=>'ACTIVE'],
            ['id'=>2,'surnames'=>'Martínez Ruiz','name'=>'Carlos','dni'=>'87654321B','password'=>Hash::make('1234'),'email'=>'carlos.martinez@gym.com','phone'=>'600222333','address'=>'Av. Diagonal 34, BCN','status'=>'ACTIVE'],
            ['id'=>3,'surnames'=>'Santos Pérez','name'=>'Lucía','dni'=>'23456789C','password'=>Hash::make('1234'),'email'=>'lucia.santos@gym.com','phone'=>'600333444','address'=>'C/ Aragó 78, BCN','status'=>'ACTIVE'],
            ['id'=>4,'surnames'=>'Rodríguez Díaz','name'=>'David','dni'=>'34567890D','password'=>Hash::make('1234'),'email'=>'david.rodriguez@gym.com','phone'=>'600444555','address'=>'C/ Balmes 45, BCN','status'=>'ACTIVE'],
            ['id'=>5,'surnames'=>'Fernández Mora','name'=>'Ana','dni'=>'45678901E','password'=>Hash::make('1234'),'email'=>'ana.fernandez@gym.com','phone'=>'600555666','address'=>'C/ Casanova 89, BCN','status'=>'ACTIVE'],
            ['id'=>6,'surnames'=>'Torres Gil','name'=>'Miguel','dni'=>'56789012F','password'=>Hash::make('1234'),'email'=>'miguel.torres@gym.com','phone'=>'600666777','address'=>'C/ Provença 120, BCN','status'=>'ACTIVE'],
        ]);
    }
}
