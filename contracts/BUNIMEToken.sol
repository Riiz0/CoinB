// BUNIMEToken.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';

contract BUNIMEToken is ERC20, Ownable {
    uint256 private constant MAX_SUPPLY = 69420000000000 * (10 ** 18); // Max Supply of 69.42 trillion
    uint256 private constant DEV_ALLOCATION = (MAX_SUPPLY * 69) / 1000; // 6.9% allocation for developer
    uint256 private constant MARKETING_ALLOCATION = (MAX_SUPPLY * 420) / 10000; // 4.20% allocation for marketing

    IUniswapV2Router02 private uniswapRouter;
    address private uniswapPair;

    constructor(address _uniswapRouterAddress) ERC20("BUNIME", "BUNI") {
        require(_uniswapRouterAddress != address(0), "Invalid Uniswap Router address");
        uniswapRouter = IUniswapV2Router02(_uniswapRouterAddress);
        uniswapPair = IUniswapV2Factory(uniswapRouter.factory()).createPair(address(this), uniswapRouter.WETH());

        _mint(address(this), DEV_ALLOCATION + MARKETING_ALLOCATION);
        _approve(address(this), _uniswapRouterAddress, DEV_ALLOCATION + MARKETING_ALLOCATION);
        _approve(owner(), address(this), DEV_ALLOCATION + MARKETING_ALLOCATION);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _beforeTokenTransfer(_msgSender(), recipient, amount, false);
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _beforeTokenTransfer(sender, recipient, amount, false);
        _transfer(sender, recipient, amount);
        uint256 currentAllowance = allowance(sender, _msgSender());
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        _approve(sender, _msgSender(), currentAllowance - amount);
        return true;
    }

    function _beforeTokenTransfer(address sender, address recipient, uint256 amount, bool isSell) internal {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(amount > 0, "ERC20: transfer amount must be greater than zero");

        if (isSell) {
            // Apply custom logic before a sell transfer
        } else {
            // Apply custom logic before any other transfer
        }
    }
}
