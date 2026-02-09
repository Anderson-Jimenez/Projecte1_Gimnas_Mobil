<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdministratorsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('administrators')->insert([
            [
                'id' => 1,
                'surnames' => 'López García',
                'name' => 'artur',
                'dni' => '99911122A',
                'password' => Hash::make('1234'),
                'state' => 'ACTIVE',
            ],
            [
                'id' => 2,
                'surnames' => 'admin',
                'name' => 'admin',
                'dni' => '0000000A',
                'password' => Hash::make('1234'),
                'state' => 'ACTIVE',
            ],
            [
                'id' => 3,
                'surnames' => 'Ruiz Fernández',
                'name' => 'anderson',
                'dni' => '88822233B',
                'password' => Hash::make('1234'),
                'state' => 'ACTIVE',
            ],
        ]);
    }
}
