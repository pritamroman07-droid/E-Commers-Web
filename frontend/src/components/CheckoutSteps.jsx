import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
      <div style={{ color: step1 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: step1 ? '700' : '400' }}>
        {step1 ? <Link to="/login">Sign In</Link> : 'Sign In'}
      </div>
      <div style={{ color: step2 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: step2 ? '700' : '400' }}>
        {step2 ? <Link to="/shipping">Shipping</Link> : 'Shipping'}
      </div>
      <div style={{ color: step3 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: step3 ? '700' : '400' }}>
        {step3 ? <Link to="/payment">Payment</Link> : 'Payment'}
      </div>
      <div style={{ color: step4 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: step4 ? '700' : '400' }}>
        {step4 ? <Link to="/placeorder">Place Order</Link> : 'Place Order'}
      </div>
    </nav>
  );
};

export default CheckoutSteps;
