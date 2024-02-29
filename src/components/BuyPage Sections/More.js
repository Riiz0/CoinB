import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import { nftAbi } from "../../abis/nftAbi"

// Imports
import FastLoadingScreen from '../FastLoadingScreen';
import '../../buy.css';


function ComingSoonPopup({ show, onClose }) {
  return show ? (
    <div className="popup" onClick={onClose}>
      <div className="popup-inner">
        <h1>Coming Soon</h1>
        <p>This page is under development and will be available soon.</p>
      </div>
    </div>
  ) : null;
 } 
 
function More() {
  const [isLoading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
 
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    // Show the popup as soon as the component mounts
    setShowPopup(true);
  }, []);

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
     </div>
    </div>
     <ComingSoonPopup show={showPopup} onClose={() => setShowPopup(false)} />
  </>
  </FastLoadingScreen>
 );
}

export default More;
