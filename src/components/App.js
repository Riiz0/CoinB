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
