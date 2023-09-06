import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import path
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './buy.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App pathname={window.location.pathname} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
