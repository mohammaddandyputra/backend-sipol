import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Kontak</h2>
                </div>
                <div>
                    <iframe style={{border: '0', width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31726.85857362308!2d106.663527!3d-6.28248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3a7f7ff447c02bf!2sPT.%20Polaritas%20Instrumentation%20Technology!5e0!3m2!1sid!2sid!4v1635907862458!5m2!1sid!2sid" frameBorder={0} allowFullScreen></iframe>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i><IoLocationOutline style={{fontSize: '25px'}}/></i>
                                <h4>Location:</h4>
                                <p>Komp. Bumi Serpong Damai Sektor VII, Blok RN No.68, Lengkong Wetan, Kec. Serpong, Kota Tangerang Selatan, Banten 15310</p>
                            </div>
                            <div className="email">
                            <i><AiOutlineMail style={{fontSize: '25px'}}/></i>
                                <h4>Email:</h4>
                                <p>pmt_calibration@polaritasgroup.com</p>
                            </div>
                            <div className="phone">
                                <i><AiOutlinePhone style={{fontSize: '25px'}}/></i>
                                <h4>Call:</h4>
                                <p>08988660113</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div id="footer">
                            <div className="footer-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 footer-links">
                                            <h4>Menu</h4>
                                            <ul>
                                                <li><i><FiChevronRight/></i> <a href="#">Tentang Kami</a></li>
                                                <li><i><FiChevronRight/></i> <a href="#">Kalibrasi</a></li>
                                                <li><i><FiChevronRight/></i> <a href="#">Pelatihan</a></li>
                                                <li><i><FiChevronRight/></i> <a href="#">Perbaikan</a></li>
                                                <li><i><FiChevronRight/></i> <a href="#">Kapabilitas</a></li>
                                                <li><i><FiChevronRight/></i> <a href="#">Kontak</a></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="col-lg-4 footer-links">
                                            <h4>Our Services</h4>
                                            <ul>
                                                <li><i><FiChevronRight/></i> <a href="#">Kalibrasi</a></li>
                                                <li><i><FiChevronRight/></i> <a href="#">Adjusment</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;