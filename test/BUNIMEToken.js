const { expect } = require('chai');
const { ethers } = require('hardhat');


const BUNITokens = (n) => {
    return ethers.parseUnits(n.toString(), 'ether')
}

describe('BUNITOKEN', () => {
    let BUNI, accounts, deployer, receiver, NFTContract
    
})
