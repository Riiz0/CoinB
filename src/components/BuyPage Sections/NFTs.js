import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethereum } from '@metamask/detect-provider';
import { ethers } from "ethers";

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

function NFTs() {
  const [isLoading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [contractAddress, setContractAddress] = useState('');
  const [contractABI, setContractABI] = useState([]);
  const [contractInstance, setContractInstance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }, []);
 
  const handleConnect = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask or enable it in your browser.');
      return;
    }
   
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
   
      if (accounts.length === 0) {
        alert('Please log in to MetaMask.');
        return;
      }
   
      let signer;
      if (provider) {
        signer = provider.getSigner();
   
        // Check if the user has granted permission to access their account
        if (signer) {
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setContractInstance(contract);
        }
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Failed to connect to MetaMask:', error);
      alert('Failed to connect to MetaMask. Please try again.');
    }
   };
 
  const handleNetworkChange = async (event) => {
    const selectedNetwork = event.target.value;
    await ethereum.sendAsync({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${selectedNetwork}` }],
    });
  };
 
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if (!contractInstance) {
      alert("Please connect your wallet first.");
      return;
    }
   
    // Send the transaction to mint the NFT
    try {
      const tx = await contractInstance.mintNFT(signer.getAddress());
      await tx.wait();
      alert("NFT minted successfully!");
    } catch (error) {
      console.error("Failed to mint NFT:", error);
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
          <select onChange={handleNetworkChange}>
            <option value="1">Mainnet</option>
            <option value="4">Rinkeby</option>
            <option value="5">Goerli</option>
            <option value="42">Kovan</option>
            <option value="137">Polygon</option>
          </select>
          </div>
        </div>
        <div className="buy-navbar-connect">
       <button onClick={handleConnect}>
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
                <button onClick={handleSubmit} disabled={!contractInstance}>
                  {isLoading ? "Minting..." : "Mint NFT"}
                </button>
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
    </>
    </FastLoadingScreen>
 );
}

export default NFTs;
