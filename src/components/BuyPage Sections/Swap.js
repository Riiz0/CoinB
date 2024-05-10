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
 
  const UNISWAP_TOKEN_LIST = 'https://tokens-uniswap-org.ipns.dweb.link/'
  const NATIVE = 'NATIVE'
  const USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'

  const jsonRpcUrlMap = {
    1: [`https://rpc.ankr.com/bsc/${process.env.REACT_APP_ANKR_UNIQUE_TOKEN_BNB}`],
    3: [`https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_POLY_MAIN}`]
  }

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
        <div className="Uniswap">
          <SwapWidget 
            jsonRpcUrlMap={jsonRpcUrlMap}
            tokenList={UNISWAP_TOKEN_LIST}
            defaultInputTokenAddress={USDT}
            defaultInputAmount={0}
            defaultOutputTokenAddress={NATIVE} 
               onConnect={handleConnect}
             />
        </div>
       </div>
     </div>
    </>
    </FastLoadingScreen>
 );
}

export default Swap;
