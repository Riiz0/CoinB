import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state
const initialState = {
  connected: false,
  account: null,
};

// Define your actions
const SET_CONNECTED = 'SET_CONNECTED';
const SET_ACCOUNT = 'SET_ACCOUNT';

// Create a reducer function
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

// Create a context
const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletContext.Provider>
  );
};

// Create custom hooks to access the context
export const useWalletState = () => {
  return useContext(WalletContext);
};
