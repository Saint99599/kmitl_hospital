import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './function/BookingContext';

import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import Booking from './page/ฺBooking';
import InputBooking from './page/InputBooking';
import ConfirmBooking from './page/ConfirmBooking';

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route index exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/inputbooking" element={<InputBooking/>} />
          <Route exact path="/confirmbooking" element={<ConfirmBooking/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
