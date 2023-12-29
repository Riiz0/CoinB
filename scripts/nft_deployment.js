const { ethers } = require("hardhat");

async function main() {
  // Fetch contract to deploy
  const NFTContract = await ethers.getContractFactory("BUNIMENFTCollection");

  // Fetch accounts
  const accounts = await ethers.getSigners();

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n${accounts[2].address}`);

  // Deploy contract
  const BUNINFT = await NFTContract.deploy();

  await BUNINFT.deployed();

  console.log("BUNIMENFTCollection deployed to:", BUNINFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
