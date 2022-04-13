<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Lingkup;
use App\Models\Alat;

class LingkupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lingkups = Lingkup::select('id', 'nama', 'slug')->get();

        return \response()->json([
            'success' => true,
            'message' => 'Data Lingkup',
            'data' => $lingkups
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
        \Validator::make($request->all(), [
            'nama' => 'required',
        ])->validate();

        $lingkup = Lingkup::create([
            'nama' => $request->nama,
            'slug' => \Str::slug($request->get('nama') , '-')
        ]);

        if($lingkup){
            return response()->json([
                'success' => true,
                'message' => 'Berhasil ditambahkan',
                'data' => $lingkup
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($lingkup)
    {
        $alat = db::table('lingkup_alat')
                        ->select('alat.kode_alat', 'alat.nama_alat', 'alat.image_path')
                        ->join('alat', 'lingkup_alat.kode_alat', '=', 'alat.kode_alat')
                        ->join('lingkup', 'lingkup_alat.id_lingkup', '=', 'lingkup.id')
                        ->where('lingkup.slug', $lingkup)
                        ->get();

        return \response()->json([
            'success' => true,
            'message' => 'Data',
            'data' => $alat
        ], 200);
    }

    public function detailAlat($lingkup, $kode_alat)
    {
        $alat = Alat::select('kode_alat', 'nama_alat', 'image_path')->where('kode_alat', $kode_alat)->get();

        return \response()->json([
            'success' => true,
            'message' => 'Data',
            'data' => $alat
        ], 200);
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
