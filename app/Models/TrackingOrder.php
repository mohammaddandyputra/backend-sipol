<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrackingOrder extends Model
{
    use HasFactory;
    
    public $timestamps = false;

    protected $table = "tracking_orders";
    
    protected $fillable = ['no_order', 'tanggal', 'status'];
}
