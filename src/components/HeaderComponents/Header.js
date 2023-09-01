import React from "react";
import { useContext } from "react";
import AuthContext from "../../authContext";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    authContext.logout();
  };


  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h2>Park Finder</h2>
        <FontAwesomeIcon icon={faMountain} />
      </div>
      <Link to="/">
        <button className={classes.button}>Home</button>
      </Link>
      <Link to="profile">
        <button className={classes.button}>Profile</button>
      </Link>
      <Link to="login">
        <button className={classes.button}>Login/Register</button>
      </Link>
      <button className={classes.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
