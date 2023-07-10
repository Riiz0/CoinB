// BUNIMEToken.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './BUNINFTContract.sol';

contract BUNIMEToken is ERC20, Ownable{
    BUNINFTContract public nftContract;

    constructor() ERC20("BUNIME", "BUNI") {
        _mint(msg.sender, 69420000000000 * 10 ** decimals());
    }

    function burn(uint256 value) external {
        _burn(msg.sender, value);
    }

    function mintNFT() external {
        nftContract.mintNFT;
    }

    function transferNFT(address recipient, uint256 tokenId) external {
        nftContract.transferNFT(recipient, tokenId);
    }
}
