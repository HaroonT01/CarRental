import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import '../../css/CarRentalApp.css'; 


import { useNavigate } from 'react-router-dom';


function CarRentalForm() {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };
  return (
        <div className="car-rental-container">
      <Header /> 
  
      <section className="booking-form">
        <form>
          <input type="text" placeholder="PICK-UP LOCATION" />
          <input type="text" placeholder="dd/mm/yyyy" className="date-input" />
          <input type="text" placeholder="dd/mm/yyyy" className="date-input" />
          <button className="submit" onClick={handleProceedToPayment}>Search</button>

        </form>
      </section>
      <Footer />
    </div>
  );
}

export default CarRentalForm;
