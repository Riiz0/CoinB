const fs = require("fs");

// Replace with your actual data
const bunnies = [
  { name: "Bunny A", rarity: 50 },
  { name: "Bunny B", rarity: 30 },
  { name: "Bunny C", rarity: 15 },
  { name: "Bunny D", rarity: 5 },
];

const backgrounds = [
    { name: "Black", rarity: "Common" },
    { name: "White", rarity: "Common" },
    // ...
    { name: "Army Red", rarity: "Uncommon" },
    // ...
    { name: "Mystical Nebula", rarity: "Legendary" },
  ];
  
  const accessories = [
    { name: "Carrot", rarity: "Common" },
    // ...
    { name: "Golden Crown", rarity: "Epic" },
    // ...
  ];
  
  const emblems = [
    // ...
    { name: "Starlight Shield", rarity: "Legendary" },
  ];

const numNFTs = 10000;

for (let i = 1; i <= numNFTs; i++) {
  const attributes = [];

  // Select a random trait from each category based on rarity
  attributes.push({
    trait_type: "Bunny",
    value: weightedRandomSelection(bunnies),
  });
  attributes.push({
    trait_type: "Background",
    value: weightedRandomSelection(backgrounds),
  });
  attributes.push({
    trait_type: "Accessory",
    value: weightedRandomSelection(accessories),
  });
  attributes.push({
    trait_type: "Emblem",
    value: weightedRandomSelection(emblems),
  });

  // Construct metadata
  const metadata = {
    name: `BUNIME NFT #${i}`,
    description: "A unique NFT from the BUNIMEVERSE.",
    // Replace with your image path or URI
    image: "ipfs://<your-image-cid>",
    attributes: [
        { trait_type: "Background", value: selectedBackground, rarity: selectedBackground.rarity },
        { trait_type: "Accessory", value: selectedAccessory, rarity: selectedAccessory.rarity },
        { trait_type: "Emblem", value: selectedEmblem, rarity: selectedEmblem.rarity },
      ],
  };

  // Save metadata to file
  fs.writeFileSync(`metadata/token_${i}.json`, JSON.stringify(metadata, null, 2));
}

// Function for weighted random selection
function weightedRandomSelection(items) {
  const totalRarity = items.reduce((sum, item) => sum + item.rarity, 0);
  const randomValue = Math.random() * totalRarity;
  let accumulatedRarity = 0;

  for (const item of items) {
    accumulatedRarity += item.rarity;
    if (randomValue <= accumulatedRarity) {
      return item.name;
    }
  }
}
