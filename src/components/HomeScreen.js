import React from 'react';
import { Helmet } from 'react-helmet';

function HomeScreen() {
  return (
    <div className="body-top-section">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet> 

      {/* Left Sidebar */}
      <div className="left-sidebar"></div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Background image will be applied via CSS */}
        <div className="background-container">
          {/* Background image will be applied via CSS */}
          <div className="section-content">
            <h1 className="section-title">JOIN THE BUNIME REVOLUTION</h1>
            <p className="section-subtitle">YOUR ANIME COMMUNITY CRYPTOCURRENCY</p>
            <div className="section-buttons">
              <button className="section-button left-button">Buy BUNI</button>
              <button className="section-button right-button">Explore</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="right-sidebar"></div>
    </div>
  );
}

export default HomeScreen;
