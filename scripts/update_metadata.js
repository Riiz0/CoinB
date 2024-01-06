const fs = require('fs');
const path = require('path');

// Directory containing your original JSON files
const directoryPath = path.resolve(__dirname, '../metadata/json/');

// Shared CID for your images and metadata
const sharedCID = "bafybeidvb6m6opgnzfznns25mtidslgzmaarpvpihluiolzjw3kq6jjkwy"; // Replace this with the actual CID

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
 
 // Replace the placeholder in the JSON data with the shared CID
 const updatedData = data.replace(/"image":"ipfs:\/\/<your-image-cid>"/g, `"image":"ipfs://${sharedCID}"`);

 // Overwrite the existing file with the updated data
 fs.writeFile(path.join(directoryPath, file), updatedData, 'utf8', function(err){
  if (err) throw err;
  console.log(`Updated ${file}`);
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
