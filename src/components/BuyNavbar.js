import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';

//Imports
import { useWalletState } from './WalletConnect';
import { connectWallet, disconnectWallet } from './WalletActions';
import logo from '../assets/logo.png';
import networkOptions from './Networks';
import EthereumLogo from '../assets/Ethereum.png';
import PolygonLogo from '../assets/Polygon.png';
import TestnetLogo from '../assets/Testnet.png';

function BuyNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const { state, dispatch } = useWalletState(); // Get wallet state

  // Extract wallet state values
  const { connected, account } = state;

  const [selectedNetwork, setSelectedNetwork] = useState('Select Network');

  const connectHandler = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const connectedAccount = ethers.getAddress(accounts[0]);

      // Dispatch actions to update wallet state
      dispatch({ type: 'SET_CONNECTED', payload: true });
      dispatch({ type: 'SET_ACCOUNT', payload: connectedAccount });

      // Get And Set Connected Blockchain Network
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();

      // Map network names if necessary
      let displayNetworkName = network.name;
      if (network.name === 'mainnet') {
        displayNetworkName = 'Ethereum Mainnet';
      } else if (network.name === 'matic') {
        displayNetworkName = 'Polygon Mainnet';
      } else if (network.name === 'sepolia') {
        displayNetworkName = 'Sepolia Testnet';
      } else if (network.name === 'matic-mumbai') {
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

      // Find the correct display name from networkOptions using the selected chain ID
      const selectedNetworkData = networkOptions.find((option) => option.chainId === selectedOption.chainId);
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
                  <Link to="/Buy/Swap">Swap</Link>
                  <Link to="/Buy/BurnPortal">Burn Portal</Link>
                  <Link to="/Buy/Liquidity">Liquidity</Link>
                </div>
                <Link to="/Buy" className="home-link">
                  {' '}
                  Home <i className="gg-chevron-down"></i>
                </Link>
              </li>
              <li>
                <Link to="/Buy/NFTs">NFT's</Link>
              </li>
              <li>
                <Link to="/Buy/More">More</Link>
              </li>
            </ul>
          </div>
          <div className="buy-navbar-connect">
            <ul className="buy-network-links">
              <li>
                <div className="network-dropdown">
                  <div className="network-group">
                    <p>Mainnets:</p>
                    {networkOptions
                      .filter((option) => option.type === 'mainnet')
                      .map((option) => (
                        <div className="network-button" key={option.id} onClick={() => handleNetworkChange(option)}>
                          <img
                            src={option.name === 'Ethereum Mainnet' ? EthereumLogo : PolygonLogo}
                            alt={option.name}
                            className="network-logo"
                          />
                          {option.name}
                        </div>
                      ))}
                  </div>
                  <div className="network-group">
                    <p>Testnets:</p>
                    {networkOptions
                      .filter((option) => option.type === 'testnet')
                      .map((option) => (
                        <div className="network-button" key={option.id} onClick={() => handleNetworkChange(option)}>
                          <img
                            src={option.name === 'Sepolia Testnet' ? TestnetLogo : TestnetLogo}
                            alt={option.name}
                            className="network-logo"
                          />
                          {option.name}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="network-home-link">
                  {selectedNetwork === 'Ethereum Mainnet' ? (
                    <>
                      <img src={EthereumLogo} alt="Ethereum Logo" className="network-logo" />
                      Ethereum Mainnet
                    </>
                  ) : selectedNetwork === 'Polygon Mainnet' ? (
                    <>
                      <img src={PolygonLogo} alt="Polygon Logo" className="network-logo" />
                      Polygon Mainnet
                    </>
                  ) : selectedNetwork === 'Sepolia Testnet' ? (
                    <>
                      <img src={TestnetLogo} alt="Testnet Logo" className="network-logo" />
                      Sepolia Testnet
                    </>
                  ) : selectedNetwork === 'Mumbai Testnet' ? (
                    <>
                      <img src={TestnetLogo} alt="Testnet Logo" className="network-logo" />
                      Mumbai Testnet
                    </>
                  ) : (
                    selectedNetwork
                  )}{' '}
                  <i className="gg-chevron-down"></i>
                </div>
              </li>
            </ul>
            {connected ? (
              <button type="button" className={`buy-navbar-connect clicked`}>
                {account ? `${account.slice(0, 6)}...${account.slice(38, 42)}` : 'Connected'}
              </button>
                ) : (
                  <button type="button" className={`buy-navbar-connect`} onClick={connectHandler}>
                    Connect Wallet
                  </button>
                )}
          </div>
        </nav>
      </nav>
    );
  }

export default BuyNavbar;
