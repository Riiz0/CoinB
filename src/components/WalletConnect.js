import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  connected: false,
  account: null,
};

const SET_CONNECTED = 'SET_CONNECTED';
const SET_ACCOUNT = 'SET_ACCOUNT';

const walletReducer = (state, action) => {
  switch (action.type) {
    case SET_CONNECTED:
      return { ...state, connected: action.payload };
    case SET_ACCOUNT:
      return { ...state, account: action.payload };
    default:
      return state;
  }
};

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletState = () => {
  return useContext(WalletContext);
};