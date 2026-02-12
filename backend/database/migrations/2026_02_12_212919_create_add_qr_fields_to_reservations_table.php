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
        Schema::table('reservations', function (Blueprint $table) {
            $table->string('qr_token', 64)->nullable()->unique()->after('status');
            
            $table->timestamp('qr_generated_at')->nullable()->after('qr_token');
            
            $table->boolean('qr_used')->default(false)->after('qr_generated_at');
            
            $table->timestamp('qr_used_at')->nullable()->after('qr_used');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('reservations', function (Blueprint $table) {
            $table->dropColumn([
                'qr_token',
                'qr_generated_at',
                'qr_used',
                'qr_used_at'
            ]);
        });
    }
};