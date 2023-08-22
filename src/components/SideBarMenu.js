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
        <Link to="/">Updates</Link>
        <Link to="/Buy">Buy</Link>
        <Link to="/">Statistics</Link>

        <div className="sidebar-title sidebar-spacing">Resources</div>
        <Link to="/">Roadmap</Link>
        <Link to="/">Legal</Link>
        <Link to="/">Bridge</Link>
        <Link to="/">Medium</Link>
        <Link to="/">NFT Mints</Link>
        <Link to="/">WhitePaper</Link>
      </div>
    </div>
  );
};

export default SideBarMenu;
