import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { ethers } from 'ethers';

//Imports
import logo from '../assets/logo.png'

function BuyNavbar({ setLoading, setAccount }) {
  const [scrolling, setScrolling] = useState(false);
  const [account, setAccountState] = useState(null); // Rename the state variable
  
  const connectHandler = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const connectedAccount = ethers.getAddress(accounts[0]);
      setAccountState(connectedAccount); // Use the state variable here
      console.log('Connected account:', connectedAccount);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };
    
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
                <Link to="/" onClick={scrollToHome}>
                  Swap
                </Link>
              </li>
              <li>
                <Link to="/" onClick={scrollToAbout}>
                  Burn Portal
                </Link>
              </li>
              <li>
                <Link to="/" onClick={scrollToEcosystem}>
                  Liquidity
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="buy-navbar-connect-wrapper">
              <div className="buy-navbar-connect">
                {account ? (
                  <button type="button" className="buy-navbar-connect">
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                  </button>
                ) : (
                  <button type="button" className="buy-navbar-connect" onClick={connectHandler}>
                    Connect
                  </button>
                )}
              </div>
            </div>
      </nav>
    );
  }

export default BuyNavbar;
