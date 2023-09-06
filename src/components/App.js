import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

//Imports
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar';
import Community from './SideBar Sections/Navigation/Community';
import Updates from './SideBar Sections/Navigation/Updates';
import Tokenomics from './SideBar Sections/Navigation/Tokenomics';
import BuyNavbar from './BuyNavbar';
import Buy from './Buy';
import Swap from './BuyPage Sections/Swap';
import BurnPortal from './BuyPage Sections/BurnPortal'
import Liquidity from './BuyPage Sections/Liquidity'
import NFTs from './BuyPage Sections/NFTs'
import More from './BuyPage Sections/More'

function App() {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation(); // Get the current location

  // Determine if we are in the Buy route or its children
  const isBuyRoute = location.pathname.startsWith('/Buy');

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} setLoading={setLoading}>
        {isBuyRoute ? <BuyNavbar /> : <Navbar setLoading={setLoading} />}
        
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeScreen setLoading={setLoading} />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/Tokenomics" element={<Tokenomics />} />
            <Route path="/Buy/*" element={<Buy />} />
            <Route path="/Buy/Swap" element={<Swap />} />
            <Route path="/Buy/BurnPortal" element={<BurnPortal />} />
            <Route path="/Buy/Liquidity" element={<Liquidity />} />
            <Route path="/Buy/NFTs" element={<NFTs />} />
            <Route path="/Buy/More" element={<More />} />
          </Routes>
        </div>
      </LoadingScreen>
    </div>
  );
}

export default App;
