<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendaftaranTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('pendaftaran', function (Blueprint $table) {
            $table->string('no_order', 20)->primary();
            $table->bigInteger('user_id');
            $table->date('tanggal_masuk');
            $table->string('nama_perusahaan', 40);
            $table->text('alamat');
            $table->string('telp_fax', 13);
            $table->string('email_wa', 40);
            $table->string('lk_non_lk', 10);
            $table->date('tanggal_antar_ambil_alat');
            $table->string('no_po_kontrak', 20);
            $table->date('tanggal_po_kontrak');
            $table->text('catatan');
            $table->string('nama_perusahaan_di_sertifikat', 40);
            $table->text('alamat_perusahaan_di_sertifikat');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pendaftaran');
    }
}
