import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./carousel.css";
import Checkout from "./components/Checkout";
import React, { useState, useEffect } from "react";


function App() {

  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/https://buy.stripe.com/test_7sIcPi1B54qH8lq5kl" element={<Checkout />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
