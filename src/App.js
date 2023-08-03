import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/HeaderComponents/Header";
import Home from "./components/HomeComponents/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<Login />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
