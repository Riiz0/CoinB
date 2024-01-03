import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Imports
import LoadingScreen from './LoadingScreen';
import FastLoadingScreen from './FastLoadingScreen';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar';
import Community from './SideBar Sections/Navigation/Community';
import Updates from './SideBar Sections/Navigation/Updates';
import Tokenomics from './SideBar Sections/Navigation/Tokenomics';
import Swap from './BuyPage Sections/Swap';
import BurnPortal from './BuyPage Sections/BurnPortal';
import Liquidity from './BuyPage Sections/Liquidity';
import NFTs from './BuyPage Sections/NFTs';
import More from './BuyPage Sections/More';

function App() {
 const [isLoading, setLoading] = useState(true);
 const location = useLocation(); // Get the current location

 // Determine if we are in the HomeScreen or not
 const isHomeScreen = location.pathname === '/';

 return (
  <div className="App">
    {isHomeScreen ? (
      <LoadingScreen isLoading={isLoading} setLoading={setLoading}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/Tokenomics" element={<Tokenomics />} />
            <Route path="/Swap" element={<Swap />} />
            <Route path="/BurnPortal" element={<BurnPortal />} />
            <Route path="/Liquidity" element={<Liquidity />} />
            <Route path="/NFTs" element={<NFTs />} />
            <Route path="/More" element={<More />} />
          </Routes>
        </div>
      </LoadingScreen>
    ) : (
      <FastLoadingScreen>
        <div className="content">
          <Routes>
            <Route path="/Swap" element={<Swap />} />
            <Route path="/BurnPortal" element={<BurnPortal />} />
            <Route path="/Liquidity" element={<Liquidity />} />
            <Route path="/NFTs" element={<NFTs />} />
            <Route path="/More" element={<More />} />
          </Routes>
        </div>
      </FastLoadingScreen>
    )}
  </div>
 );
}

export default App;
