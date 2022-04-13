<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendaftaranListBarang extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "pendaftaran_list_barang";
    
    protected $fillable = ['kode_alat', 'merk', 'type', 'sn', 'titik_kalibrasi', 'jenis_sertifikat'];
}
