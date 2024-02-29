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
                    <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/tokenomics/usdbuni-token" className="ecosystem-link">
                      <div className="ecosystem-boxes-box tokenomics-box">
                        <div className="ecosystem-boxes-box-text">$BUNI</div>
                        <div className="ecosystem-boxes-box-subtext">TOKENOMICS</div>                
                      </div>
                    </Link>
                    <Link to="https://opensea.io/collection/bunime-genesis-1" className="ecosystem-link">
                      <div className="ecosystem-boxes-box nftcollections-box">
                        <div className="ecosystem-boxes-box-text">NFT</div>
                        <div className="ecosystem-boxes-box-subtext">COLLECTIONS</div>                
                    </div>
                    </Link>
                  </div>
                <div className="ecosystem-boxes-row">
                  <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/" className="ecosystem-link">
                      <div className="ecosystem-boxes-box whitepaper-box">
                          <div className="ecosystem-boxes-box-text">UTILITY</div>
                          <div className="ecosystem-boxes-box-subtext">WHITEPAPER</div>                
                      </div>
                    </Link>
                    <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/community/links" className="ecosystem-link">
                        <div className="ecosystem-boxes-box community-box">
                          <div className="ecosystem-boxes-box-text">COMMUNITY</div>
                          <div className="ecosystem-boxes-box-subtext"></div>
                      </div>
                    </Link>
            </div>
        </div>               
    </div>
  );
}

export default Ecosystem;
