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
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/roadmap/updates">Updates</Link>
        <Link to="/Liquidity">Statistics</Link>
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/tokenomics/usdbuni-token">Tokenomics</Link>
        <Link to="https://opensea.io/collection/bunime-genesis-1">NFT Collections</Link>
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/community/links">Community</Link>

        <div className="sidebar-title sidebar-spacing">Resources</div>
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/roadmap/bunime-plans">Roadmap</Link>
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/legal-disclaimer/legal-disclaimer">Legal Disclaimer</Link>
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/community/links">Bridge</Link>
        <Link to="/NFTs">NFT Mints</Link>
        <Link to="https://app.gitbook.com/o/BmQIxCh3Aqzrr5XNSgM8/s/yIorri0D0EchJZ6OXUQx/">WhitePaper</Link>
      </div>
    </div>
  );
};

export default SideBarMenu;
