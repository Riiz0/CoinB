// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BUNIMEToken is ERC20, Ownable {

    constructor() ERC20("BUNIME", "BUNI") {
        _mint(msg.sender, 69420000000000 * 10 ** decimals());
    }

    function burn(uint256 value) external {
        require(balanceOf(msg.sender) >= value, "Not enough tokens to burn");
        _burn(msg.sender, value);
    }
}
