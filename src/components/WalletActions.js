export const connectWallet = (account) => ({
    type: 'SET_CONNECTED',
    payload: true,
    account,
  });
  
  export const disconnectWallet = () => ({
    type: 'SET_CONNECTED',
    payload: false,
    account: null,
  });
  