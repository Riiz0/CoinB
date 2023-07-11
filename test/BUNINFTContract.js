const { expect } = require('chai');
const { ethers } = require('hardhat');

const BUNITokens = (n) => {
    return ethers.parseUnits(n.toString(), 'ether')
}

describe('NFTContract', () => {
    let deployer, NFTContract

})
