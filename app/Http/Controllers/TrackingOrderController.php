<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Pendaftaran;
use App\Models\PendaftaranListBarang;
use App\Models\TrackingOrder;

use App\Http\Controllers\TagihanController;
use App\Http\Controllers\SertikatController;

class TrackingOrderController extends Controller
{

    public function trackOrder()
    {
        $user_id = auth()->user()->id; 

        $pendaftaran = Pendaftaran::where('user_id', $user_id)->get();

        return response()->json([
            'success' => true,
            'message' => 'Data Track Order ',
            'data' => $pendaftaran
            
        ], 200);
    }

    public function trackOrderDetail($no_order)
    {
        $pendaftaran = Pendaftaran::where('no_order', $no_order)->get();
        
        $pendaftaranListBarang = PendaftaranListBarang::select(
                                    'pendaftaran_list_barang.no_order', 
                                    'pendaftaran_list_barang.kode_alat', 
                                    'alat.nama_alat', 
                                    'pendaftaran_list_barang.merk', 
                                    'pendaftaran_list_barang.type', 
                                    'pendaftaran_list_barang.sn', 
                                    'pendaftaran_list_barang.titik_kalibrasi',
                                    'pendaftaran_list_barang.jenis_sertifikat',
                                    DB::raw("
                                        (SELECT harga_kalibrasi.harga FROM harga_kalibrasi 
                                        WHERE harga_kalibrasi.kode_alat=pendaftaran_list_barang.kode_alat 
                                        AND harga_kalibrasi.jenis_sertifikat=pendaftaran_list_barang.jenis_sertifikat) AS total_estimasi")
                                )
                                ->join('alat', 'pendaftaran_list_barang.kode_alat', '=', 'alat.kode_alat')
                                ->where('no_order', $no_order)
                                ->get();
        $trackingOrder = TrackingOrder::where('no_order', $no_order)->orderBy('tanggal', 'asc')->get();
        
        $tagihan = TagihanController::tagihanDetail($no_order);

        $sertifikat = SertifikatController::sertifikatAlatOrder($no_order);
        
        $data = array(
                    'pendaftar' => $pendaftaran,
                    'pendaftaranListBarang' => $pendaftaranListBarang,
                    'trackingOrder' => $trackingOrder,
                    'tagihan' => $tagihan,
                    'sertifikat' => $sertifikat
                );

        return response()->json([
            'success' => true,
            'message' => 'Data Track Order '.$no_order,
            'data' => $data
            
        ], 200);
    }

}
