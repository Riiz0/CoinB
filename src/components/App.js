import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';

//Imports
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar';
import SideBarMenu from './SideBarMenu';
import Buy from './Buy';
import BuyNavbar from './BuyNavbar';
import Swap from './BuyPage Sections/Swap';
import BurnPortal from './BuyPage Sections/BurnPortal'
import Liquidity from './BuyPage Sections/Liquidity'
import NFTs from './BuyPage Sections/NFTs'
import More from './BuyPage Sections/More'

function App({ pathname }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        <LoadingScreen isLoading={isLoading} setLoading={setLoading} >
          {pathname === '/Buy' ? <BuyNavbar /> : <Navbar setLoading={setLoading} />}
          
          <div className="content">
            <Routes>
              <Route path="/" element={<HomeScreen setLoading={setLoading} />} />
              <Route path="/Buy" element={<Buy setLoading={setLoading} />} />
              <Route path="/Swap" element={<Swap />} />
              <Route path="/BurnPortal" element={<BurnPortal />} />
              <Route path="/Liquidity" element={<Liquidity />} />
              <Route path="/NFTs" element={<NFTs />} />
              <Route path="/More" element={<More />} />
              {/* Other routes */}
            </Routes>
          </div>
          <SideBarMenu />
        </LoadingScreen>
      </div>
    </Router>
  );
}

export default App;
