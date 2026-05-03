import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import CartScreen from './pages/CartScreen';
import ShippingScreen from './pages/ShippingScreen';
import PaymentScreen from './pages/PaymentScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import UserListScreen from './pages/UserListScreen';
import ProfileScreen from './pages/ProfileScreen';
import ProductScreen from './pages/ProductScreen';
import AboutScreen from './pages/AboutScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/admin/userlist" element={<UserListScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </main>
      <footer className="glass" style={{ textAlign: 'center', padding: '3rem 0', marginTop: '4rem', color: '#94a3b8' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</Link>
            <a href="https://www.instagram.com/i_am_roman_guy?igsh=bXRlNGR3dHRtbGhh" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
          </div>
          <p>&copy; 2024 SWEETSHOP. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;
