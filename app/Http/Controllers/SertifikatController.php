<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sertifikat;

class SertifikatController extends Controller
{
    public function sertifikatAlatOrder($no_order)
    {
        $sertifikat = Sertifikat::select(
                            'alat.nama_alat',
                            'pendaftaran_list_barang.merk',
                            'pendaftaran_list_barang.type' , 
                            'pendaftaran_list_barang.sn', 
                            'sertifikat.file_sertifikat'
                        )
                        ->join('pendaftaran_list_barang', 'sertifikat.id_alat_order', '=', 'pendaftaran_list_barang.id')
                        ->join('alat', 'pendaftaran_list_barang.kode_alat', '=', 'alat.kode_alat')
                        ->where('pendaftaran_list_barang.no_order', $no_order)
                        ->get();
        
        return $sertifikat;
    }

    public function downloadFileSertifikat($no_order)
    {
    	$pathFile = public_path("file/sertifikat/".$no_order.".pdf");
    	$Filename = "E-Sertifikat Kalibrasi - ".$no_order.".pdf";

        return response()->download($pathFile, $Filename);
    }
}
