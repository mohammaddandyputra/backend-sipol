import React from "react";

import Team from "../../../../public/img/team.jpg"
import Client1 from "../../../../public/img/clients/pt-kik.jpg";
import Client2 from "../../../../public/img/clients/db-schenker.svg";

const Slide = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 text-center">
                    <h1>Laboratorium dan Jasa Kalibrasi</h1>
                    </div>
                </div>
                <div className="text-center">
                    <a href="#about" className="btn-get-started scrollto text-decoration-none">Dapatkan penawaran untuk kalibrasi</a>
                </div>
            </div>
        </section>
    );
}

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>TENTANG KAMI</h2>
                </div>
                <div className="row content">
                    <div className="col-lg-6 text-justify mb-2">
                        <p>
                            PMT Kalibrasi Industri adalah salah satu layanan metrologi di Indonesia. Sebagai anak perusahaan dari POLARITAS GROUP, kami memiliki pengalaman lebih dibidang teknologi pengukuran. Kami selalu mengembangkan dan meningkatkan mutu pelayanan dengan tim layanan PMT Kalibrasi Industri, sehingga anda yakin bahwa semua persyaratan mengenai teknologi pengukuran dan kalibrasi serta jaminan kualitas akan dipenuhi sepenuhnya.
                        </p>
                        <p>
                            Prosedur kalibrasi yang kami gunakan mengacu pada Standar Nasional dan Internasional berdasarkan sistem manajemen SNI ISO/IEC 17025. Kualitas, keandalan, dan ketidakpastian pengukuran yang rendah adalah
                            landasan kerja kami. Kami senang untuk membantu anda sebagai mitra pelayanan kalibrasi yang komprehensif.
                        </p>
                    </div>
                    <div className="col-lg-6 text-justify">
                        <p>
                            Layanan kalibrasi komprehensif yang dimaksud mencakup lingkup :
                            <li>Thermometry</li>
                            <li>Hygrometry</li>
                            <li>Mass</li>
                            <li>Volumetric</li>
                            <li>Acoustics</li>
                            <li>Testing Instruments</li>
                            <li>Time and Frequency</li>
                        </p>
                        <p>
                            Adapun layanan lainnya yang kami miliki diantaranya :
                            <li>Pelatihan</li>
                            <li>Perbaikan</li>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <div className="section-title">
                    <h2>TIM MANAJEMEN</h2>
                </div>
                <div className="row align-items-center ">
                    <div className="col-lg-2 justify-content-center" data-aos="zoom-in">
                        <img src={Team}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Client = () => {
    return(
        <section id="clients" className="clients section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Clients</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-2 justify-content-center" data-aos="zoom-in">
                        <img src={Client1} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-2 justify-content-center" data-aos="zoom-in">
                        <img src={Client2} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Documentation = () => {
    return(
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Dokumentasi</h2>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/1.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/1.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/2.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/2.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/3.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/3.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/4.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/4.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/5.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/5.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/6.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/6.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/7.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/7.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/8.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/8.jpg" data-gall="portfolioGallery" className="venobox"><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                        <img src="assets/img/polaritas/9.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                        <a href="assets/img/polaritas/9.jpg" data-gall="portfolioGallery" className="venobox" ><i className="bx bx-info-circle"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/polaritas/10.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                        <div className="portfolio-links">
                            <a href="assets/img/polaritas/10.jpg" data-gall="portfolioGallery" className="venobox">
                                <i className="bx bx-info-circle"></i>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

class Content extends React.Component {
    render() {
      return (
        <main id="main">
            <Slide/>
            <About/>
            <Team/>
            <Client/>
            <Documentation/>
        </main>
      );
    }
}

export default Content;
