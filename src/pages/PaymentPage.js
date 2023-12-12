import React, { useState } from 'react';
import '../css/PaymentForm.css';

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="payment-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Enter your payment details</h2>
        </div>
        <div className="form-body">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card number"
          />

          <div className="expiry-cvc">
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
            />
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="CVC"
            />
          </div>

          <label htmlFor="streetAddress">Street address</label>
          <input
            type="text"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Street address"
          />

          {/* Additional form fields for address, city, state, zip code */}
          {/* ... */}

        </div>
        <div className="form-summary">
          <div className="plan-details">
            <h3> placeholder</h3>
            <p> placeholder</p>
            {/* ...other plan details */}
          </div>
          <div className="total">
            <h3>Subtotal: price placeholder</h3>
          </div>
        </div>
        <button type="submit">Next: Review</button>
        
      </form>
    </div>
  );
}

export default PaymentForm;
