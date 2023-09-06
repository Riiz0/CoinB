import React, { useEffect } from 'react';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

//Imports
import '../.././buy.css';

function Swap() {
  useEffect(() => {
  }, []);
  return (
    <div>
        <div name="swap" className="buy-body-top-section">
          {/* Main Content */}
          <div className="buy-main-content">
            <div className="Uniswap">
            <SwapWidget  
              width={360}
            />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Swap;
