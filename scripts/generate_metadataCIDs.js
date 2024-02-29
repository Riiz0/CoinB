require('dotenv').config();

const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Directory containing your metadata JSON files
const directoryPath = './metadata/updated_json/';

// JSON file to store CIDs
const cidsJson = './src/cids/metadata_cids.json';

// Your NFT.storage API key
const apiKey = process.env.NFT_METADATA_API_KEY;

// Read existing CIDs from cids.json
let cids = {};
if (fs.existsSync(cidsJson)) {
 cids = JSON.parse(fs.readFileSync(cidsJson, 'utf8'));
}

fs.readdir(directoryPath, async (err, files) => {
 if (err) {
 console.error('Could not list the directory.', err);
 process.exit(1);
 } 

 for (const file of files) {
 if (path.extname(file) === '.json' && !cids[file]) {
 const filePath = path.join(directoryPath, file);
 const fileBuffer = fs.readFileSync(filePath);

 try {
  console.log(`Uploading file: ${file}`); // Log the file being uploaded

  const response = await axios.post('https://api.nft.storage/upload', fileBuffer, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });

  cids[file] = response.data.value.cid;

  console.log(`CID for ${file}: ${cids[file]}`); // Log the CID for the uploaded file
 } catch (error) {
  console.error('Failed to upload file to IPFS.', error);
  process.exit(1);
 }
 }
 }

 console.log('Writing CIDs to cids.json'); // Log that the CIDs are being written to the file
 fs.writeFileSync(cidsJson, JSON.stringify(cids, null, 2));
});
