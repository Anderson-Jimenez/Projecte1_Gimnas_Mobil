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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->enum('state', ['ACTIVE', 'DESACTIVATED'])->default('ACTIVE');
            $table->unsignedBigInteger('fk_id_user');
            $table->foreign('fk_id_user')->references('id')->on('usersGym')->onDelete('cascade');
            $table->unsignedBigInteger('fk_id_class');
            $table->foreign('fk_id_class')->references('id')->on('classes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
