import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
    const navigate = useNavigate();

    
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      pickUpDate: '',
      dropOffDate: '',
      carModel: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleProceedToPayment = () => {
        navigate('/payment');
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Submit form data to the server or state management
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <input
          type="date"
          name="pickUpDate"
          value={formData.pickUpDate}
          onChange={handleChange}
          placeholder="Pick-Up Date"
        />
        <input
          type="date"
          name="dropOffDate"
          value={formData.dropOffDate}
          onChange={handleChange}
          placeholder="Drop-Off Date"
        />
        <input
          type="text"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          placeholder="Car Model"
        />
        <button type="submit">Book Car</button>
        <button className="payment-button" onClick={handleProceedToPayment}>Proceed to Payment</button>

      </form>
    );
  }
  export default BookingForm;
  