import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';

import Home from '../pages/HomePage';
import Kapabilitas from '../pages/Kapabilitas';
import LingkupAlat from '../pages/LingkupAlat';
import DetailAlat from '../pages/DetailAlat';
import Login from '../pages/Auth/Login';
import Tracking from '../pages/Tracking';
import TrackingOrder from '../pages/TrackingOrder';
import Form from '../pages/Form';
import ContactPage from '../pages/Contact';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : <Login/>;
    return config;
});

function App() {

    let history = useNavigate();
    
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/lingkup" element={<Kapabilitas/>}/>
            <Route path="/lingkup/:slug" element={<LingkupAlat/>}/>
            <Route path="/lingkup/:slug/:kode_alat" element={<DetailAlat/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registrasi" element={<Form/>}/>

            
            <Route path="/tracking-order" element={<Tracking/>}/>
            <Route path="/tracking-order/:no_order" element={<TrackingOrder/>}/>
            
            <Route path="/kontak" element={<ContactPage/>}/>
            
            {/* <Route path="/lingkup">
                {localStorage.getItem('auth_token') ? history(`/`) : ''}
            </Route> */}
        </Routes>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
    <Router>
        <App />
    </Router>,document.getElementById('root')
    );
}
