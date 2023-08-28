import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

//Imports
import logo from '../assets/logo.png'

function BuyNavbar({ setLoading }) {
    const [scrolling, setScrolling] = useState(false);

    const scrollToHome = () => {
      scroller.scrollTo('home', {
        smooth: true,
        offset: -50, // Adjust this value as needed to align properly with your sections
      });
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
  
    const handleBuyClick = () => {
      setLoading(true);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const buyNavbarClass = scrolling ? 'navbar fixed-navbar' : 'navbar';
    
    return (
        <nav className={buyNavbarClass}>
          <nav className="buy-navbar-container">
            <div className="buy-navbar">
              <div className="buy-logo-title">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="buy-title">BUNIME</h1>
              </div>
              <ul className="buy-nav-links">
                <li>
                  <Link to="/" onClick={scrollToHome} >Swap</Link>
                </li>
                <li>
                <Link to="/" onClick={scrollToAbout}>Burn Portal</Link>
              </li>
              <li>
                <Link to="/" onClick={scrollToEcosystem}>Liquidity</Link>
              </li>
                <li>
                <Link to="/Buy" target="_blank" onClick={handleBuyClick}>Buy</Link>
                </li>
              </ul>
            </div>
          </nav>
        </nav>    
        );
}

export default BuyNavbar;
