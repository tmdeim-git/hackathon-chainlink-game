// SPDX-License-Identifier: Unlicense
// https://github.com/HQ20/contracts/blob/master/contracts/classifieds/Classifieds.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";
import "@thirdweb-dev/contracts/extension/Permissions.sol";

/**
 * @title NFTMarketplace
 * @notice Implements the classifieds board market. The market will be governed
 * by an ERC20 token as currency, and an ERC721 token that represents the
 * ownership of the items being traded. Only ads for selling items are
 * implemented. The item tokenization is responsibility of the ERC721 contract
 * which should encode any item details.
 */
contract NFTMarketplace is ContractMetadata, Permissions {
    event TradeStatusChange(uint256 ad, bytes32 status);
    
    // for metadata updates
    address public deployer;

    IERC20 public currencyToken;
    IERC721 public itemToken;

    struct Trade {
        address poster;
        uint256 item;
        uint256 price;
        bytes32 status; // Open, Executed, Cancelled
    }

    mapping(uint256 => Trade) public trades;
    mapping(uint256 => Trade) public activeTrades;

    uint256 public tradeCounter;
    uint256 public activeTradeCounter;

    constructor(address _currencyTokenAddress, address _itemTokenAddress) {
        currencyToken = IERC20(_currencyTokenAddress);
        itemToken = IERC721(_itemTokenAddress);
        tradeCounter = 0;
        activeTradeCounter = 0;
        deployer = msg.sender;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Returns the details for a trade.
     * @param _trade The id for the trade.
     */
    function getTrade(
        uint256 _trade
    ) public view virtual returns (address, uint256, uint256, bytes32) {
        Trade memory trade = trades[_trade];
        return (trade.poster, trade.item, trade.price, trade.status);
    }

    function removeTrade(uint256 _item) public {
        // Resetting the trade to its default value (i.e., a new Trade struct with default values)
        delete activeTrades[_item];
    }

    /**
    * @dev Returns the total trades.
    @return trades The total trades.
     */

    function getAll() public view returns (Trade[] memory) {
        Trade[] memory ret = new Trade[](tradeCounter);
        for (uint i = 0; i < tradeCounter; i++) {
            ret[i] = trades[i];
        }
        return ret;
    }

    function getTradesByOwner(
        address owner
    ) public view returns (Trade[] memory) {
        Trade[] memory ret = new Trade[](activeTradeCounter);
        for (uint i = 0; i < activeTradeCounter; i++) {
            if (owner == activeTrades[i].poster) {
                ret[i] = activeTrades[i];
            }
        }
        return ret;
    }
    /**
     * @dev Opens a new trade. Puts _item in escrow.
     * @param _item The id for the item to trade.
     * @param _price The amount of currency for which to trade the item.
     */
    function openTrade(uint256 _item, uint256 _price) public virtual {
        itemToken.transferFrom(msg.sender, address(this), _item);
        trades[tradeCounter] = Trade({
            poster: msg.sender,
            item: _item,
            price: _price,
            status: "Open"
        });

        activeTrades[_item] = trades[tradeCounter];
        tradeCounter += 1;
        if (activeTradeCounter <= _item) {
            activeTradeCounter = _item + 1;
        }
        emit TradeStatusChange(tradeCounter - 1, "Open");
    }

    /**
     * @dev Executes a trade. Must have approved this contract to transfer the
     * amount of currency specified to the poster. Transfers ownership of the
     * item to the filler.
     * @param _item The id of an existing trade
     */
    function executeTrade(uint256 _item) public virtual {
        Trade memory trade = activeTrades[_item];
        require(trade.status == "Open", "Trade is not Open.");
        currencyToken.transferFrom(msg.sender, trade.poster, trade.price);
        itemToken.transferFrom(address(this), msg.sender, trade.item);
        uint index = 0;
        for (uint i = 0; i < tradeCounter; i++) {
            if (trade.item == trades[i].item && trades[i].status == "Open") {
                index = i;
            }
        }
        trades[index].status = "Executed";
        emit TradeStatusChange(index, "Executed");
        removeTrade(trade.item);
    }

    /**
     * @dev Cancels a trade by the poster.
     * @param _item The trade to be cancelled.
     */
    function cancelTrade(uint256 _item) public virtual {
        Trade memory trade = activeTrades[_item];
        uint index = 0;
        for (uint i = 0; i < tradeCounter; i++) {
            if (trade.item == trades[i].item && trades[i].status == "Open") {
                index = i;
            }
        }
        require(
            msg.sender == trade.poster,
            "Trade can be cancelled only by poster."
        );
        require(trade.status == "Open", "Trade is not Open.");
        itemToken.transferFrom(address(this), trade.poster, trade.item);
        trades[index].status = "Cancelled";
        emit TradeStatusChange(index, "Cancelled");
        removeTrade(trade.item);
    }

    function setItemTokenAddress(address _itemTokenAddress) public onlyRole(DEFAULT_ADMIN_ROLE) {
        itemToken = IERC721(_itemTokenAddress);
    }

    /**
     * @notice Call this function to approve this contract to manage your ERC721 tokens.
     * @dev This must be called from the frontend by the token owner before a trade can be opened.
     * @param _operator The contract address to be approved.
     * @param _approved Boolean value for the approval status.
     */
    function setApprovalForAllNFT(address _operator, bool _approved) public onlyRole(DEFAULT_ADMIN_ROLE) {
        itemToken.setApprovalForAll(_operator, _approved);
    }

    /**
     * @notice Call this function to approve this contract to spend your ERC20 tokens.
     * @dev This must be called from the frontend by the token owner before executing a trade.
     * @param _spender The contract address to be approved.
     * @param _amount The amount of tokens to be approved.
     */
    function approveCurrencyToken(address _spender, uint256 _amount) public onlyRole(DEFAULT_ADMIN_ROLE) {
        currencyToken.approve(_spender, _amount);
    }

    function _canSetContractURI()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return msg.sender == deployer;
    }
}
