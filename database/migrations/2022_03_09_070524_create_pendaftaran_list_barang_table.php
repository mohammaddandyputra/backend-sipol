<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendaftaranListBarangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    
    public function up()
    {
        Schema::create('pendaftaran_list_barang', function (Blueprint $table) {
            $table->id();
            $table->string('no_order', 20);
            $table->integer('kode_alat');
            $table->string('merk', 30);
            $table->string('type', 30);
            $table->string('sn', 30);
            $table->string('titik_kalibrasi', 30);
            $table->string('jenis_sertifikat');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pendaftaran_list_barang');
    }
}
