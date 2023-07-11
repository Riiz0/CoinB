// BUNIMEToken.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BUNINFTContract is ERC721, Ownable {
    mapping(address => bool) private _hasLevel1NFT;
    mapping(address => bool) private _hasLevel2NFT;
    mapping(address => bool) private _hasLevel3NFT;

    uint256 private constant TOKENS_FOR_LEVEL1 = 10;
    uint256 private constant TOKENS_FOR_LEVEL2 = 100;
    uint256 private constant TOKENS_FOR_LEVEL3 = 1000;

    constructor() ERC721("BUNINFT", "NFT") {}

function mintNFT() external {
    uint256 tokenBalance = getTokenBalance(msg.sender);
    
    if (tokenBalance >= TOKENS_FOR_LEVEL3) {
        require(!_hasLevel3NFT[msg.sender], "You already have a Level 3 NFT");
        _mint(msg.sender, 3);
        _hasLevel3NFT[msg.sender] = true;
    }
    
    if (tokenBalance >= TOKENS_FOR_LEVEL2) {
        require(!_hasLevel2NFT[msg.sender], "You already have a Level 2 NFT");
        _mint(msg.sender, 2);
        _hasLevel2NFT[msg.sender] = true;
    }
    
    if (tokenBalance >= TOKENS_FOR_LEVEL1) {
        require(!_hasLevel1NFT[msg.sender], "You already have a Level 1 NFT");
        _mint(msg.sender, 1);
        _hasLevel1NFT[msg.sender] = true;
    }
}


    function transferNFT(address recipient, uint256 tokenId) external {
        //Text Here
    }

    function getTokenBalance(address account) public view 
    returns (uint256) {
        //Text Here
    } 

    function getTokenRequirement(uint256 tokenId) public pure 
    returns (uint256) {
        //Text Here
    }

}
