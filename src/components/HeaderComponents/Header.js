import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <h2 className={classes.name}>National Parks</h2>
            <Link to='/'><button className={classes.button}>Home</button></Link>
            <Link to='profile'><button className={classes.button}>Profile</button></Link>
            <Link to='login'><button className={classes.button}>Login</button></Link>
        </div>
    )
}

export default Header;