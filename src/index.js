import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './buy.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <React.StrictMode>
   <BrowserRouter>
     <App pathname={window.location.pathname} />
   </BrowserRouter>
 </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();