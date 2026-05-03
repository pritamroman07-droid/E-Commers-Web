import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const { userInfo, logout } = useAuth();
  const { cartItems } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <header className="header glass">
      <div className="container nav">
        <Link to="/" className="logo">
          SWEET<span>SHOP</span>
        </Link>

        <form onSubmit={submitHandler} className="nav-search">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <Search size={20} className="search-icon" />
          </button>
        </form>

        <ul className="nav-links">
          <li>
            <Link to="/about" className="nav-item" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-item">
              <ShoppingCart size={22} />
              {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
            </Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="nav-item">
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </li>
          {userInfo ? (
            <>
              <li>
                <Link to="/profile" className="nav-item" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                  {userInfo.name.split(' ')[0]}
                </Link>
              </li>
              <li>
                <button onClick={logout} className="nav-item">
                  <LogOut size={20} />
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="nav-item">
                <User size={22} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
