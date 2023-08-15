import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_menu } from 'react-icons-kit/md/ic_menu';

function Navbar({ handleMenuToggle }) {
  return (
    <nav className="navbar">
      <Icon icon={ic_menu} size={24} onClick={handleMenuToggle} />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tab1">Tab 1</Link>
        </li>
        <li>
          <Link to="/tab2">Tab 2</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;