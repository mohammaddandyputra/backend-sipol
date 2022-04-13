<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagihanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    protected $fillable = ['kode_billing', 'no_order', 'tanggal_terbit_tagihan', 
    'total_biaya', 'diskon', 'total_pembayaran', 'file_tagihan'];

    public function up()
    {
        Schema::create('tagihan', function (Blueprint $table) {
            $table->integer('kode_billing')->primary();
            $table->string('no_order', 20);
            $table->date('tanggal_terbit_tagihan');
            $table->bigInteger('total_biaya');
            $table->bigInteger('diskon');
            $table->bigInteger('total_pembayaran');
            $table->string('file_tagihan', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tagihan');
    }
}
