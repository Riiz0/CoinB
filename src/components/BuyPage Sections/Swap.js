import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

// Imports
import FastLoadingScreen from '../FastLoadingScreen';
import '../../buy.css';

function Swap() {
  const [isLoading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [scrolling, setScrolling] = useState(false);
 
  const UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
  const NATIVE = 'NATIVE'
  const USDT = '0xdAC17F958D2ee523a2206206994597C13D831ec7'

  const handleConnect = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }
 
    await window.ethereum.enable();
    setIsConnected(true);
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
          <div style={{width: '200px', height: '40px'}}></div>
        </div>
        </div>
        <div className="buy-navbar-connect">
        {/* Empty div to maintain layout */}
        <div style={{width: '100px', height: '40px'}}></div>
        </div>
    </nav>
  </nav>
    
     <div className="buy-body-top-section">
       {/* Main Content */}
       <div className="buy-main-content">
        <div className="Uniswap">
          <SwapWidget 
            tokenList={UNISWAP_TOKEN_LIST}
            defaultInputTokenAddress={USDT}
            defaultInputAmount={0}
            defaultOutputTokenAddress={NATIVE} 
          onConnect={handleConnect} />
        </div>
       </div>
     </div>
    </>
    </FastLoadingScreen>
 );
}

export default Swap;
