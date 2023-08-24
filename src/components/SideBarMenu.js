import React from 'react';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';
import { Link } from 'react-router-dom';

const SideBarMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-options">
        <div className="sidebar-close-icon" onClick={onClose}>
          <Icon icon={cross} size={24} />
        </div>
        <div className="sidebar-title">Navigation</div>
        <Link to="/Updates">Updates</Link>
        <Link to="/Statistics">Statistics</Link>
        <Link to="/tokenomics">Tokenomics</Link>
        <Link to="/nftcollections">NFT Collections</Link>
        <Link to="/community">Community</Link>

        <div className="sidebar-title sidebar-spacing">Resources</div>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/">Legal Disclaimer</Link>
        <Link to="/">Bridge</Link>
        <Link to="/">Medium</Link>
        <Link to="/nftmints">NFT Mints</Link>
        <Link to="/">WhitePaper</Link>
      </div>
    </div>
  );
};

export default SideBarMenu;
