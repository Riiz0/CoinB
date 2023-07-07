async function main() {
    console.log(`Preparing deployment...\n`)

    //Fetch contract to deploy
    const Token = await ethers.getContractFactory('Token')

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});