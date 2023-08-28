import React from 'react';

//Imports
import BuyNavbar from './BuyNavbar';
import '.././buy.css'

function Buy() {
  return (
    <div name="buy" className="buy-body-top-section">
      {/* Main Content */}
      <div className="buy-main-content">
        {/* Background Container */}
        <div className="buy-background-container">
          <div className="buy-background-image"></div>
        </div>
        <div className="buy-about-container"></div>
      </div>
    </div>
  );
}

export default Buy;
