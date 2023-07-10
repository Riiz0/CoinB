// BUNIMEToken.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract BUNIMEToken is ERC20, Ownable{


    constructor() ERC20("BUNIME", "BUNI") {
        _mint(msg.sender, 69420000000000 * 10 ** decimals());
    }
}