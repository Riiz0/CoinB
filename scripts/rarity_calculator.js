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
