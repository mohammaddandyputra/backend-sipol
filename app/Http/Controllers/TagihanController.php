<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Tagihan;

class TagihanController extends Controller
{

    public function tagihanDetail($no_order)
    {
        $tagihan = Tagihan::where('no_order', $no_order)->get();

        return $tagihan;
    }

    public function downloadFileTagihan($no_order)
    {
    	$pathFile = public_path("file/tagihan/".$no_order.".pdf");
    	$Filename = "Tagihan Kalibrasi - ".$no_order.".pdf";
        
        return response()->download($pathFile, $Filename);
    }

}
