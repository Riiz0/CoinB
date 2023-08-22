import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Icon } from 'react-icons-kit';
import { ic_menu } from 'react-icons-kit/md/ic_menu';

//Imports
import SideBarMenu from './SideBarMenu';
import logo from '../assets/logo.png'

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      smooth: true,
      offset: -50, // Adjust this value as needed to align properly with your sections
    });
  };

  const scrollToEcosystem = () => {
    scroller.scrollTo('ecosystem', {
      smooth: true,
      offset: -50, // Adjust this value as needed to align properly with your sections
    });
  };
  
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? 'navbar fixed-navbar' : 'navbar';
  
  return (
  <nav className={navbarClass}>
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
          <Link to="/"onClick={scrollToAbout}>About</Link>
        </li>
        <li>
          <Link to="/" onClick={scrollToEcosystem}>Ecosystem</Link>
        </li>
          <li>
          <Link to="/Buy">Buy</Link>
          </li>
        </ul>
        <SideBarMenu isOpen={isSideBarOpen} onClose={toggleSideBar} />
        <Icon icon={ic_menu} size={24} onClick={toggleSideBar} className="hamburger" />
      </div>
    </nav>
  </nav>    
  );
}

export default Navbar;
