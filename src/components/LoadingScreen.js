import React, { useState, useEffect } from 'react';
import HomeScreen from './HomeScreen';

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
        <div className="loader"></div>
        <p className="loading-text">Loading...</p>
    </div>
    );
  }

  return <HomeScreen />;
}

export default LoadingScreen;
