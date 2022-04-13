<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "pendaftaran";
    
    protected $fillable = ['no_order', 'tanggal_masuk', 'nama_perusahaan', 'alamat', 'telp_fax', 'email_wa', 'lk_non_lk', 'tanggal_antar_ambil_alat', 'no_po_kontrak', 'tanggal_po_kontrak', 'catatan', 'nama_perusahaan_di_sertifikat', 'alamat_perusahaan_di_sertifikat'];
    
}
