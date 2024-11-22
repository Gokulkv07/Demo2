import React, { useState } from 'react';
import './PaymentPage.css';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [card, setCard] = useState('');
  const [upi, setUpi] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!card && !upi) {
      alert('Please provide a payment method (Card or UPI).');
      return;
    }

    setTimeout(() => {
      alert('Payment successful! Redirecting to review page...');
      navigate('/review')
    },);
  };

  const goBack = () => {
    navigate('/booking')
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card">Credit/Debit Card:</label>
        <input
          type="text"
          id="card"
          placeholder="Card Number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />

        <label htmlFor="upi">UPI ID:</label>
        <input
          type="text"
          id="upi"
          placeholder="UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
        />

        <button type="submit">Pay Now</button>
      </form>
      <button onClick={goBack}>Back to Book Now</button>
    </div>
  );
};

export default PaymentPage;


