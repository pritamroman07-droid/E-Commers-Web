import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { useCart } from '../context/CartContext';

const PlaceOrderScreen = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress') || '{}');
  const paymentMethod = JSON.parse(localStorage.getItem('paymentMethod') || '"Stripe"');

  // Calculate prices
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const placeOrderHandler = () => {
    // In a real app, we'd call the API to create the order here
    alert('Order placed successfully! (Demo)');
    clearCart();
    navigate('/');
  };

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <CheckoutSteps step1 step2 step3 step4 />
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem', marginBottom: '1rem' }}>
            <h2>Shipping</h2>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Address: </strong>
              {shippingAddress.address}, {shippingAddress.city} {shippingAddress.postalCode}, {shippingAddress.country}
            </p>
          </div>

          <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem', marginBottom: '1rem' }}>
            <h2>Payment Method</h2>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Method: </strong>
              {paymentMethod}
            </p>
          </div>

          <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem' }}>
            <h2>Order Items</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div style={{ marginTop: '1rem' }}>
                {cartItems.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0', borderBottom: index !== cartItems.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                    <Link to={`/product/${item._id}`} style={{ flex: 1 }}>{item.name}</Link>
                    <div>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem' }}>
            <h2>Order Summary</h2>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Items</span>
                <span>${itemsPrice.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Shipping</span>
                <span>${shippingPrice.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Tax</span>
                <span>${taxPrice.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.2rem', marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1.5rem' }}
              disabled={cartItems.length === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
