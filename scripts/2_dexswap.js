const config = require('../src/config.json')


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});