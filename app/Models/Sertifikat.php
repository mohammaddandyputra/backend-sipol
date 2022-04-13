<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sertifikat extends Model
{
    use HasFactory;
    
    public $timestamps = false;

    protected $table = "sertifikat";
    
    protected $fillable = ['id_alat_order', 'file_sertifikat'];
}
