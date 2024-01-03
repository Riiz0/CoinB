const fs = require('fs');
const sharp = require('sharp');

async function generateImages() {
 // Loop over the 10,000 metadata files
 for (let i = 1; i <= 10000; i++) {
  // Load the metadata file
  const metadata = JSON.parse(fs.readFileSync(`metadata/token_${i}.json`));

  // Extract the traits from the metadata
  const background = metadata.attributes.find(attr => attr.trait_type === 'Background').value;
  const accessory = metadata.attributes.find(attr => attr.trait_type === 'Accessory').value;
  const emblem = metadata.attributes.find(attr => attr.trait_type === 'Emblem').value;

  // Determine the paths to the base image and overlay images based on the traits
  const baseImagePath = `path/to/base/${background}.png`;
  const overlayImagePath = `path/to/overlays/${accessory}.png`;
  const emblemImagePath = `path/to/emblems/${emblem}.png`;

  // Determine the output image path
  const outputImagePath = `path/to/output/token_${i}.png`;

  // Overlay the overlay images onto the base image
  await overlayImages(baseImagePath, overlayImagePath, outputImagePath);
  await overlayImages(outputImagePath, emblemImagePath, outputImagePath);
 }
}

generateImages()
 .then(() => console.log('Images generated successfully'))
 .catch(err => console.error('Error generating images:', err));
