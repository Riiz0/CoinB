import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

//Imports
import About from './HomeScreen Sections/About';
import Ecosystem from './HomeScreen Sections/Ecosystem';

function HomeScreen({ setLoading }) {

  const handleBuyBuniClick = () => {
    window.open('/Swap', '_blank');
   };

  return (
    <div name="home" className="body-top-section">

      {/* Left Sidebar */}
      <div className="left-sidebar"></div>

      {/* Main Content */}
      <div className="main-content">

        {/* Background Container */}
        <div className="background-container">
          <div className="section-content animate-fade-in">
            <h1 className="section-title animate-slide-up">JOIN THE BUNIME REVOLUTION</h1>
            <p className="section-subtitle animate-slide-up">YOUR ANIME COMMUNITY CRYPTOCURRENCY</p>
            <div className="section-buttons animate-fade-in">
            <Link to="/Swap" target="_blank" onClick={handleBuyBuniClick} className="section-button left-button animate-scale no-underline">
          Buy BUNI
        </Link>
              <button className="section-button right-button animate-scale">Explore</button>
            </div>
          </div>
        </div>

        {/* Sponsor/Link Container */}
        <div className="sponsor-container">
        <div className="sponsor-images">
          <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
          <img src={require('../assets/coinmarketcap.png')} alt="CoinMarketCap" className="sponsor-image" />
          </a>
          <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
          <img src={require('../assets/coingecko.webp')} alt="CoinGecko" className="sponsor-image" />
          </a>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/Medium.png')} alt="Medium" className="sponsor-image" />
          </a>
          </div>
        </div>

        {/* About Container */}
        <Element name="about">
          <About />
        </Element>

        {/* About2 Container */}
        <div className="about2-container">
        <div className="about2-background-image"></div>
              <div className="about2-content">
                  <p className="about2-text">In addition to its role as a community coin, BUNIME has exciting plans to release NFT (Non-Fungible Token) collections based on different anime shows. NFTs are unique digital assets that can represent ownership of various forms of digital content, such as artwork, collectibles, and more. With BUNIME, fans will have the opportunity to acquire and trade exclusive NFTs featuring their favorite anime characters and moments.</p>          
                  <p className="about2-text">As a community-driven token, BUNIME places the anime community at its core. It aims to foster a welcoming and inclusive environment where fans can connect, share their enthusiasm, and collaborate on various initiatives. Whether it's discussing the latest anime releases, organizing events, or supporting anime-related projects, BUNIME is committed to nurturing a strong and supportive anime community.</p>
                  <p className="about2-text">Join BUNIME today and immerse yourself in the exciting fusion of anime and cryptocurrency. Embrace the spirit of fun, friendship, and creative exploration that BUNIME brings to the world of anime lovers and crypto enthusiasts alike.</p>
                </div>
            </div>

        {/* Ecosystem Container */}
        <Element name="ecosystem" className="ecosystem-container">
          <Ecosystem />
        </Element>

        <div className="image-gif-container">
          <div className="image-gif-background-image"></div>
        </div>

        <div className="Footer">
            <div className="Footer-Text">
              &copy; 2023 Your Crypto Game. All rights reserved.
            </div>
          </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar"></div>
    </div>
  );
}

export default HomeScreen;
