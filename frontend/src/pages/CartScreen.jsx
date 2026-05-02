import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="glass" style={{ padding: '3rem', textAlign: 'center', borderRadius: '1.5rem' }}>
          <ShoppingBag size={64} style={{ marginBottom: '1rem', color: 'var(--text-muted)' }} />
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Your cart is empty</p>
          <Link to="/" className="btn btn-primary">Go Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="glass" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem', 
                padding: '1rem', 
                marginBottom: '1rem',
                borderRadius: '1rem'
              }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                <div style={{ flex: 1 }}>
                  <Link to={`/product/${item._id}`} style={{ fontWeight: '600' }}>{item.name}</Link>
                  <p style={{ color: 'var(--primary)', fontWeight: '700' }}>${item.price}</p>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => addToCart(item, Math.max(1, item.qty - 1))}>
                    <Minus size={18} />
                  </button>
                  <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => addToCart(item, item.qty + 1)}>
                    <Plus size={18} />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item._id)} style={{ color: 'var(--error)' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1.5rem' }}>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', margin: '1rem 0' }}>
                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
              </p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
