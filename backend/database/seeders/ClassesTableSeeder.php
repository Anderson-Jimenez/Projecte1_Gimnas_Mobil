<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassesTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('classes')->insert([
            // ===================== DILLUNS =====================
            ['id'=>1,'name'=>'Spinning','date'=>'dilluns','start_time'=>'09:00','end_time'=>'10:00','capacity'=>20,'instructor_id'=>1],
            ['id'=>2,'name'=>'Ioga','date'=>'dilluns','start_time'=>'10:00','end_time'=>'11:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>3,'name'=>'BodyPump','date'=>'dilluns','start_time'=>'11:00','end_time'=>'12:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>4,'name'=>'Crossfit','date'=>'dilluns','start_time'=>'17:00','end_time'=>'18:00','capacity'=>20,'instructor_id'=>4],
            ['id'=>5,'name'=>'Zumba','date'=>'dilluns','start_time'=>'18:00','end_time'=>'19:00','capacity'=>20,'instructor_id'=>5],
            ['id'=>6,'name'=>'Pilates','date'=>'dilluns','start_time'=>'19:00','end_time'=>'20:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>7,'name'=>'Stretching','date'=>'dilluns','start_time'=>'20:00','end_time'=>'21:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>8,'name'=>'Cardio','date'=>'dilluns','start_time'=>'21:00','end_time'=>'22:00','capacity'=>20,'instructor_id'=>5],

            // ===================== DIMARTS =====================
            ['id'=>9,'name'=>'Crossfit','date'=>'dimarts','start_time'=>'09:00','end_time'=>'10:00','capacity'=>20,'instructor_id'=>4],
            ['id'=>10,'name'=>'Pilates','date'=>'dimarts','start_time'=>'10:00','end_time'=>'11:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>11,'name'=>'BodyPump','date'=>'dimarts','start_time'=>'11:00','end_time'=>'12:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>12,'name'=>'Spinning','date'=>'dimarts','start_time'=>'17:00','end_time'=>'18:00','capacity'=>20,'instructor_id'=>1],
            ['id'=>13,'name'=>'Zumba','date'=>'dimarts','start_time'=>'18:00','end_time'=>'19:00','capacity'=>20,'instructor_id'=>5],
            ['id'=>14,'name'=>'BodyCombat','date'=>'dimarts','start_time'=>'19:00','end_time'=>'20:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>15,'name'=>'HIIT','date'=>'dimarts','start_time'=>'20:00','end_time'=>'21:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>16,'name'=>'Stretching','date'=>'dimarts','start_time'=>'21:00','end_time'=>'22:00','capacity'=>20,'instructor_id'=>2],

            // ===================== DIMECRES =====================
            ['id'=>17,'name'=>'Ioga','date'=>'dimecres','start_time'=>'09:00','end_time'=>'10:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>18,'name'=>'BodyPump','date'=>'dimecres','start_time'=>'10:00','end_time'=>'11:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>19,'name'=>'Crossfit','date'=>'dimecres','start_time'=>'11:00','end_time'=>'12:00','capacity'=>20,'instructor_id'=>4],
            ['id'=>20,'name'=>'Spinning','date'=>'dimecres','start_time'=>'17:00','end_time'=>'18:00','capacity'=>20,'instructor_id'=>1],
            ['id'=>21,'name'=>'Zumba','date'=>'dimecres','start_time'=>'18:00','end_time'=>'19:00','capacity'=>20,'instructor_id'=>5],
            ['id'=>22,'name'=>'Pilates','date'=>'dimecres','start_time'=>'19:00','end_time'=>'20:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>23,'name'=>'BodyCombat','date'=>'dimecres','start_time'=>'20:00','end_time'=>'21:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>24,'name'=>'Cardio','date'=>'dimecres','start_time'=>'21:00','end_time'=>'22:00','capacity'=>20,'instructor_id'=>5],

            // ===================== DIJOUS =====================
            ['id'=>25,'name'=>'BodyPump','date'=>'dijous','start_time'=>'09:00','end_time'=>'10:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>26,'name'=>'Pilates','date'=>'dijous','start_time'=>'10:00','end_time'=>'11:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>27,'name'=>'Crossfit','date'=>'dijous','start_time'=>'11:00','end_time'=>'12:00','capacity'=>20,'instructor_id'=>4],
            ['id'=>28,'name'=>'Spinning','date'=>'dijous','start_time'=>'17:00','end_time'=>'18:00','capacity'=>20,'instructor_id'=>1],
            ['id'=>29,'name'=>'Ioga','date'=>'dijous','start_time'=>'18:00','end_time'=>'19:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>30,'name'=>'BodyCombat','date'=>'dijous','start_time'=>'19:00','end_time'=>'20:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>31,'name'=>'HIIT','date'=>'dijous','start_time'=>'20:00','end_time'=>'21:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>32,'name'=>'Stretching','date'=>'dijous','start_time'=>'21:00','end_time'=>'22:00','capacity'=>20,'instructor_id'=>2],

            // ===================== DIVENDRES =====================
            ['id'=>33,'name'=>'Spinning','date'=>'divendres','start_time'=>'09:00','end_time'=>'10:00','capacity'=>20,'instructor_id'=>1],
            ['id'=>34,'name'=>'Ioga','date'=>'divendres','start_time'=>'10:00','end_time'=>'11:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>35,'name'=>'BodyPump','date'=>'divendres','start_time'=>'11:00','end_time'=>'12:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>36,'name'=>'Crossfit','date'=>'divendres','start_time'=>'17:00','end_time'=>'18:00','capacity'=>20,'instructor_id'=>4],
            ['id'=>37,'name'=>'Zumba','date'=>'divendres','start_time'=>'18:00','end_time'=>'19:00','capacity'=>20,'instructor_id'=>5],
            ['id'=>38,'name'=>'BodyCombat','date'=>'divendres','start_time'=>'19:00','end_time'=>'20:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>39,'name'=>'Pilates','date'=>'divendres','start_time'=>'20:00','end_time'=>'21:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>40,'name'=>'Cardio','date'=>'divendres','start_time'=>'21:00','end_time'=>'22:00','capacity'=>20,'instructor_id'=>5],

            // ===================== DISSABTE =====================
            ['id'=>41,'name'=>'BodyPump','date'=>'dissabte','start_time'=>'09:00','end_time'=>'10:00','capacity'=>20,'instructor_id'=>3],
            ['id'=>42,'name'=>'Ioga','date'=>'dissabte','start_time'=>'10:00','end_time'=>'11:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>43,'name'=>'Crossfit','date'=>'dissabte','start_time'=>'11:00','end_time'=>'12:00','capacity'=>20,'instructor_id'=>4],
            ['id'=>44,'name'=>'Zumba','date'=>'dissabte','start_time'=>'17:00','end_time'=>'18:00','capacity'=>20,'instructor_id'=>5],
            ['id'=>45,'name'=>'Spinning','date'=>'dissabte','start_time'=>'18:00','end_time'=>'19:00','capacity'=>20,'instructor_id'=>1],
            ['id'=>46,'name'=>'Pilates','date'=>'dissabte','start_time'=>'19:00','end_time'=>'20:00','capacity'=>20,'instructor_id'=>6],
            ['id'=>47,'name'=>'Stretching','date'=>'dissabte','start_time'=>'20:00','end_time'=>'21:00','capacity'=>20,'instructor_id'=>2],
            ['id'=>48,'name'=>'BodyCombat','date'=>'dissabte','start_time'=>'21:00','end_time'=>'22:00','capacity'=>20,'instructor_id'=>3],
        ]);
    }
}
