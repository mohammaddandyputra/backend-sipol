<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AlatController;
use App\Http\Controllers\LingkupController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\TrackingOrderController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TagihanController;
use App\Http\Controllers\SertifikatController;

use App\Http\Controllers\Admin\AdminPendaftaranController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::post('/pendaftaran', [PendaftaranController::class, 'store']);
    Route::get('/tracking-order', [TrackingOrderController::class, 'trackOrder']);
    Route::get('/tracking-order/{no_order}', [TrackingOrderController::class, 'trackOrderDetail']);
    
    //Download
    

    //Master Nomenklatur
    Route::resource('/alat', AlatController::class);

    //Harga Kalibrasi
    // Route::get('/harga_kalibrasi/{kode_alat}/{jenis_sertifikat}', [HargaKalibrasiController::class, 'index']);
    
    //Authentication
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::resource('/lingkup', LingkupController::class);
Route::get('/lingkup/{lingkup}/{kode_alat}', [LingkupController::class, 'detailAlat']);

Route::get('/download/tagihan/{no_order}', [TagihanController::class, 'downloadFileTagihan']);
Route::get('/download/sertifikat/{no_order}', [SertifikatController::class, 'downloadFileSertifikat']);

//Admin
Route::get('/admin/pendaftaran', [AdminPendaftaranController::class, 'index']);
Route::get('/admin/pendaftaran/{no_order}', [AdminPendaftaranController::class, 'detail']);