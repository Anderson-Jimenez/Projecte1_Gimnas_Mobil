<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReservationsTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('reservations')->insert([
            ['id'=>1,'status'=>'ACTIU','user_id'=>1,'class_id'=>1],
            ['id'=>2,'status'=>'DESACTIVAT','user_id'=>2,'class_id'=>2],
            ['id'=>3,'status'=>'ACTIU','user_id'=>3,'class_id'=>3],
            ['id'=>4,'status'=>'DESACTIVAT','user_id'=>4,'class_id'=>4],
            ['id'=>5,'status'=>'ACTIU','user_id'=>5,'class_id'=>5],
            ['id'=>6,'status'=>'ACTIU','user_id'=>1,'class_id'=>6],
            ['id'=>7,'status'=>'DESACTIVAT','user_id'=>2,'class_id'=>7],
            ['id'=>8,'status'=>'ACTIU','user_id'=>3,'class_id'=>8],
            ['id'=>9,'status'=>'DESACTIVAT','user_id'=>4,'class_id'=>1],
            ['id'=>10,'status'=>'ACTIU','user_id'=>5,'class_id'=>2],
            ['id'=>11,'status'=>'DESACTIVAT','user_id'=>1,'class_id'=>3],
            ['id'=>12,'status'=>'ACTIU','user_id'=>2,'class_id'=>4],
            ['id'=>13,'status'=>'DESACTIVAT','user_id'=>3,'class_id'=>5],
            ['id'=>14,'status'=>'ACTIU','user_id'=>4,'class_id'=>6],
            ['id'=>15,'status'=>'DESACTIVAT','user_id'=>5,'class_id'=>7],
            ['id'=>16,'status'=>'ACTIU','user_id'=>1,'class_id'=>8],
            ['id'=>17,'status'=>'DESACTIVAT','user_id'=>2,'class_id'=>1],
            ['id'=>18,'status'=>'ACTIU','user_id'=>3,'class_id'=>2],
            ['id'=>19,'status'=>'DESACTIVAT','user_id'=>4,'class_id'=>3],
            ['id'=>20,'status'=>'ACTIU','user_id'=>5,'class_id'=>4],
        ]);
    }
}
