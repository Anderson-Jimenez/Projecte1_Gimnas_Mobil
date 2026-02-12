<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();

            $table->string('name');

            $table->date('date'); //tipo date para saber dia de la semana y calcular que clase hay cada dia.

            // en vez de texto, poner la hora real para manejar reservas 24h antes
            $table->time('start_time');
            $table->time('end_time');

            $table->unsignedInteger('capacity');

            // fk al instructor que da la clase.
            $table->foreignId('instructor_id')->nullable()->constrained('instructors')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};

