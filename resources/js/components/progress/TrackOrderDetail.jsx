import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { saveAs } from "file-saver";
import { AiOutlineCloudDownload } from "react-icons/ai";

const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

const DetailOrder = () => {
    
    const [pendaftaranListBarang, setPendaftaranListBarang] = useState([]);
    let params = useParams();
    const totalEstimasi = pendaftaranListBarang.reduce((order, alat) => order + alat.total_estimasi, 0);
    

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tracking-order/`+params.no_order)
        .then(res => {
            setPendaftaranListBarang(res.data.data.pendaftaranListBarang);
        })
    }, []);

    return (
            <div className="card">
                <div className="card-header text-center font-weight-bold">
                   List Order Kalibrasi
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 overflow-auto">
                            <table id="table-form" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nama Barang*</th>
                                        <th scope="col">Merk*</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">SN</th>
                                        <th scope="col">Titik Kalibrasi*</th>
                                        <th scope="col">Jenis Sertifikat</th>
                                        <th scope="col">Estimasi Biaya</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendaftaranListBarang.map(
                                        (data, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{key+1}</td>
                                                    <td>{data.nama_alat}</td>
                                                    <td>{data.merk}</td>
                                                    <td>{data.type}</td>
                                                    <td>{data.sn}</td>
                                                    <td>{data.titik_kalibrasi}</td>
                                                    <td>
                                                        {data.jenis_sertifikat === '1'  ? 'KAN' : 'Non-KAN'}
                                                    </td>
                                                    <td>
                                                        {data.total_estimasi !== null  ? formatCurrency(data.total_estimasi) : <i>Belum diketahui</i>}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )}
                                </tbody>
                                <tfoot className="font-weight-bold font-italic">
                                    <tr>
                                        <td colSpan={7} className="text-center">Total Estimasi</td>
                                        <td>
                                            {formatCurrency(totalEstimasi)}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
}

const TrackingOrder = () => {

    const [trackingOrders, setTrackingOrders] = useState([]);
    let params = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tracking-order/`+params.no_order)
        .then(res => {
            setTrackingOrders(res.data.data.trackingOrder);
        })
    }, []);

    return (
        <div className="card mt-3">
            <div className="card-header text-center font-weight-bold">
                Tracking Order
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-body text-center">
                            No Result Found
                        </div>
                        <nav className="navmenu">
                            <ul>
                                {trackingOrders.map(
                                    (data, key) => {
                                        return (
                                            <li key={key}>
                                                <p>
                                                    <span><i>{data.tanggal}</i></span><br></br>
                                                    {data.status}
                                                </p>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BillingDetail = () => {

    const [tagihan, setTagihan] = useState([]);
    let params = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tracking-order/`+params.no_order)
        .then(res => {
            setTagihan(res.data.data.tagihan);
        })
    }, []);

    const download = (e, no_order) => {
        e.preventDefault();
        saveAs("http://127.0.0.1:8000/api/download/tagihan/31012022");
    }

    const diskon = (total_biaya, diskon) => {
    
        const hitung = (diskon/100)*total_biaya;
        const totalDiskon = formatCurrency(hitung) + ' (' + diskon + '%)';
    
        return totalDiskon;
    }

    const totalPembayaran = (total_biaya, diskon_harga) => {

        const totalBiaya = total_biaya;
        const diskonHarga = (diskon_harga/100)*total_biaya;
        const total_pembayaran =  totalBiaya - diskonHarga;

        return formatCurrency(total_pembayaran);
    }

    return (
            <div className="card mt-3">
                <div className="card-header text-center font-weight-bold">
                    Billing Details
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 overflow-auto">
                            <table id="table-form" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tanggal Terbit Tagihan</th>
                                        <th scope="col">Total Biaya</th>
                                        <th scope="col">Diskon</th>
                                        <th scope="col">Total Pembayaran</th>
                                        <th scope="col">File Tagihan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tagihan == "" ? 
                                        <tr>
                                            <td colSpan={6} className="text-center">No Result Found</td>
                                        </tr> 
                                        :
                                        tagihan.map(
                                            (data, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <th scope="row">{key+1}</th>
                                                        <td>{data.tanggal_terbit_tagihan}</td>
                                                        <td>{formatCurrency(data.total_biaya)}</td>
                                                        <td>
                                                            {diskon(data.total_biaya, data.diskon)}
                                                        </td>
                                                        <td>{totalPembayaran(data.total_biaya, data.diskon)}</td>
                                                        <td>
                                                            <button onClick={e => download(e, data.no_order) } className="btn btn-danger ml-2">
                                                                <AiOutlineCloudDownload style={{fontSize: '25px'}}/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
}

const Sertifikat = () => {

    const [sertifikat, setSertifikat] = useState([]);
    let params = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tracking-order/`+params.no_order)
        .then(res => {
            setSertifikat(res.data.data.sertifikat);
        })
    }, []);

    const download = (e, no_order) => {
        e.preventDefault();
        saveAs("http://127.0.0.1:8000/api/download/sertifikat/31012022");
    }

    return (
            <div className="card mt-3">
                <div className="card-header text-center font-weight-bold">
                    E- Sertifikat
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 overflow-auto">
                            <table id="table-form" className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nama Barang*</th>
                                        <th scope="col">Merk*</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">SN</th>
                                        <th scope="col">File Sertifikat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sertifikat == "" ? 
                                        <tr>
                                            <td colSpan={6} className="text-center">No Result Found</td>
                                        </tr> 
                                        :
                                        sertifikat.map(
                                            (data, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key+1}</td>
                                                        <td>{data.nama_alat}</td>
                                                        <td>{data.merk}</td>
                                                        <td>{data.type}</td>
                                                        <td>{data.sn}</td>
                                                        <td>
                                                            <button onClick={e => download(e, data.no_order) } className="btn btn-danger ml-2">
                                                                <AiOutlineCloudDownload style={{fontSize: '25px'}}/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
}

const TrackingOrderDetail = () => {
    return (
        <section id="tracking-progress" className="mt-5">
            <div className="container">
                <DetailOrder/>
                <TrackingOrder/>
                <BillingDetail/>
                <Sertifikat/>
            </div>
        </section>
    );
}

export default TrackingOrderDetail;
