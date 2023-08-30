import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';

//Imports
import logo from '../assets/logo.png'

function BuyNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const [account, setAccountState] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const connectHandler = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const connectedAccount = ethers.getAddress(accounts[0]);
      setAccountState(connectedAccount); // Use the state variable here
      setIsClicked(true);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
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
    
    const buyNavbarClass = scrolling ? 'navbar buy-fixed-navbar' : 'navbar';
    
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
                <div className="dropdown">
                <Link to="/">Swap</Link>
                <Link to="/">Burn Portal</Link>
                <Link to="/">Liquidity</Link>
                </div> 
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Info</Link>
              </li>
              <li>
                <Link to="/">More</Link>
              </li>
            </ul>
          </div>
            <div className="buy-navbar-connect">
              <ul className="buy-network-links">
                <li>
                  <div className="network-dropdown">
                    <Link to="/">Ethereum</Link>
                    <Link to="/">Polygon</Link>
                    <Link to="/">BNB Smart Chain</Link>
                  </div>
                    <Link to="/">Network</Link>
                </li>
              </ul>
              {account ? (
                <button type="button" className={`buy-navbar-connect ${isClicked ? 'clicked' : ''}`}>
                  {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
              ) : (
                <button type="button" className={`buy-navbar-connect ${isClicked ? 'clicked' : ''}`} onClick={connectHandler}>
                  Connect Wallet
                </button>
              )}
          </div>
        </nav>
      </nav>
    );
  }

export default BuyNavbar;
