const { ethers } = require("hardhat");

async function main() {
    console.log(`Preparing deployment...\n`)

    //Fetch contract to deploy
    const BUNIMEToken = await ethers.getContractFactory('BUNIME')

    //Fetch accounts
    const accounts = await ethers.getSigners()

    //Deploy contract(s)

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});