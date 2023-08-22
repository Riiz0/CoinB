import React from "react";
import { Link } from 'react-router-dom';

function Ecosystem () {
    return(
        <div id="ecosystem">
            <div className="ecosystem-content">
                   <p className="ecosystem-subtitle">ECOSYSTEM</p>
                   <h1 className="ecosystem-title">THE BUNIME ECOSYSTEM</h1>             
                </div>
                <div className="ecosystem-boxes-container">
                    <div className="ecosystem-boxes-row">
                      <div className="ecosystem-boxes-box">
                        <Link to="/tokenomics" className="ecosystem-link">
                      <div className="ecosystem-boxes-box-text">$BUNI</div>
                      <div className="ecosystem-boxes-box-subtext">TOKENOMICS</div>                
                        </Link>
                    </div>
                      <div className="ecosystem-boxes-box">
                      <Link to="/nftcollections" className="ecosystem-link">
                      <div className="ecosystem-boxes-box-text">NFT</div>
                      <div className="ecosystem-boxes-box-subtext">COLLECTIONS</div>                
                        </Link>
                      </div>
                    </div>
                <div className="ecosystem-boxes-row">
                    <div className="ecosystem-boxes-box">
                    <Link to="/whitepaper" className="ecosystem-link">
                        <div className="ecosystem-boxes-box-text">UTILITY</div>
                        <div className="ecosystem-boxes-box-subtext">WHITEPAPER</div>                
                        </Link>
                    </div>
                        <div className="ecosystem-boxes-box">
                        <Link to="/community" className="ecosystem-link">
                        <div className="ecosystem-boxes-box-text">COMMUNITY</div>
                        <div className="ecosystem-boxes-box-subtext"></div>                
                        </Link>
                    </div>
                </div>
            </div>               
        </div>
    );
}

export default Ecosystem;
