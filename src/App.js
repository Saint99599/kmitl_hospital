import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './function/BookingContext';

import Login from './page/Login';
import Home from './page/Home';
import Booking from './page/ฺBooking';

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route index exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/booking" element={<Booking />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
