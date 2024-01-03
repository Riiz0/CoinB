import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imports
import CountdownTimer from './UI Components/CountdownTimer'
import FastLoadingScreen from '../FastLoadingScreen';
import '../../buy.css';
 
function More() {
  const [isLoading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);
 
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
 
  const buyNavbarClass = scrolling ? 'navbar buy-fixed-navbar' : 'navbar';

  useEffect(() => {
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
    }, 375);
  }, []);

 return (
  <FastLoadingScreen isLoading={isLoading}>
  <>
   <nav className={buyNavbarClass}>
    <nav className="buy-navbar-container">
      <div className="buy-navbar">
        <div className="buy-logo-title">
          <img src="/logo.png" alt="Logo" className="logo" />
            <h1 className="buy-title">BUNIME</h1>
        </div>
        <ul className="buy-nav-links">
          <li><Link to="/Swap">Swap</Link></li>
          <li><Link to="/NFTs">NFT's</Link></li>
          <li>
            <div className="dropdown">
              <Link to="/BurnPortal">Burn Portal</Link>
              <Link to="/Liquidity">Liquidity</Link>
            </div>
            <Link to="/More" className="home-link">{' '} More <i className="gg-chevron-down"></i></Link>
          </li>
        </ul>
      </div>
      <div className="buy-network-options">
        <div className="buy-network-links">
          {/* Empty div to maintain layout */}
        </div>
        </div>
        <div className="buy-navbar-connect">
          {/* Empty div to maintain layout */}
        </div>
    </nav>
  </nav>
    
  <div className="buy-body-top-section">
    {/* Main Content */}
    <div className="buy-main-content">
     <div className="coming-soon-container text-center">
       {/* Coming Soon */}
       <h2>Coming Soon!</h2>
       <p className="text-color">We're working hard to bring our new feature to you.</p>

       {/* Countdown Timer */}
       <CountdownTimer targetDate="2024-10-01T00:00:00Z" />

       {/* Call to Action */}
       <form className="form-color">
        <input type="email" placeholder="Enter your email" className="input-color" />
        <button type="submit" className="button-color">Stay Updated</button>
       </form>

       {/* Social Media Links */}
       <div className="social-color">
        <a href="https://twitter.com/yourprofile"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        <a href="https://facebook.com/yourprofile"><img src="/icons/facebook.svg" alt="Facebook" /></a>
       </div>
     </div>
    </div>
   </div>
    </>
    </FastLoadingScreen>
 );
}

export default More;
