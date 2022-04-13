import React, { useState } from 'react';
import LoginButton from '../button/LoginButton';

import { Link, useNavigate } from 'react-router-dom';

import logo from '../../../../public/img/logo.png';
import axios from 'axios';
import swal from 'sweetalert';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {

    const history = useNavigate();

    const [clicked, setClicked] = useState(false);

    function handleChange(){
        setClicked(!clicked);
    }

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/logout").then(res=> {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Logout Successfully!", res.data.message, "success");
                history('/');
            }
        });
    }

    let AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
            <Link className="btn btn-primary ml-3" to="/login" >Login</Link>
        );
    }
    else
    {
        AuthButtons = (
            <button type="button" onClick={logoutSubmit} className="btn btn-danger ml-3">Logout</button>
        );
    }

    return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                <Link to="/">
                    <img src={logo} className="img-fluid" style={{maxHeight: '70px'}}/>
                </Link>
                <nav style={{textDecoration: 'none'}} className=  {clicked ? "nav-menu active" : "nav-menu"} >
                    <ul>
                        <li>
                            <Link to="/kalibrasi">Kalibrasi</Link>
                        </li>
                        <li>
                            <Link to="/pelatihan">Pelatihan</Link>
                        </li>
                        <li>
                            <Link to="/perbaikan">Perbaikan</Link>
                        </li>
                        <li>
                            <Link to={"/lingkup"}>Kapabilitas</Link>
                        </li>
                        <li>
                            <Link to="/kontak">Kontak</Link>
                        </li>
                        <li>
                            <Link to="/tracking-order">Tracking</Link>
                        </li>
                    </ul>
                </nav>
                <LoginButton/>
                {/* <LogoutButton/> */}
                {/* {AuthButtons} */}
                <button className="mobile-nav-toggle d-lg-none" onClick={handleChange}>
                    {clicked ? <AiOutlineClose/> : <FaBars/>}
                </button>
                {/* <button type="button" className="mobile-nav-toggle d-lg-none"> <i className="icofont-envelope"></i></button> */}
                </div>
                <div className="fixed-bottom d-flex justify-content-end"><Link to={"/registrasi"} className="btn btn-primary" style={{borderRadius: '0px'}}><h6 className='font-weight-bold mt-1'>DAFTAR KALIBRASI</h6></Link></div>
            </header>
    );
};

export default Header;
