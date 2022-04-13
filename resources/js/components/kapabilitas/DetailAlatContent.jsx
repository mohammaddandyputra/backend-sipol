import React, {useState, useEffect} from "react";

import { Link, useParams } from 'react-router-dom';

const DetailAlatContent = () => {

    const [tools, setTools] = useState([]);

    let params = useParams();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/lingkup/"+params.slug+"/"+params.kode_alat)
        .then((response) => response.json())
        .then(alat => setTools(alat.data))
    })

    return (
            <>
            {tools.map(tool =>
                <section id="detail" className="section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                                <div className="col-md-4">
                                    <img src={require(`./../../../../public/img/${tool.image_path}`).default}/>
                                </div>
                                <div className="col-md-8">
                                    <h2>{tool.nama_alat}</h2>
                                    <p className="text-justify">
                                        Alat ini proses kalibrasi dilakukan pada climatic chamber untuk mendapatkan kondisi suhu dan %RH yang diinginkan. Output termohigrometer dibandingkan dengan nilai termohigrometer standar berupa termohigrometer probe bertipe electrical hygrometer.
                                    </p>
                                    <table className="table" border="1">
                                        <thead className="thead-dark text-center">
                                            <tr className="align-middle">
                                                <th scope="col" rowSpan={2} className="align-middle">#</th>
                                                <th scope="col" colSpan={2} className="align-middle">Rentang Ukur</th>
                                                <th scope="col" rowSpan={2} className="align-middle">CMC</th>
                                                <th scope="col" rowSpan={2} className="align-middle">Metode</th>
                                            </tr>
                                            <tr>
                                                <th scope="col">min</th>
                                                <th scope="col">max</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>10 °C</td>
                                                <td>40 °C</td>
                                                <td>30 °C</td>
                                                <td>Perbandingan dengan termohigrometer bentuk probe</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button id="btn-checkout" className="btn btn-outline-info">Daftar Kalibrasi</button>
                                </div>
                            
                        </div>
                    </div>
                </section>
                )}
            </>
    )
}

export default DetailAlatContent;
