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
        Schema::table('forms', function (Blueprint $table) {
            $table->string('title')->after('id'); // Menggunakan 'string' bukan 'varchar'
            $table->string('desc')->nullable()->after('title'); // Menggunakan 'string' bukan 'varchar'
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('forms', function (Blueprint $table) {
            $table->dropColumn('title');
            $table->dropColumn('desc');
        });
    }
};
