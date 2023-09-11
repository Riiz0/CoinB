import React from 'react';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

// Imports
import { useWalletState } from '../WalletConnect';
import MetamaskLogo from '../MetamaskLogo';
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

function Swap() {
  const { state } = useWalletState();
  const { connected } = state;

  return (
    <div>
      <div name="swap" className="buy-body-top-section">
        {/* Main Content */}
        <div className="buy-main-content">
          <div className="Uniswap">
            {/* Conditionally render wallet connection status */}
            {connected ? (
              // Wallet is connected, display connected components
              <div>
                <p className="connected-text">Your Wallet is Connected</p>
                {/* Include SwapWidget here */}
                <SwapWidget />
              </div>
            ) : (
              // Wallet is not connected, display connect button from Uniswap widget
              <div>
                {/* Include the MetamaskLogo component */}
                <MetamaskLogo />
                {/* Centered "Please Connect Wallet" text */}
                <p style={connectTextStyles}>Please Connect Wallet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Swap;
