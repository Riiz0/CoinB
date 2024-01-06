require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: "0.8.20",
 networks: {
   localhost: {},
   sepolia: {
     url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_ETH_TEST}`,
     accounts: [`0x${process.env.PRIVATE_KEY}`],
   },
   ethereum: {
    url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_ETH_MAINNET}`,
    accounts: [`0x${process.env.PRIVATE_KEY}`],
  },
  bnbTestnet: {
    url: `https://rpc.ankr.com/bsc_testnet_chapel/${process.env.ANKR_UNIQUE_TOKEN}`,
    accounts: [`0x${process.env.PRIVATE_KEY}`],
  },
  binance: {
    url: `https://rpc.ankr.com/bsc/${process.env.ANKR_UNIQUE_TOKEN}`,
    accounts: [`0x${process.env.PRIVATE_KEY}`],
  },
  mumbai: {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_POLY_TEST}`,
    accounts: [`0x${process.env.PRIVATE_KEY}`],
  },
  polygon: {
    url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_POLY_MAINNET}`,
    accounts: [`0x${process.env.PRIVATE_KEY}`],
  }
 },
}
