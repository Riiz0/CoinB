import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';

//Imports
import logo from '../assets/logo.png'
import networkOptions from './Networks'

function BuyNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const [account, setAccountState] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('Select Network');

  const connectHandler = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const connectedAccount = ethers.getAddress(accounts[0]);
      setAccountState(connectedAccount); // Use the state variable here
      setIsClicked(true);

    //Get And Set Connected Blockchain Network
    const provider = new ethers.BrowserProvider(window.ethereum);
    const network = await provider.getNetwork();

    // Map network names if necessary
    let displayNetworkName = network.name;
    if (network.name === 'mainnet'){
      displayNetworkName = 'Ethereum Mainnet'
    } else if (network.name === 'sepolia'){
      displayNetworkName = 'Sepolia Testnet'
    } else if (network.name === 'matic'){
      displayNetworkName = 'Polygon Mainnet';
    } else if (network.name === 'matic-mumbai'){
      displayNetworkName = 'Mumbai Testnet';
    }
    // Add more mappings for other networks if needed

    setSelectedNetwork(displayNetworkName);
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
  }
};

const handleNetworkChange = async (selectedOption) => {
  try {
    let chainIdHex = selectedOption.chainId.toString(16);

    // Add leading '0'x if missing
    if (!chainIdHex.startsWith('0x')) {
      chainIdHex = '0x' + chainIdHex;
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    });

    const network = await window.ethereum.request({ method: 'eth_chainId' });

    // Find the correct display name from networkOptions using the selected chain ID
    const selectedNetworkData = networkOptions.find(option => option.chainId === selectedOption.chainId);
    if (selectedNetworkData) {
      setSelectedNetwork(selectedNetworkData.name); // Set the display name
    } else {
      setSelectedNetwork('Select Network'); // Fallback in case the network data is not found
    }
  } catch (error) {
    console.error('Error switching network:', error);
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
                <Link to="/Swap">Swap</Link>
                <Link to="/BurnPortal">Burn Portal</Link>
                <Link to="/Liquidity">Liquidity</Link>
                </div> 
                <Link to="/Buy" className="home-link"> Home <i class="gg-chevron-down"></i></Link>
              </li>
              <li>
                <Link to="/NFTs">NFT's</Link>
              </li>
              <li>
                <Link to="/More">More</Link>
              </li>
            </ul>
          </div>
            <div className="buy-navbar-connect">
              <ul className="buy-network-links">
                <li>
                  <div className="network-dropdown">
                  {networkOptions.map((option) => (
                    <a
                      key={option.id}
                      onClick={() => handleNetworkChange(option)}
                    >
                      {option.name}
                    </a>
                  ))}
                  </div>
                    <a className="home-link">{selectedNetwork} <i class="gg-chevron-down"></i></a>
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
