import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_menu } from 'react-icons-kit/md/ic_menu';

// Import your logo
import logo from '../assets/logo.png'

function Navbar({ handleMenuToggle }) {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">BUNIME</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Ecosystem">Ecosystem</Link>
          </li>
          <li>
          <Link to="/Buy">Buy</Link>
          </li>
        </ul>
        <Icon icon={ic_menu} size={24} onClick={handleMenuToggle} className="hamburger" />
      </div>
    </nav>
  );
}

export default Navbar;
