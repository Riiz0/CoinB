import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import { nftAbi } from "../../abis/nftAbi"

// Imports
import FastLoadingScreen from '../FastLoadingScreen';
import MetamaskLogo from '../MetamaskLogo';
import Mint_Image from '../../assets/Mint_Image.png'
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

function Popup({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
 
  return show ? (
    <div className="popup">
      <div className="popup-inner">
        <p>Max NFT Mint Reached</p>
      </div>
    </div>
  ) : null;
 }

function NFTs() {
  const [scrolling, setScrolling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRequestingAccounts, setIsRequestingAccounts] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [mintStatus, setMintStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const contractAddress = "0x1be81063208CFBbEEd81a031950E5d46ABB2a61a";

  let provider;
  let signer;
  let contract;

  const handleConnect = async () => {
    return new Promise((resolve, reject) => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(async (accounts) => {
            if (accounts.length > 0) {
              provider = new ethers.BrowserProvider(window.ethereum);
              signer = await provider.getSigner();
              contract = new ethers.Contract(contractAddress, nftAbi, signer);
              setIsConnected(true);
              
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
   }, [isConnected]); 

   const handleMint = async () => {
    if (!isConnected || !isInitialized) {
     alert('Cannot mint NFT right now. Please try again later.');
     return;
    }

    // Wait for handleConnect to finish
    try {
     await handleConnect();
    } catch (error) {
     console.error('Error connecting:', error);
     return;
    }
    
    // Check if the current network is Binance Smart Chain
    const chainId = await provider.getNetwork().then(network => Number(network.chainId));
    if (chainId !== 56) { // Use 56 for mainnet or 97 for testnet
      alert('Please switch to Binance Smart Chain to mint NFTs.');
      return;
    }

    // Start the minting process
    setIsBouncing(true);
    
    try {
     // Start the loading process
     setLoading(true);
    
     // Listen for the NewTokenMinted event
     setTimeout(() => {
       const filter = contract.filters.NewTokenMinted();
       contract.on(filter, async (tokenId) => {
    
         // After the NewTokenMinted event is triggered
         const tokenIdValue = tokenId.args[0];
         const tokenURI = await contract.tokenURI(tokenIdValue);
    
         // Fetch the token metadata
         const response = await fetch(tokenURI);
         const metadata = await response.json();
    
         // Generate the link
         const Link = `https://testnets.opensea.io/assets/sepolia/${contractAddress}/${tokenIdValue}`;
    
         // Display "Minting successful!" and the OpenSea link
         setMintStatus(
           <>
             <span>Minting successful! </span>
             <a href={Link} target="_blank" rel="noopener noreferrer"> View your NFT on OpenSea</a>
           </>
         );
       });
     }, 0);
   
     // Call the safeMint function on the contract instance
     const tx = await contract._safeMint();
     console.log('After safeMint'); // Debug log
   
     // Wait for the transaction to be mined
     await tx.wait();
      } catch (err) {
        console.error('Failed to mint NFT:', err);
        if (err.code === 4001 && err.message.includes('User denied')) {
          setIsBouncing(false);
        }
        if (err.message.includes('Max mint per wallet reached')) {
          setShowPopup(true);
        }
      } finally {
     // Ensure that loading is set to false regardless of success or failure
     setLoading(false);
     // End the minting process
     setIsBouncing(false);
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

  useEffect(() => {
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
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
          <button onClick={handleConnect} disabled={isRequestingAccounts}>
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </button>
     </div> 
    </nav>
  </nav>
    
    <div className="buy-body-top-section">
      <div className="buy-main-content">
        <div className="Uniswap">
          {/* Conditionally render wallet connection status */}
          {isConnected ? (
            <div>
              <div className="mint-image-container">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img id="mint-image" src={Mint_Image} className={isBouncing ? 'bounce' : ''} alt="Mint Image" />
              </div>
              <div className="wallet-status">
                <p className="mint-status">{mintStatus}</p>
                <button onClick={handleMint} disabled={!isInitialized || loading}>Mint NFT</button>
                </div>
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
    <Popup show={showPopup} onClose={() => setShowPopup(false)} />
  </>
</FastLoadingScreen>
);
}
   
export default NFTs;
 