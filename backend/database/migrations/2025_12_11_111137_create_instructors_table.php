<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instructors', function (Blueprint $table) {
            $table->id();
            $table->string('surnames',50);
            $table->string('name',15);
            $table->string('dni',50);
            $table->string('password',50);
            $table->string('email',50);
            $table->string('phone',50);
            $table->string('address',50);
            $table->enum('state', ['ACTIVE', 'DESACTIVATED'])->default('ACTIVE');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructors');
    }
};
