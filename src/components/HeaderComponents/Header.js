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
    <header className={classes.header}>
      <div className={classes.logo}>
        <h2>Park Finder</h2>
        <FontAwesomeIcon icon={faMountain} />
      </div>

      <nav className={classes.nav}>
        {authContext.token ? (
          <div className={classes.nav}>
            <Link to="/">
              <button className={classes.button}>Home</button>
            </Link>
            <Link to="profile">
              <button className={classes.button}>My Park List</button>
            </Link>
            <button className={classes.button} onClick={handleLogout}>
              Logout
            </button>{" "}
          </div>
        ) : (
          <div className={classes.nav}>
            <Link to="/">
              <button className={classes.button}>Home</button>
            </Link>
            <Link to="login">
              <button className={classes.button}>Login/Register</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
