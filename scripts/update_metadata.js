const fs = require('fs');
const path = require('path');

// Directory containing your original JSON files
const directoryPath = path.resolve(__dirname, '../metadata/json/');

// Directory to save the new JSON files
const newDirectoryPath = path.resolve(__dirname, '../metadata/updated_json/');

// Load the tokens_cids.json file
const tokensCids = require('../metadata/cids/image_cids.json');

fs.readdir(directoryPath, function (err, files) {
 if (err) {
 return console.log('Unable to scan directory: ' + err);
 } 

 let i = 0;
 function processNextFile() {
 if (i < files.length) {
 const file = files[i];
 // Check if the file extension is .json
 if (path.extname(file) === '.json') {
 fs.readFile(path.join(directoryPath, file), 'utf8', function(err, data){
 if (err) throw err;
 
 // Parse the JSON data into an object
 const obj = JSON.parse(data);
 
 // Extract the token ID from the filename
 const tokenId = path.basename(file, '.json').split('_')[1];
 
 // Get the corresponding CID from the tokensCids object
 const sharedCID = tokensCids[`token_${tokenId}.png`];
 
 // Update the image property of the object
 obj.image = `ipfs://${sharedCID}`;
 
 // Convert the object back into a JSON string
 const updatedData = JSON.stringify(obj, null, 2);

 // Create a new file in the new directory with the updated data
 fs.writeFile(path.join(newDirectoryPath, file), updatedData, 'utf8', function(err){
 if (err) throw err;
 console.log(`Created ${file}`);
 i++;
 processNextFile();
 });
 });
 } else {
 i++;
 processNextFile();
 }
 }
 }

 processNextFile();
});
