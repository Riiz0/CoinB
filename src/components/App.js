//Libraries
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

//Components
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the delay as needed (in milliseconds)
  }, []);

  const handleMenuToggle = () => {
    // Implement your logic to toggle the hamburger menu here
    console.log('Hamburger menu clicked');
  };

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar handleMenuToggle={handleMenuToggle} />
            <div className="content">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                {/* Add more routes and components as needed */}
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
