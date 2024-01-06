const fs = require('fs');
const sharp = require('sharp');

async function overlayImages(baseImagePath, overlayImagePaths, outputImagePath) {
  const baseImage = sharp(baseImagePath);
  const overlayImages = overlayImagePaths.map(path => ({ input: path, gravity: 'center', blend: 'over' }));
 
  const compositeImage = await baseImage
    .composite(overlayImages)
    .toBuffer();
 
  const baseMetadata = await baseImage.metadata();
 
  await sharp(compositeImage)
    .resize(baseMetadata.width, baseMetadata.height) // Resize the image to the dimensions of the base image
    .toFile(outputImagePath)
    .catch(err => console.error('Error writing image:', err));
 } 

async function generateImages() {
  // Loop over the 10,000 metadata files
  for (let i = 1; i <= 10000; i++) {
   // Load the metadata file
   const metadata = JSON.parse(fs.readFileSync(`./metadata/json/token_${i}.json`));
 
   // Extract the traits from the metadata
   const backgroundAttr = metadata.attributes.find(attr => attr.trait_type === 'Background');
   const baseimageAttr = metadata.attributes.find(attr => attr.trait_type === 'Bunnies');
   const headgearAttr = metadata.attributes.find(attr => attr.trait_type === 'HeadGear');
   const facewearAttr = metadata.attributes.find(attr => attr.trait_type === 'FaceWear');
   const emblemsAttr = metadata.attributes.find(attr => attr.trait_type === 'Emblems');
 
   // Determine the paths to the base image and overlay images based on the traits
   const baseImagePath = `./NFT Layers/bunnies/${baseimageAttr.rarity}/${baseimageAttr.value}.png`;
   const backgroundImagePath = `./NFT Layers/backgrounds/${backgroundAttr.rarity}/${backgroundAttr.value}.png`;
   const headgearImagePath = `./NFT Layers/headgear/${headgearAttr.rarity}/${headgearAttr.value}.png`;
   const facewearImagePath = `./NFT Layers/facewear/${facewearAttr.rarity}/${facewearAttr.value}.png`;
   const emblemsImagePath = `./NFT Layers/emblems/${emblemsAttr.rarity}/${emblemsAttr.value}.png`;
 
   // Determine the output image path
   const outputImagePath = `./metadata/images/token_${i}.png`;
 
   // Overlay the overlay images onto the base image
   await overlayImages(backgroundImagePath, [baseImagePath, facewearImagePath, headgearImagePath, emblemsImagePath], outputImagePath);
 
   // Print a message every time an image is generated
   console.log(`Generated image ${i}`);
  }
 }
  
  generateImages()
   .then(() => console.log('Images generated successfully'))
   .catch(err => console.error('Error generating images:', err));
