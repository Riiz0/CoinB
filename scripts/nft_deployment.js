const { ethers } = require("hardhat");

async function main() {
 const [deployer] = await ethers.getSigners();

 console.log(
 "Deploying contracts with the account:",
 deployer.address
 );

 const ContractFactory = await ethers.getContractFactory("BUNIMENFTContract");
 const contract = await ContractFactory.deploy();

 // Wait for the contract to be mined
 await contract.waitForDeployment();

 console.log("Contract deployed to:", contract.target);

 // Set the mint start time
 const mintStartTime = Math.floor(Date.now() / 1000); // Current Unix timestamp
 await contract.setMintDate(mintStartTime);
 console.log(`Mint start time set to ${mintStartTime}`);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
 console.error(error);
 process.exit(1);
 });
