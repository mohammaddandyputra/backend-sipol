<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lingkup extends Model
{
    use HasFactory;
    
    public $timestamps = false;

    protected $table = "lingkup";

    protected $fillable = ['nama', 'slug'];

}
