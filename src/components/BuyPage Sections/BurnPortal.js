import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import { tokenAbi } from "../../abis/tokenAbi"

// Imports
import FastLoadingScreen from '../FastLoadingScreen';
import MetamaskLogo from '../MetamaskLogo';
import '../../buy.css';

const connectTextStyles = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 textAlign: 'center',
 color: 'white', // White font color
 fontWeight: 'bold',
 fontSize: '18px',
};

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

function BurnPortal() {
  const [scrolling, setScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isUnderDevelopment, setIsUnderDevelopment] = useState(true);

  const contractAddress = "0x1d6eB3Acbe2D5A8e5f4192C339aaaD16644C7363";

  let provider;
  let signer;
  let contract;

  const handleConnect = async () => {
    return new Promise((resolve, reject) => {
      console.log('Attempting to connect to MetaMask...');
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask detected. Attempting to request accounts...');
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(async (accounts) => {
            console.log('Accounts received:', accounts);
            if (accounts.length > 0) {
              console.log('Initializing provider, signer, and contract...');
              provider = new ethers.BrowserProvider(window.ethereum);
              signer = await provider.getSigner();
              contract = new ethers.Contract(contractAddress, tokenAbi, signer);
              console.log('Provider:', provider);
              console.log('Signer:', signer);
              console.log('Contract:', contract);
              setIsConnected(true);
              console.log('Connection successful. Wallet connected:', isConnected);
              
              // Set isInitialized to true immediately since the contract is already deployed
              setIsInitialized(true);
              resolve();
            }
          })
          .catch((error) => {
            console.error("Error during connection:", error);
            reject(error);
          });
      } else {
        console.log('Ethereum object not found');
        reject(new Error('Ethereum object not found'));
      }
    });
  };   

   useEffect(() => {
    console.log('Wallet connected:', isConnected);
   }, [isConnected]); 
 
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
                  </div>
                </div>
                <div className="buy-navbar-connect">
                  <button onClick={() => { setIsUnderDevelopment(true); handleConnect(); }}>
                    {isConnected ? 'Connected' : 'Connect Wallet'}
                  </button>
                </div> 
              </nav>
            </nav>
          
            <div className="buy-body-top-section">
              {/* Main Content */}
              <div className="buy-main-content">
                <div className="Uniswap">
                  {/* Conditionally render wallet connection status */}
                  {isConnected ? (
                   <div>
                     <p className="connected-text">Your Wallet is Connected</p>
                   </div>
                   ) : (
                   <div>
                     <MetamaskLogo />
                     <p style={connectTextStyles}>Please Connect Wallet</p>
                   </div>
                   )}
                </div>
              </div>
            </div>
            <ComingSoonPopup show={isUnderDevelopment} onClose={() => setIsUnderDevelopment(false)} />
          </>
    </FastLoadingScreen>
   );   
}

export default BurnPortal;
