import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "./function/BookingContext";

import Login from "./page/Login";
import Home from "./page/Home";
import Booking from "./page/Booking";
import Register from "./page/Register";

import { getRefreshToken } from "./function/AuthApi";

function App() {
  useEffect(() => {
    getRefreshToken(600000)
  }, []);

  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route index exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
