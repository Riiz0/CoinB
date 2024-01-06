const fs = require("fs");

// Replace with your actual data
const bunnies = [
  { name: "Carrot Top Coco", rarity: 'Common' },
  // ...
  { name: "Hopps Solo", rarity: 'Uncommon' },
  // ...
  { name: "Thumper Thumpster", rarity: 'Epic' },
    // ...
  { name: "Bunzilla", rarity: 'Legendary' },
];

const backgrounds = [
    { name: "Black", rarity: "Common" },
    { name: "Cyan", rarity: "Common" },
    { name: "Dark Green", rarity: "Common" },
    { name: "EggPlant", rarity: "Common" },
    { name: "Grey", rarity: "Common" },
    { name: "Olive", rarity: "Common" },
    { name: "Orange", rarity: "Common" },
    { name: "Purple", rarity: "Common" },
    { name: "Red", rarity: "Common" },
    { name: "Tan", rarity: "Common" },
    // ...
    { name: "Cubic Blue", rarity: "Uncommon" },
    { name: "Cubic Bronze", rarity: "Uncommon" },
    { name: "Cubic Green", rarity: "Uncommon" },
    { name: "Cubic Red", rarity: "Uncommon" },
    // ...
    { name: "Chromatic Verse", rarity: "Rare" },
    { name: "Cosmic Canvas", rarity: "Rare" },
    { name: "Ephemeral Dreamscapes", rarity: "Rare" },
    { name: "Galactic Symphony", rarity: "Rare" },
    // ...
    { name: "Aqua Squiggle", rarity: "Epic" },
    { name: "Native Squiggle", rarity: "Epic" },
    { name: "UwU Squiggle", rarity: "Epic" },
    { name: "Pixelscape", rarity: "Epic" },
    { name: "Shifting Horizon", rarity: "Epic" },
    // ...
    { name: "Army Blue", rarity: "Legendary" },
    { name: "Army Green", rarity: "Legendary" },
    { name: "Army Grey", rarity: "Legendary" },
    { name: "Army Orange", rarity: "Legendary" },
    { name: "Army Purple", rarity: "Legendary" },
    { name: "Army Red", rarity: "Legendary" },
  ];
  
  const facewear = [
    { name: "None", rarity: "Common" },
    { name: "Karen", rarity: "Common" },
    // ...
    { name: "Kratos", rarity: "Uncommon" },
    { name: "SSX", rarity: "Uncommon" },
    // ...
    { name: "Raft", rarity: "Rare" },
    { name: "Steep", rarity: "Rare" },
    // ...
    { name: "Down Hill", rarity: "Epic" },
    // ...
    { name: "Intellect", rarity: "Legendary" },
    { name: "Sassy", rarity: "Legendary" },
  ];
  
  const headgear = [
    { name: "None", rarity: "Common" },
    { name: "Comfort", rarity: "Common" },
    { name: "Fiesta", rarity: "Common" },
    { name: "Flappers", rarity: "Common" },
    { name: "Gourmets", rarity: "Common" },
    { name: "Pals", rarity: "Common" },
    { name: "Siesta", rarity: "Common" },
    // ...
    { name: "All-Stars", rarity: "Uncommon" },
    { name: "Peak Performers", rarity: "Uncommon" },
    { name: "Shade Seekers", rarity: "Uncommon" },
    { name: "Skyline Crew", rarity: "Uncommon" },
    // ...
    { name: "City Slicker", rarity: "Rare" },
    { name: "Shadow Stalker", rarity: "Rare" },
    // ...
    { name: "Techno-Berserker", rarity: "Epic" },
    { name: "Valhalla Vanguard", rarity: "Epic" },
    // ...
    { name: "Eternal Ember", rarity: "Legendary" },
    { name: "Phoenix Flight", rarity: "Legendary" },
    { name: "Starlight Scepter", rarity: "Legendary" },
  ];

  const emblems = [
    { name: "None", rarity: "Common" },
    { name: "Cosmic Curiosities", rarity: "Common" },
    { name: "Forgotten Fables", rarity: "Common" },
    { name: "Mystical Menagerie", rarity: "Common" },
    // ...
    { name: "Shadow Kin", rarity: "Uncommon" },
    { name: "Siren's Song", rarity: "Uncommon" },
    { name: "Whispering Glade", rarity: "Uncommon" },
    // ...
    { name: "Atlas' Embrace", rarity: "Rare" },
    { name: "Celestial Compass", rarity: "Rare" },
    { name: "Cerberus' Gate", rarity: "Rare" },
    // ...
    { name: "Inferno's Fury", rarity: "Epic" },
    { name: "Phoenix Ember", rarity: "Epic" },
    // ...
    { name: "Dragonbone Diadem", rarity: "Legendary" },
    { name: "Valkyrie's Vigil", rarity: "Legendary" },
  ];

const numNFTs = 10000;

function weightedRandomSelection(items) {
  const rarityMap = {
    'Common': 5,
    'Uncommon': 4,
    'Rare': 3,
    'Epic': 2,
    'Legendary': 1
  };
 
  const weights = items.map(item => rarityMap[item.rarity]);
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
 
  const cumulativeWeights = [];
  let sum = 0;
  for (let weight of weights) {
    sum += weight;
    cumulativeWeights.push(sum);
  }
 
  const randomValue = Math.random() * totalWeight;
  for (let i = 0; i < cumulativeWeights.length; i++) {
    if (cumulativeWeights[i] >= randomValue) {
      return items[i];
    }
  }
 } 
 
 for (let i = 1; i <= numNFTs; i++) {
  const bunny = weightedRandomSelection(bunnies, numNFTs);
  const background = weightedRandomSelection(backgrounds, numNFTs);
  const faceWear = weightedRandomSelection(facewear, numNFTs);
  const headGear = weightedRandomSelection(headgear, numNFTs);
  const emblem = weightedRandomSelection(emblems, numNFTs); 
 
  const metadata = {
    name: `BUNIME NFT #${i}`,
    description: "A unique NFT from the BUNIMEVERSE.",
    image: "ipfs://<your-image-cid>",
    attributes: [
      { trait_type: "Bunnies", value: bunny.name, rarity: bunny.rarity },
      { trait_type: "Background", value: background.name, rarity: background.rarity },
      { trait_type: "FaceWear", value: faceWear.name, rarity: faceWear.rarity },
      { trait_type: "HeadGear", value: headGear.name, rarity: headGear.rarity },
      { trait_type: "Emblems", value: emblem.name, rarity: emblem.rarity },
    ],
  };
 
  fs.writeFileSync(`./metadata/json/token_${i}.json`, JSON.stringify(metadata, null, 2));
 }
