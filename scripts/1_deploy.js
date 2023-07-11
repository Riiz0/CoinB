const { ethers } = require("hardhat");

async function main() {
    console.log(`Preparing deployment...\n`)

    //Fetch contract to deploy
    const TokenContract = await ethers.getContractFactory('BUNIMEToken')
    const NFTContract = await ethers.getContractFactory('BUNIMENFTContract')

    //Fetch accounts
    const accounts = await ethers.getSigners()

    `Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n${accounts[2].address}`

    //Deploy contract(s)
    const BUNI = await TokenContract.deploy('BUNIME', 'BUNI', '69420000000000');
    await BUNI.deployed();
    console.log(`BUNI Deployed to: ${BUNI.address}`)

    const BUNINFT = await NFTContract.deploy(BUNI.address);
    await BUNINFT.deployed();

    console.log(`BUNINFT Deployed to: ${BUNINFT.address}`)

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
