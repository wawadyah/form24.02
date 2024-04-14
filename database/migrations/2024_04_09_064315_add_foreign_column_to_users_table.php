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
        Schema::table('users', function (Blueprint $table) {
            $table->string('email')->after('name');
            $table->string('password')->after('name');
            $table->unsignedBigInteger('role_id')->after('name');
            $table->foreign('role_id')->references('id')->on('roles')->after('name');
            $table->string('status')->default('inactive')->after('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_category');
    }
};
