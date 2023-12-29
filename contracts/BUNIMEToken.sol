// BUNIMEToken.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Transaction Fee -> Developer of Contract and Deflationary Mechanism
contract BUNIMEToken is ERC20, Ownable {
    uint256 public transactionFee;

    constructor() ERC20("BUNIME", "BUNI") {
        _mint(msg.sender, 69420000000000 * 10 ** decimals());
        transactionFee = 10000; // Set the transaction fee to 1% (10000 / 1,000,000)
    }

    // Burning Mechanism
    function burn(uint256 value) external {
        _burn(msg.sender, value);
    }

    // Transaction Fee and Deflationary Mechanism
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override {
        uint256 fee = (amount * transactionFee) / 1e6;
        uint256 transferAmount = amount - fee;

        super._transfer(sender, recipient, transferAmount);

        // Burn a portion of the transaction fee
        _burn(sender, fee / 2); // For example, burn 0.5% of the total amount
    }
}
