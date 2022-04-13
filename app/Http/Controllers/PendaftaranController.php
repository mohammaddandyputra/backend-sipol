<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Pendaftaran;
use App\Models\PendaftaranListBarang;
use Carbon\Carbon;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class PendaftaranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pendaftaran = PendaftaranListBarang::all();

        return \response()->json([
            'success' => true,
            'message' => 'Data Pendaftaran',
            'data' => $pendaftaran
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {

        // $validator = Validator::make($request->all(), [
        //     'tanggal_masuk' => 'required',
        //     'nama_perusahaan' => 'required',
        //     'alamat' => 'required',
        //     'telp_fax' => 'required',
        //     'email_wa' => 'required',
        //     'lk_non_lk' => 'required',
        //     'tanggal_antar_ambil_alat' => 'required',
        // ]);

        // if ($validator->fails())
        // {
        //     return response()->json([
        //         'validate_err' => $validator->messages(),
        //     ]);
        // }
        $user_id = auth()->user()->id; 
        $data = $request->all();
        $no_order = IdGenerator::generate(['table' => 'pendaftaran', 'field' => 'no_order', 'length' => 10, 'prefix' =>'INV-']);

        // Insert to table pendaftaran

        foreach($data as $value){
            $pendaftaran = $value;
        }

        $pendaftar = Pendaftaran::insert([
            'no_order' => $no_order,
            'user_id' => $user_id,
            'tanggal_masuk' => Carbon::now()->format('Y-m-d'),
            'nama_perusahaan' => $pendaftaran['nama_perusahaan'],
            'alamat' => $pendaftaran['alamat'],
            'telp_fax' => $pendaftaran['telp_fax'],
            'email_wa' => $pendaftaran['email_wa'],
            'lk_non_lk' => $pendaftaran['lk_non_lk'],
            'tanggal_antar_ambil_alat' => $pendaftaran['tanggal_antar_ambil_alat'],
            'catatan' => $pendaftaran['catatan'],
            'nama_perusahaan_di_sertifikat' => $pendaftaran['nama_perusahaan_di_sertifikat'], 
            'alamat_perusahaan_di_sertifikat' => $pendaftaran['alamat_perusahaan_di_sertifikat']
        ]);

        // Insert to table pendaftaran list barang

        foreach($data[0] as $value){
            $list_alat[] = [
                'no_order' => $no_order,
                'kode_alat' => $value['nama_barang'],
                'merk' => $value['merk'],
                'type' => $value['type'],
                'sn' => $value['sn'],
                'titik_kalibrasi' => $value['titik_kalibrasi'],
                'jenis_sertifikat' => $value['jenis_sertifikat'],
            ];
        }

        $pendaftaran_data_alat = PendaftaranListBarang::insert($list_alat);
        
        if($pendaftaran_data_alat){
            return response()->json([
                'success' => true,
                'message' => 'Berhasil ditambahkan',
                'data' => $pendaftaran_data_alat, $pendaftar
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
