const { ethers } = require("hardhat");

async function main() {
  // Fetch contract to deploy
  const TokenContract = await ethers.getContractFactory("BUNIMEToken");

  // Fetch accounts
  const accounts = await ethers.getSigners();

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n${accounts[2].address}`);

  // Deploy contract
  const BUNI = await TokenContract.deploy("BUNIME", "BUNI", "69420000000000");

  await BUNI.deployed();

  console.log("BUNIMEToken deployed to:", BUNI.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
