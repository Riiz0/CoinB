import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';
import logo from '../assets/logo.png'

function LoadingScreen() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the delay as needed (in milliseconds)
  }, []);

  if (isLoading) {
    return (
    <div className="loading-container">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <img src={logo} alt="" className="bunny-image" />
      <p className="loading-text">Loading...</p>
    </div>
    );
  }

  return <HomeScreen />;
}

export default LoadingScreen;
