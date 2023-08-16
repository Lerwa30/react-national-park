import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    const logoutHandler = () => {
        axios
        .delete('http://localhost:4005/logout')
        .then(() => {
            localStorage.removeItem('token');
            // window.location.href='/login';
        })
        .catch((err) => {
            console.log(err)
        });
      }

    return (
        <div className={classes.header}>
            <h2 className={classes.name}>National Parks</h2>
            <Link to='/'><button className={classes.button}>Home</button></Link>
            <Link to='profile'><button className={classes.button}>Profile</button></Link>
            <Link to='login'><button className={classes.button}>Login/Register</button></Link>
            <button className={classes.button} onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Header;