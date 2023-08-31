const networkOptions = [
    {
      name: 'Ethereum Mainnet',
      id: 1,
      chainId: 1,
      chainData: {
        name: 'Ethereum Mainnet',
        nativeCurrencyName: 'Ether',
        nativeCurrencySymbol: 'ETH',
        rpcUrl: `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_ETH_MAIN}`,
        blockExplorerUrl: 'https://etherscan.io/',
      },
    },
    {
        name: 'Sepolia Testnet',
        id: 2,
        chainId: 11155111,
        chainData: {
          name: 'Sepolia Testnet',
          nativeCurrencyName: 'SepoliaETH',
          nativeCurrencySymbol: 'SepoliaETH',
          rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_ETH_TEST}`,
          blockExplorerUrl: 'https://sepolia.etherscan.io',
        },
      },
    {
      name: 'Polygon Mainnet',
      id: 3,
      chainId: 137,
      chainData: {
        name: 'Polygon Mainnet',
        nativeCurrencyName: 'MATIC',
        nativeCurrencySymbol: 'MATIC',
        rpcUrl: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_POLY_MAIN}`,
        blockExplorerUrl: 'https://polygonscan.com/',
      },
    },
    {
    name: 'Mumbai Testnet',
    id: 4,
    chainId: 80001,
    chainData: {
      name: 'Mumbai Testnet',
      nativeCurrencyName: 'MATIC',
      nativeCurrencySymbol: 'MATIC',
      rpcUrl: `https://polygon-mumbai.g.alchemy.com/v2/.${process.env.REACT_APP_ALCHEMY_PROJECT_ID_POLY_TEST}`,
      blockExplorerUrl: 'https://mumbai.polygonscan.com',
    },
  },
];
export default networkOptions;
    // {
    //   name: 'BNB Smart Chain',
    //   id:5,
    //   chainId: 56,
    //   chainData: {
    //     name: 'Binance Smart Chain Mainnet',
    //     nativeCurrencyName: 'BNB',
    //     nativeCurrencySymbol: 'BNB',
    //     rpcURL:`https://mainnet.infura.io/v3/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_BNB_MAIN}`,
    //     blockExplorerUrl: 'https://bscscan.com',
    //   },
    // },
    // {
    //   name: 'BNB Testnet',
    //   id:5,
    //   chainId: 56,
    //   chainData: {
    //     name: 'Binance Smart Chain Testnet',
    //     nativeCurrencyName: 'BNB',
    //     nativeCurrencySymbol: 'BNB',
    //     rpcURL:`https://mainnet.infura.io/v3/${process.env.REACT_APP_ALCHEMY_PROJECT_ID_BNB_TEST}`,
    //     blockExplorerUrl: 'https://bscscan.com',
    //   },
    // },
    // Add more network options here
//];
//export default networkOptions;
