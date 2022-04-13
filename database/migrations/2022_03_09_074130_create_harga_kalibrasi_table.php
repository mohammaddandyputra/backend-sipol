<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHargaKalibrasiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('harga_kalibrasi', function (Blueprint $table) {
            $table->id();
            $table->integer('kode_alat');
            $table->enum('jenis_sertifikat', ['0', '1'])->comment('0 = Non-KAN, 1 = KAN');
            $table->bigInteger('harga_kalibrasi');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('harga_kalibrasi');
    }
}
