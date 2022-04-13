import React, {useState, useEffect} from "react";

import { Link, useParams } from 'react-router-dom';

const Breadcrumb = () => {

    let params = useParams();

    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-end">
                    <ol>
                        <li>
                            <Link to={`/`} className="link">Home</Link>
                        </li>
                        <li>
                            <Link to={`/lingkup`} className="link">Kapabilitas</Link>
                        </li>
                        <li>Hygromteri</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

const AlatContent = () => {

    const [tools, setTools] = useState([]);

    let params = useParams();

    useEffect(() => {
        const fetchTool = async () => {
            const response = await (await fetch('http://127.0.0.1:8000/api/lingkup/'+params.slug)).json();
            const Tool = response.data;
            for (let i=0; i < Tool.length; i++){
                const dataTool = {
                    kode_alat: Tool[i].kode_alat,
                    nama_alat: Tool[i].nama_alat,
                    image_path: Tool[i].image_path,
                }

                setTools(prevTools => [...prevTools, dataTool]);
            }
        };
        fetchTool();
    }, []);

    return (
            <section id="services" className="services section-bg">
                <Breadcrumb/>
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center">
                        {tools.map(tool => 
                            <Link to={`/lingkup/${params.slug}/${tool.kode_alat}`} className="card col-md-2 ml-1 mr-1 mt-1 mb-1">
                                <img src={require(`./../../../../public/img/${tool.image_path}`).default}/>
                                <div className="card-body">
                                    <h6 className="text-center">{tool.nama_alat}</h6>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </section>
    );
}

export default AlatContent;
