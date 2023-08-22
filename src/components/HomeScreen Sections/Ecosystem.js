import React from "react";

function Ecosystem () {
    return(
        <div id="ecosystem">
            {/* Ecosystem Container */}
                <div className="ecosystem-content">
                   <p className="ecosystem-subtitle">ECOSYSTEM</p>
                   <h1 className="ecosystem-title">THE BUNIME ECOSYSTEM</h1>             
                </div>
                <div className="ecosystem-boxes-container">
                    <div className="ecosystem-boxes-row">
                      <div className="ecosystem-boxes-box">
                      <div className="ecosystem-boxes-box-text">$BUNI</div>
                      <div className="ecosystem-boxes-box-subtext">TOKENOMICS</div>                
                    </div>
                      <div className="ecosystem-boxes-box">
                      <div className="ecosystem-boxes-box-text">NFT</div>
                      <div className="ecosystem-boxes-box-subtext">COLLECTIONS</div>                
                      </div>
                    </div>
                <div className="ecosystem-boxes-row">
                    <div className="ecosystem-boxes-box">
                        <div className="ecosystem-boxes-box-text">UTILITY</div>
                        <div className="ecosystem-boxes-box-subtext">WHITEPAPER</div>                
                    </div>
                        <div className="ecosystem-boxes-box">
                        <div className="ecosystem-boxes-box-text">COMMUNITY</div>
                        <div className="ecosystem-boxes-box-subtext"></div>                
                        </div>
                </div>
            </div>               
        </div>
    );
}

export default Ecosystem;
