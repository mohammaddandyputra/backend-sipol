import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const LoginForm = () => {

    const history = useNavigate();
    
    const [loginInput, setLoginInput] = useState({
        email: '', 
        password: '',
        error_list: [],
    })

    const handleInput = (e) => {
        e.persist();
        setLoginInput({...loginInput, [e.target.name] : e.target.value});
    }

    const signIn = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        // axios.defaults.withCredentials = true;
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("http://127.0.0.1:8000/api/login", data).then(res => {
                if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Login Successfully!", "You clicked the button!", "success");
                    history('/lingkup');
                }
                else if(res.data.status === 401)
                {
                    swal("Warning!", res.data.message, "warning");
                }
                else{
                    setLoginInput({...loginInput, error_list: res.data.validators_error})
                }
            });
        });
    }

    return (
        <>
            <section id="form-register" className="d-flex justify-content-center mt-5">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center font-weight-bolder">Welcome, Dashboard SiPol</h5>
                            <form onSubmit={signIn}>
                                <div className="form-group row ml-2 mr-2 mt-5">
                                    <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" name="email" id="email" value={loginInput.email} onChange={handleInput}/>
                                        <small className="form-text text-muted">{loginInput.error_list.email}</small>
                                    </div>
                                </div>
                                <div className="form-group row ml-2 mr-2">
                                    <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" name="password" id="password" value={loginInput.password} onChange={handleInput}/>
                                        <small className="form-text text-muted">{loginInput.error_list.password}</small>
                                    </div>
                                </div>
                                <div className="mt-4 mb-5">
                                    <div className="col-sm-12 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary mr-2 ">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginForm;
