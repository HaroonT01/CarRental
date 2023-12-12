import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarRentalApp from './pages/HomePage/CarRentalApp';
import PaymentPage from './pages/PaymentPage';
import BookingForm from './pages/bookingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarRentalApp />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />
    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
