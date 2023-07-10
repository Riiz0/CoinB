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

    uint256 private constant TOKENS_FOR_LEVEL1 = 500;
    uint256 private constant TOKENS_FOR_LEVEL2 = 5000;
    uint256 private constant TOKENS_FOR_LEVEL3 = 50000;

    constructor() ERC721("BUNINFT", "NFT") {}

    function mintNFT() external{
        //Text Here
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