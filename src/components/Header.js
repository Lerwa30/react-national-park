import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>National Parks</h2>
            <Link to='/'><a>Home</a></Link>
            <Link to='profile'><a>Profile</a></Link>
            <Link to='login'><a>Login</a></Link>
        </div>
    )
}

export default Header;