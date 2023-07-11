// BUNIMEToken.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './BUNINFTContract.sol';

//Transcation Fee -> Developer of Contract

contract BUNIMEToken is ERC20, Ownable{
    BUNINFTContract public nftContract;
    uint256 public transactionFee;

    constructor() ERC20("BUNIME", "BUNI") {
        _mint(msg.sender, 69420000000000 * 10 ** decimals());
        transactionFee = 6942; //Set the transaction fee to 0.732% (732 / 1,000,000)
    }

    function burn(uint256 value) 
    external {
        _burn(msg.sender, value);
    }

    function mintNFT() external {
        nftContract.mintNFT;
    }

    function transferNFT(address recipient, uint256 tokenId) 
    external {
        nftContract.transferNFT(recipient, tokenId);
    }

    function transfer(adress recipient, uint256 amount) 
    public override 
    returns (bool) {
        uint256 feeAmount = (amount * transactionFee) / 1000000; //Calculate the transaction fee amount (dividing by 1,000,000 for percentage calculation)
        uint256 transferAmount = amount - feeAmount; //Calculate the actual transfer amount after deducting the fee
    
        _transfer(_msgSender(), recipient, transferAmount); // Transfer the actual amount
        _transfer(_msgSender(), owner(), feeAmount); // Transfer the fee amount to the contract owner
    
        return true;
    }

    function setTransactionFee(uint256 fee) external onlyOwner{
        require(fee <= 1000000, "Fee must be between 0 and 1000000"); // Fee must be between 0 and 1000000 (100%)
        transactionFee = fee;
    }
}
