<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tagihan extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "tagihan";
    
    protected $fillable = ['kode_billing', 'no_order', 'tanggal_terbit_tagihan', 'total_biaya', 'diskon', 'total_pembayaran', 'file_tagihan'];
}
