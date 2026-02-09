<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            ['id'=>1,'surnames'=>'García López','name'=>'Juan','dni'=>'12345678A','password'=>Hash::make('1234'),'email'=>'juan.garcia@example.com','phone'=>'600123456','IBAN'=>'ES7620770024003102575766','address'=>'Calle Falsa 123, Madrid','status'=>'ACTIVE'],
            ['id'=>2,'surnames'=>'Pérez Rodríguez','name'=>'Ana','dni'=>'23456789B','password'=>Hash::make('1234'),'email'=>'ana.perez@example.com','phone'=>'600234567','IBAN'=>'ES9121000418450200051332','address'=>'Avenida Siempre Viva 742, Barcelona','status'=>'INACTIVE'],
            ['id'=>3,'surnames'=>'Martínez Sánchez','name'=>'Luis','dni'=>'34567890C','password'=>Hash::make('1234'),'email'=>'luis.martinez@example.com','phone'=>'600345678','IBAN'=>'ES6621000418401234567890','address'=>'Plaza Mayor 1, Valencia','status'=>'ACTIVE'],
            ['id'=>4,'surnames'=>'Fernández Gómez','name'=>'María','dni'=>'45678901D','password'=>Hash::make('1234'),'email'=>'maria.fernandez@example.com','phone'=>'600456789','IBAN'=>'ES9821000418450300054321','address'=>'Calle del Sol 5, Sevilla','status'=>'ACTIVE'],
            ['id'=>5,'surnames'=>'Hernández Díaz','name'=>'Carlos','dni'=>'56789012E','password'=>Hash::make('1234'),'email'=>'carlos.hernandez@example.com','phone'=>'600567890','IBAN'=>'ES9121000418450200056789','address'=>'Camino Real 12, Bilbao','status'=>'INACTIVE'],
        ]);
    }
}
