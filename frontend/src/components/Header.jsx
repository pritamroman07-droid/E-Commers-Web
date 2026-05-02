import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="header glass">
      <div className="container nav">
        <Link to="/" className="logo">
          GRAVITY<span>SHOP</span>
        </Link>

        <div className="nav-search">
          <input type="text" placeholder="Search products..." />
          <Search size={20} className="search-icon" />
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/cart" className="nav-item">
              <ShoppingCart size={22} />
              <span className="badge">3</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">
              <User size={22} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
