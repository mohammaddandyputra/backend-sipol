import React, {useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Grid = () => {

    const [pendaftaran, setPendaftaran] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/tracking-order`)
        .then(res => {
            setPendaftaran(res.data.data)
        })
    }, []);

    const [columnDefs] = useState([
        { 
            headerName: "No Order", 
            field: "no_order", 
            width: 120,
            minWidth: 110, 
            maxWidth: 150, 
        },
        { 
            headerName: "Tanggal Pendaftaran", 
            field: "tanggal_masuk",
            width: 170,
            minWidth: 130, 
            maxWidth: 170, 
        },
        { 
            headerName: "Action", 
            field:"no_order", 
            width: 100, 
            minWidth: 80, 
            maxWidth: 120, 
            cellRendererFramework:(params) => <div>
                <Link to={`/tracking-order/${params.value}`} className="btn btn-primary btn-sm">Detail</Link>
            </div> 
        },
    ]);

    return (
        <div className="justify-content-center d-flex">
            <div className="ag-theme-alpine" style={{height: '400px', width: '600px'}}>
                <AgGridReact
                    defaultColDef={{
                        resizable: true
                    }}
                    rowData={pendaftaran}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}>
                </AgGridReact>
            </div>
        </div>
    );
}

const TrackingOrder = () => {
    return ( 
        <section id="tracking-progress" className="mt-5">
            <div className="container">
                <Grid/>
            </div>
        </section>
    );
}

export default TrackingOrder;