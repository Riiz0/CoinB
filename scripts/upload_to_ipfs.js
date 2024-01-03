const fs = require('fs');
const axios = require('axios');

async function uploadMetadataAndImage() {
 // Loop over the 10,000 metadata files
 for (let i = 1; i <= 10000; i++) {
   // Read the metadata file
   const metadata = JSON.parse(fs.readFileSync(`metadata/token_${i}.json`));

   // Convert the metadata to a string
   const metadataString = JSON.stringify(metadata);

   // Upload the metadata to IPFS
   const metadataResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', metadataString, {
     headers: {
       pinata_api_key: '<your-pinata-api-key>',
       pinata_secret_api_key: '<your-pinata-secret-api-key>'
     }
   });

   // Get the CID of the uploaded metadata
   const metadataCID = metadataResponse.data.IpfsHash;

   // Update the `image` field in the metadata with the IPFS URL of the image
   metadata.image = `ipfs://${metadataCID}/image.png`;

   // Convert the updated metadata back to a string
   const updatedMetadataString = JSON.stringify(metadata);

   // Upload the updated metadata to IPFS
   const updatedMetadataResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', updatedMetadataString, {
     headers: {
       pinata_api_key: '<your-pinata-api-key>',
       pinata_secret_api_key: '<your-pinata-secret-api-key>'
     }
   });

   // Log the CID of the uploaded metadata
   console.log(`Metadata ${i}: https://ipfs.io/ipfs/${updatedMetadataResponse.data.IpfsHash}`);
 }
}

uploadMetadataAndImage().catch(console.error);
