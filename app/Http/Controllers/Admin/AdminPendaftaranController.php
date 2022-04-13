<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pendaftaran;
use App\Models\PendaftaranListBarang;

class AdminPendaftaranController extends Controller
{
    public function index()
    {
        $pendaftaran  = Pendaftaran::select(
            'pendaftaran.no_order',
            'pendaftaran.tanggal_masuk',
            'users.name as customer_name',
        )
        ->join('users', 'pendaftaran.user_id', '=', 'users.id')
        ->get();

        return response()->json([
            'success' => 200,
            'data' => $pendaftaran
        ]);
    }

    public function detail($no_order)
    {
        // $list_alat  = PendaftaranListBarang::where('no_order', $no_order)->get();
        $list_alat  = PendaftaranListBarang::select(
            'pendaftaran_list_barang.id', 
            'alat.nama_alat', 
            'pendaftaran_list_barang.merk', 
            'pendaftaran_list_barang.type', 
            'pendaftaran_list_barang.sn', 
            'pendaftaran_list_barang.titik_kalibrasi', 
            'pendaftaran_list_barang.jenis_sertifikat', 
            'sertifikat.file_sertifikat' 
        )
        ->join('alat', 'pendaftaran_list_barang.kode_alat', '=', 'alat.kode_alat')
        ->join('sertifikat', 'pendaftaran_list_barang.id', '=', 'sertifikat.id_alat_order')
        ->where('no_order', $no_order)->get();

        return response()->json([
            'success' => 200,
            'data' => $list_alat
        ]);
    }
}
