import React from "react";
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return (
        <Link to={'/login'} className="btn btn-primary ml-3">
            Sign In
        </Link>
    );
}

export default LoginButton;
