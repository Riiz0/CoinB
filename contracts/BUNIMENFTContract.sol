// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract BUNIMENFTContract is ERC721, ERC721URIStorage, ERC721Enumerable, Ownable {
   using Counters for Counters.Counter;

   Counters.Counter private _tokenIdCounter;
   uint256 public constant MAX_SUPPLY = 10000;
   uint256 public constant MAX_MINT_PER_WALLET = 20;
   uint256 public mintStartTime;
   uint256 public royaltyPercent = 6; // Set desired royalty percentage (e.g., 6.5%)

   constructor() ERC721("BUNIME NFT Collection", "BUNINFT") {}

   function setMintDate(uint256 _mintStartTime) external onlyOwner {
       mintStartTime = _mintStartTime;
   }

   function getMintStartTime() public view returns (uint256) {
    return mintStartTime;
   }

   function _safeMint(string memory _tokenURI) external {
       require(totalSupply() < MAX_SUPPLY, "Max supply reached");
       require(block.timestamp >= mintStartTime, "Mint not started yet");
       require(_mintedAmount(msg.sender) < MAX_MINT_PER_WALLET, "Max mint per wallet reached");

       _tokenIdCounter.increment();
       uint256 tokenId = _tokenIdCounter.current();
       _safeMint(msg.sender, tokenId);
       _setTokenURI(tokenId, _tokenURI);
   }

   function royaltyInfo(uint256 _tokenId, uint256 _salePrice) external view returns (address receiver, uint256 royaltyAmount) {
       return (ownerOf(_tokenId), _salePrice * royaltyPercent / 100);
   }

   function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
       internal
       override(ERC721, ERC721Enumerable) // Override both contracts
   {
       super._beforeTokenTransfer(from, to, tokenId, batchSize); // Provide all arguments
   }

   function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
       super._burn(tokenId);
   }

   function supportsInterface(bytes4 interfaceId)
       public
       view
       override(ERC721, ERC721Enumerable, ERC721URIStorage)
       returns (bool)
   {
       return super.supportsInterface(interfaceId);
   }

   function tokenURI(uint256 tokenId)
       public
       view
       override(ERC721, ERC721URIStorage)
       returns (string memory)
   {
       return super.tokenURI(tokenId);
   }

   function _mintedAmount(address account) private view returns (uint256) {
       return balanceOf(account);
   }
}
