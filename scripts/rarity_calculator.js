const fs = require('fs');
const path = require('path');

const metadataDir = './metadata/json';

function getLayerRarityCounts(dir) {
 const counts = {};
 fs.readdirSync(dir).forEach(file => {
 const metadata = JSON.parse(fs.readFileSync(path.join(dir, file)));
 metadata.attributes.forEach(attr => {
   if (!counts[attr.trait_type]) {
     counts[attr.trait_type] = {
       'Common': 0,
       'Uncommon': 0,
       'Rare': 0,
       'Epic': 0,
       'Legendary': 0
     };
   }
   counts[attr.trait_type][attr.rarity]++;
 });
 });
 return counts;
}

const counts = getLayerRarityCounts(metadataDir);
console.log(counts);

function getMajorityLegendaryTokens(dir) {
  const majorityLegendaryTokens = [];
  fs.readdirSync(dir).forEach(file => {
    const metadata = JSON.parse(fs.readFileSync(path.join(dir, file)));
    const tokenId = parseInt(file.split('.')[0].split('_')[1]); // Extract token ID from filename
    const legendaryCount = metadata.attributes.reduce((count, attr) => attr.rarity === 'Legendary' ? count + 1 : count, 0);
    const totalAttributes = metadata.attributes.length;
    if (legendaryCount >= totalAttributes * 0.5) { // If legendary rarity is the majority
      majorityLegendaryTokens.push(tokenId);
    }
  });
  return majorityLegendaryTokens;
 }
 
 const majorityLegendaryTokens = getMajorityLegendaryTokens(metadataDir);
 console.log('Majority legendary tokens:', majorityLegendaryTokens);
 
 function getMajorityEpicTokens(dir) {
  const majorityEpicTokens = [];
  fs.readdirSync(dir).forEach(file => {
    const metadata = JSON.parse(fs.readFileSync(path.join(dir, file)));
    const tokenId = parseInt(file.split('.')[0].split('_')[1]); // Extract token ID from filename
    const epicCount = metadata.attributes.reduce((count, attr) => attr.rarity === 'Epic' ? count + 1 : count, 0);
    const totalAttributes = metadata.attributes.length;
    if (epicCount >= totalAttributes * 0.5) { // If epic rarity is the majority
      majorityEpicTokens.push(tokenId);
    }
  });
  return majorityEpicTokens;
 }
 
 const majorityEpicTokens = getMajorityEpicTokens(metadataDir);
 console.log('Majority epic tokens:', majorityEpicTokens);
 
 function getMajorityBothTokens(dir) {
  const majorityBothTokens = [];
  fs.readdirSync(dir).forEach(file => {
    const metadata = JSON.parse(fs.readFileSync(path.join(dir, file)));
    const tokenId = parseInt(file.split('.')[0].split('_')[1]); // Extract token ID from filename
    const bothCount = metadata.attributes.reduce((count, attr) => ['Legendary', 'Epic'].includes(attr.rarity) ? count + 1 : count, 0);
    const totalAttributes = metadata.attributes.length;
    if (bothCount >= totalAttributes * 0.5) { // If both legendary and epic rarities are the majority
      majorityBothTokens.push(tokenId);
    }
  });
  return majorityBothTokens;
 }
 
 const majorityBothTokens = getMajorityBothTokens(metadataDir);
 console.log('Majority both tokens:', majorityBothTokens);
 