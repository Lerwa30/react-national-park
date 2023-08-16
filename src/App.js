import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import classes from './App.module.css'

import AuthContext from "./authContext";
import Header from "./components/HeaderComponents/Header";
import Home from "./components/HomeComponents/Home";
import Profile from "./components/Profile";
import Login from "./components/auth/Login";
import ParkDetails from "./components/elements/ParkDetails";

function App() {
  const authCtx =  useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={!authCtx.token ? <Login /> : <Navigate to='/' />} />
          <Route path='details' element={<ParkDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
