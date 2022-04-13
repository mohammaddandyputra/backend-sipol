import React, {useState} from "react";
import useSWR from "swr";
import { Link } from 'react-router-dom';
import LingkupAddModal from "../modal/LingkupModal";

import IconTestingInstrument from "../../../../public/img/kapabilitas/massa.png";

const Breadcrumb = () => {
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-end">
                    <ol>
                        <li>
                            <Link to={`/`} className="link">Home</Link>
                        </li>
                        <li>Kapabilitas</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

const fetcher = (url) => fetch(url).then((res) => res.json()).then((dataApi) => dataApi.data);

const LingkupContent = () => {

    const { data } = useSWR("http://127.0.0.1:8000/api/lingkup", fetcher, {refreshInterval: 2000});

    return (
        
        <section id="services" className="services section-bg">
            <Breadcrumb/>
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">
                    {data ? ( data.map((data) => {
                        return (
                            <Link to={'/lingkup/'+data.slug} className="card col-md-2 ml-1 mr-1 mt-1 mb-1">
                                <img src={IconTestingInstrument}/>
                                <div className="card-body">
                                    <h6 className="text-center">{data.nama}</h6>
                                </div>
                            </Link>
                        );
                    })
                    ) : (
                        <h1>Loading...</h1>
                    )}
                    <LingkupAddModal/>
                </div>
            </div>
        </section>
            
    );
}

export default LingkupContent;
