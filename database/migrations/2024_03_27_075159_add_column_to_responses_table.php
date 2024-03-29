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
        Schema::table('responses', function (Blueprint $table) {
            $table->char('answer')->after('id');
            $table->unsignedBigInteger('form_id')->after('id');;
            $table->foreign('form_id')->references('id')->on('forms')->after('id');;
            
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('responses', function (Blueprint $table) {
            $table->dropColumn('form_id');
            $table->dropForeign('responses_form_id_foreign');
        });
    }
};
