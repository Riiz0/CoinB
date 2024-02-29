const { ethers } = require("hardhat");

async function main() {
   const [deployer] = await ethers.getSigners();

   console.log(
       "Deploying contracts with the account:",
       deployer.address
   );

   const ContractFactory = await ethers.getContractFactory("BUNIMEToken");
   const contract = await ContractFactory.deploy();

  // Wait for the contract to be mined
  await contract.waitForDeployment();

  console.log("Contract deployed to:", contract.target);
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
