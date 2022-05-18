// SPDX-License-Identifier: MIT
pragma solidity 0.7.6;
pragma abicoder v2;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/math/SafeMath.sol";

contract NFT is ERC721, Ownable {
    using SafeMath for uint256;

    uint256 public immutable itemPrice;
    bool public isSaleActive;
	uint256 public tokensPurchased;
	uint256 public constant TOTAL_TOKENS_TO_MINT = 9999;
	uint256[] public goldToken;
	uint256[] public blueToken;
	uint256[] public redToken;

    constructor (string memory _tokenBaseUri) ERC721("RIDER", "RIDER") {
        _setBaseURI(_tokenBaseUri);
        itemPrice = 80000000000000000; // 0.08 ETH
        isSaleActive = true;
    }

    ////////////////////
    // Action methods //
    ////////////////////

	//purchase multiple tokens at once
	function purchaseToken(uint256 _howMany) public payable {
	    require(_howMany > 0, "Minimum 1 tokens need to be minted");
	    require(_howMany <= tokenRemainingToBeMinted(), "Tokens needs to be minted is greater than the token available");
        require(isSaleActive, "Sale is not active");
		require(_howMany <= 20, "max 20 tokens at once");
		require(itemPrice.mul(_howMany) == msg.value, "Insufficient ETH to mint");
		for (uint256 i = 0; i < _howMany; i++) {
			_mintToken(msg.sender);
		}
	}

    function _mintToken(address _to) private {
        tokensPurchased++;
        require(!_exists(tokensPurchased), "Mint: Token already exist.");
        uint256 _randomNo = random(1, 1000, uint256(uint160(address(msg.sender))) + 1);
        if(_randomNo >= 1 && _randomNo <= 10) {
            goldToken.push(tokensPurchased);
        } else if(_randomNo > 10 && _randomNo <= 330) {
            redToken.push(tokensPurchased);
        } else {
            blueToken.push(tokensPurchased);
        }
        _mint(_to, tokensPurchased);
    }

    function burn(uint256 _tokenId) public {
        require(_exists(_tokenId), "Burn: token does not exist.");
        require(ownerOf(_tokenId) == _msgSender(), "Burn: caller is not token owner.");
        _burn(_tokenId);
    }

    ///////////////////
    // Query methods //
    ///////////////////

    function exists(uint256 _tokenId) external view returns (bool) {
        return _exists(_tokenId);
    }
    
    function tokenRemainingToBeMinted() public view returns (uint256) {
        return TOTAL_TOKENS_TO_MINT.sub(tokensPurchased);
    }

    function isAllTokenMinted() external view returns (bool) {
        return tokensPurchased == TOTAL_TOKENS_TO_MINT;
    }

    function isApprovedOrOwner(address _spender, uint256 _tokenId) external view returns (bool) {
        return _isApprovedOrOwner(_spender, _tokenId);
    }

    //random number
	function random(
		uint256 from,
		uint256 to,
		uint256 salty
	) public view returns (uint256) {
		uint256 seed =
			uint256(
				keccak256(
					abi.encodePacked(
						block.timestamp +
							block.difficulty +
							((uint256(keccak256(abi.encodePacked(block.coinbase)))) / (block.timestamp)) +
							block.gaslimit +
							((uint256(keccak256(abi.encodePacked(msg.sender)))) / (block.timestamp)) +
							block.number +
							salty
					)
				)
			);
		return seed.mod(to - from) + from;
	}

    /////////////
    // Setters //
    /////////////

    function stopSale(bool) external onlyOwner {
        isSaleActive = false;
    }

    function startSale(bool) external onlyOwner {
        isSaleActive = true;
    }

    function setTokenURI(uint256 _tokenId, string memory _uri) external onlyOwner {
        _setTokenURI(_tokenId, _uri);
    }

    function setBaseURI(string memory _baseURI) external onlyOwner {
        _setBaseURI(_baseURI);
    }

    function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal virtual override(ERC721) {
        super._beforeTokenTransfer(_from, _to, _tokenId);
    }
}