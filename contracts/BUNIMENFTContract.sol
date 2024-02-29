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
   uint256 public constant MAX_SUPPLY = 5000;
   uint256 public constant MAX_MINT_PER_WALLET = 20;
   uint256 public mintStartTime;
   uint256 public royaltyPercent = 4;
   string public baseURI;

  constructor() ERC721("BUNIME Genesis 1", "BUNINFT") {
    baseURI = "https://bafybeidap6dw3czfivt774osxytv4tcjzyfc72s3mpn5jl6b2t3acj7iue.ipfs.dweb.link/";
  }

   function setMintDate(uint256 _mintStartTime) external onlyOwner {
       mintStartTime = _mintStartTime;
   }

   function getMintStartTime() public view returns (uint256) {
    return mintStartTime;
   }

    event NewTokenMinted(uint256 indexed tokenId);
    
    function _safeMint() external {
    require(totalSupply() < MAX_SUPPLY, "Max supply reached");
    require(block.timestamp >= mintStartTime, "Mint not started yet");
    require(_mintedAmount(msg.sender) < MAX_MINT_PER_WALLET, "Max mint per wallet reached");

    _tokenIdCounter.increment();
    uint256 tokenId = _tokenIdCounter.current();
    _safeMint(msg.sender, tokenId);
    
    // Generate the _tokenURI within the _safeMint function
    string memory _tokenURI = string(abi.encodePacked(baseURI, "token_", Strings.toString(tokenId), ".json"));
    _setTokenURI(tokenId, _tokenURI);
    
    emit NewTokenMinted(tokenId);
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
    // Generate the _tokenURI within the tokenURI function
    string memory _tokenURI = string(abi.encodePacked(baseURI, "token_", Strings.toString(tokenId), ".json"));
    return _tokenURI;
    }

   function _mintedAmount(address account) private view returns (uint256) {
       return balanceOf(account);
   }
}
