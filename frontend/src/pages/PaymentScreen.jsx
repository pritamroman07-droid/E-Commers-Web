import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Stripe');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '2rem' }}>
      <CheckoutSteps step1 step2 step3 />
      <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
        <h1 style={{ marginBottom: '1.5rem' }}>Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="paymentMethod"
                value="Stripe"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={{ width: 'auto', marginBottom: 0 }}
              />
              Stripe or Credit Card
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
