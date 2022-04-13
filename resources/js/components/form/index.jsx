import React, {useState, useEffect} from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";

const FormPengajuanKalibrasi = () => {
    
    const [checkedForm, setCheckedForm] = useState(false);
    const [disabledForm, setDisabledForm] = useState(false);
    const [checkedRadio, setCheckedRadio] = useState(true);
    const [disabledInput, setDisabledInput] = useState(false);
    const [alat, setAlat] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/alat`)
        .then(res => {
            setAlat(res.data.data);
        })
    }, []);

    // const options = [
    //     {value: 'value-1', text: 'text-1'},
    //     {value: 'value-2', text: 'text-2'},
    //     {value: 'value-3', text: 'text-3'}
    // ];

    const [pendaftarans, setPendaftarans] = useState({
        no_order: '',
        tanggal_masuk: '',
        nama_perusahaan: '',
        alamat: '',
        telp_fax: '',
        email_wa: '',
        lk_non_lk: '',
        tanggal_antar_ambil_alat: '',
        catatan: '',
        nama_perusahaan_di_sertifikat: '',
        alamat_perusahaan_di_sertifikat: '',
    })
    
    const [listBarangs, setListBarangs] = useState([
        {
            nama_barang: '',
            merk: '',
            type: '',
            sn: '',
            titik_kalibrasi: '',
            kan_non_kan: '',
        }
    ]);

    const handleChange = (event) => {
        const newData = { ...pendaftarans }
        newData[event.target.name] = event.target.value
        setPendaftarans(newData);
    }

    const handleChangeInput = (index, event) => {
        const values = [...listBarangs];
        values[index][event.target.name] = event.target.value;
        setListBarangs(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // const pendaftaran = pendaftarans;
        // const listBarang = listBarangs;
        // const pendaftaran_dan_listBarang = [listBarang, pendaftaran];
        
        // axios.post(`http://127.0.0.1:8000/api/pendaftaran`, pendaftaran_dan_listBarang);

        console.log(listBarangs)

    }

    

    const handleAddFields = () => {
        setListBarangs([...listBarangs, {
            nama_barang: '',
            merk: '',
            type: '',
            sn: '',
            titik_kalibrasi: '',
            kan_non_kan: ''
        }])
    }

    const handleRemoveFields = (index) => {
        const values = [...listBarangs];
        values.splice(index, 1);
        setListBarangs(values);
    }

    const handleChecked = () => {
        if(!checkedForm){
            setCheckedForm(true);
            setDisabledForm(true);
            const values =   {...pendaftarans, 
                                                        nama_perusahaan_di_sertifikat: pendaftarans.nama_perusahaan, 
                                                        alamat_perusahaan_di_sertifikat: pendaftarans.alamat
                                                    };
            setPendaftarans(values);
        }
        else{
            setCheckedForm(false);
            setDisabledForm(false);
            const values =  {...pendaftarans, 
                                nama_perusahaan_di_sertifikat: "",
                                alamat_perusahaan_di_sertifikat: ""
                            };
            setPendaftarans(values);
        }
    }

    const handleRadioKanNonKan = (event) => {
        const kan_non_kan = event.target.value;
        if(kan_non_kan == "0"){

            const kan_non_kan = { ...listBarangs, lk_non_lk: "0" }
            setPendaftarans(kan_non_kan);
        }
        else{
            const kan_non_kan = { ...listBarangs, lk_non_lk: "1" }
            setPendaftarans(kan_non_kan);
        }
    }

    const handleRadio = (event) => {
        const lk_non_lk = event.target.value;
        if(lk_non_lk == "Non-LK"){            
            setDisabledInput(true);
            setCheckedRadio(false);
            const lk_non_lk = { ...pendaftarans, lk_non_lk: "Non-LK" }
            setPendaftarans(lk_non_lk);
        }
        else{
            
            setCheckedRadio(true);
            setDisabledInput(false);
            const lk_non_lk = { ...pendaftarans, lk_non_lk: "" }
            setPendaftarans(lk_non_lk);
        }
    }

    return (
            <section id="form-register">
                <div className="container mt-5">
                <div className="card">
                    <div className="card-header text-center">
                        <h4>FORM PENGAJUAN KALIBRASI</h4>
                    </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group row">
                                        <label htmlFor="no_order" className="col-sm-5 col-form-label">No. Order</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="no_order" id="no_order" value={pendaftarans.no_order} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="nama_perusahaan" className="col-sm-5 col-form-label">Nama Perusahaan</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="nama_perusahaan" id="nama_perusahaan" value={pendaftarans.nama_perusahaan} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="alamat" className="col-sm-5 col-form-label">Alamat</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" name="alamat" id="alamat" value={pendaftarans.alamat} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="telp_fax" className="col-sm-5 col-form-label">Telp/Fax</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="telp_fax" id="telp_fax" value={pendaftarans.telp_fax} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email_wa" className="col-sm-5 col-form-label">Email/WA</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="email_wa" id="email_wa" value={pendaftarans.email_wa} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="lingkup_perusahaan" id="lingkup_perusahaan" value="LK" onChange={(e) => handleRadio(e)} checked={checkedRadio} />
                                                <label className="form-check-label mr-2" htmlFor="lk">LK</label>
                                                <input type="text" className="form-control" name="lk_non_lk" id="lk_non_lk" value={pendaftarans.lk_non_lk} onChange={handleChange} disabled={disabledInput} style={{width: '85px'}}/>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="lingkup_perusahaan" id="lingkup_perusahaan" value="Non-LK" onChange={(e) => handleRadio(e)}/>
                                                <label className="form-check-label" htmlFor="inlineRadio2">Non-LK</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group row">
                                        <label htmlFor="tanggal_masuk" className="col-sm-5 col-form-label">Tanggal Masuk</label>
                                        <div className="col-sm-7">
                                            <input type="date" className="form-control" name="tanggal_masuk" id="tanggal_masuk" value={pendaftarans.tanggal_masuk} onChange={handleChange} placeholder="..."/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="tanggal_antar_ambil" className="col-sm-5 col-form-label">Tanggal Antar/Ambil Alat</label>
                                        <div className="col-sm-7">
                                            <input type="date" className="form-control" name="tanggal_antar_ambil_alat" id="tanggal_antar_ambil" value={pendaftarans.tanggal_antar_ambil_alat} onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="catatan" className="col-sm-5 col-form-label">Catatan</label>
                                        <div className="col-sm-7">
                                            <textarea className="form-control" name="catatan" id="catatan" value={pendaftarans.catatan} onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card ml-3 mr-3">
                            <div className="card-body">
                                <p className="text-danger"><small>Dengan ini kami bermaksud mengajukan permohonan penawaran/permintaan kalibrasi sesuai dengan data berikut ini :</small></p>
                            
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="defaultCheck1" onChange={handleChecked} checked={checkedForm}/>
                                    <label className="form-check-label" htmlFor="">
                                        <p>*Jika data sesuai dengan data di formulir atas, silahkan ceklis</p>
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group row">
                                            <label htmlFor="nama_perusahaan_di_sertifikat" className="col-sm-3 col-form-label">Nama Perusahaan di Sertifikat</label>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" name="nama_perusahaan_di_sertifikat" id="nama_perusahaan_di_sertifikat" disabled={disabledForm} value={pendaftarans.nama_perusahaan_di_sertifikat} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="alamat_perusahaan_di_sertifikat" className="col-sm-3 col-form-label">Alamat Perusahaan di Sertifikat</label>
                                            <div className="col-sm-5">
                                                <textarea className="form-control" name="alamat_perusahaan_di_sertifikat" id="alamat_perusahaan_di_sertifikat" disabled={disabledForm} value={pendaftarans.alamat_perusahaan_di_sertifikat} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="text-danger"><small>*) Harus di isi dengan jelas dan lengkap</small></p>
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
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {listBarangs.map((listBarang, index) => (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td className="d-flex justify-content-start" style={{width: '200px'}}>
                                                    <select name="nama_barang" className="custom-select" onChange={ event => handleChangeInput(index, event)} value={listBarang.nama_barang}>
                                                        <option value="" disabled>Select your option</option>
                                                        {alat.map((tool, index) => {
                                                            return (<option key={index} value={tool.kode_alat} className="font-weight-bold">{tool.nama_alat}</option>);
                                                        })}
                                                    </select>
                                                </td>
                                                <td><input type="text" className="form-control" name="merk" id="merk" onChange={ event => handleChangeInput(index, event)} style={{width: '100px'}} value={listBarang.merk}/></td>
                                                <td><input type="text" className="form-control" name="type" id="type" onChange={ event => handleChangeInput(index, event)} style={{width: '100px'}} value={listBarang.type}/></td>
                                                <td><input type="text" className="form-control" name="sn" id="sn" onChange={ event => handleChangeInput(index, event)} style={{width: '150px'}} value={listBarang.sn}/></td>
                                                <td><input type="text" className="form-control" name="titik_kalibrasi" id="titik_kalibrasi" onChange={ event => handleChangeInput(index, event)} value={listBarang.titik_kalibrasi}/></td>
                                                <td style={{width: '200px'}}>
                                                    <form>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="kan_non_kan" id="kan_non_kan" onChange={ event => handleChangeInput(index, event)} value="1"/>
                                                            <label className="form-check-label">KAN</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="kan_non_kan" id="kan_non_kan" onChange={ event => handleChangeInput(index, event)} value="0"/>
                                                            <label className="form-check-label">Non-KAN</label>
                                                        </div>
                                                    </form>
                                                </td>
                                                <td>
                                                    <div className="btn-group mr-2">
                                                        {
                                                            (index !== 0) ? <button className="btn btn-secondary mr-1 rounded" onClick={() => handleRemoveFields(index)}><FaMinus/></button> : "" 
                                                        }
                                                        
                                                        <button className="btn btn-primary rounded" onClick={() => handleAddFields()}><FaPlus/></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                            
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row justify-content-end">
                                <div className="col-sm-1">
                                    <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Save</button>
                                </div>
                            </div>
                        </div>
                    
                </div>
                </div>
            </section>
    );
}

export default FormPengajuanKalibrasi;
