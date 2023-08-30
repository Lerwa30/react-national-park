import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../authContext";

import classes from './Login.module.css';

const Login = () => {
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    axios
      .post(register ? "/register" : "/login", body)
      .then((res) => {
        console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId)
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={classes.background}>
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className={classes.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className={classes.button}>{register ? "Sign Up" : "Login"}</button>
      </form>
      <button className={classes.button} onClick={() => setRegister(!register)}>
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </div>
    </section>
    
  );
};

export default Login;
