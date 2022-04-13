import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const LingkupAddModal = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        nama: ""
    });

    function handle(e){
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e){
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/lingkup`, {
            nama: data.nama
        })
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <>
            <Button id="addLingkup" onClick={handleShow} className="btn btn-primary ml-2">
                <h1>+</h1>
            </Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Tambah Lingkup Baru</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => submit(e)}>
                        <div className="form-group row">
                            <label htmlFor="nama" className="col-sm-4 col-form-label">Nama Lingkup</label>
                            <div className="col-sm-8">
                                <input onChange={(e) => handle(e)} id="nama" value={data.nama} type="text" className="form-control"/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" onClick={handleClose}>Save</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LingkupAddModal;
