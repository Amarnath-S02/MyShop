import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 style={{ fontFamily: 'Segoe UI, sans-serif', fontWeight: 700, color: 'white' }}>
  My<span style={{ color: '#FE9900' }}>Shop</span>
</h1>

      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>

        <div className="profile-menu">
          <span className="username">Amar ▾</span>
          <div className="dropdown">
            <Link to="/profile">Profile</Link>
            <Link to="/cart">My Cart</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/settings">Settings</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
