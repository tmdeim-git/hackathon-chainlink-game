import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the ContractURIUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { contractURIUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  contractURIUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function contractURIUpdatedEvent() {
  return prepareEvent({
    signature: "event ContractURIUpdated(string prevURI, string newURI)",
  });
};
  

/**
 * Represents the filters for the "ExtensionAdded" event.
 */
export type ExtensionAddedEventFilters = Partial<{
  name: AbiParameterToPrimitiveType<{"type":"string","name":"name","indexed":true}>
implementation: AbiParameterToPrimitiveType<{"type":"address","name":"implementation","indexed":true}>
}>;

/**
 * Creates an event object for the ExtensionAdded event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { extensionAddedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  extensionAddedEvent({
 *  name: ...,
 *  implementation: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function extensionAddedEvent(filters: ExtensionAddedEventFilters = {}) {
  return prepareEvent({
    signature: "event ExtensionAdded(string indexed name, address indexed implementation, ((string name, string metadataURI, address implementation) metadata, (bytes4 functionSelector, string functionSignature)[] functions) extension)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ExtensionRemoved" event.
 */
export type ExtensionRemovedEventFilters = Partial<{
  name: AbiParameterToPrimitiveType<{"type":"string","name":"name","indexed":true}>
}>;

/**
 * Creates an event object for the ExtensionRemoved event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { extensionRemovedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  extensionRemovedEvent({
 *  name: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function extensionRemovedEvent(filters: ExtensionRemovedEventFilters = {}) {
  return prepareEvent({
    signature: "event ExtensionRemoved(string indexed name, ((string name, string metadataURI, address implementation) metadata, (bytes4 functionSelector, string functionSignature)[] functions) extension)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ExtensionReplaced" event.
 */
export type ExtensionReplacedEventFilters = Partial<{
  name: AbiParameterToPrimitiveType<{"type":"string","name":"name","indexed":true}>
implementation: AbiParameterToPrimitiveType<{"type":"address","name":"implementation","indexed":true}>
}>;

/**
 * Creates an event object for the ExtensionReplaced event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { extensionReplacedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  extensionReplacedEvent({
 *  name: ...,
 *  implementation: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function extensionReplacedEvent(filters: ExtensionReplacedEventFilters = {}) {
  return prepareEvent({
    signature: "event ExtensionReplaced(string indexed name, address indexed implementation, ((string name, string metadataURI, address implementation) metadata, (bytes4 functionSelector, string functionSignature)[] functions) extension)",
    filters,
  });
};
  



/**
 * Creates an event object for the FlatPlatformFeeUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { flatPlatformFeeUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  flatPlatformFeeUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function flatPlatformFeeUpdatedEvent() {
  return prepareEvent({
    signature: "event FlatPlatformFeeUpdated(address platformFeeRecipient, uint256 flatFee)",
  });
};
  

/**
 * Represents the filters for the "FunctionDisabled" event.
 */
export type FunctionDisabledEventFilters = Partial<{
  name: AbiParameterToPrimitiveType<{"type":"string","name":"name","indexed":true}>
functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector","indexed":true}>
}>;

/**
 * Creates an event object for the FunctionDisabled event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { functionDisabledEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  functionDisabledEvent({
 *  name: ...,
 *  functionSelector: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function functionDisabledEvent(filters: FunctionDisabledEventFilters = {}) {
  return prepareEvent({
    signature: "event FunctionDisabled(string indexed name, bytes4 indexed functionSelector, (string name, string metadataURI, address implementation) extMetadata)",
    filters,
  });
};
  

/**
 * Represents the filters for the "FunctionEnabled" event.
 */
export type FunctionEnabledEventFilters = Partial<{
  name: AbiParameterToPrimitiveType<{"type":"string","name":"name","indexed":true}>
functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector","indexed":true}>
}>;

/**
 * Creates an event object for the FunctionEnabled event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { functionEnabledEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  functionEnabledEvent({
 *  name: ...,
 *  functionSelector: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function functionEnabledEvent(filters: FunctionEnabledEventFilters = {}) {
  return prepareEvent({
    signature: "event FunctionEnabled(string indexed name, bytes4 indexed functionSelector, (bytes4 functionSelector, string functionSignature) extFunction, (string name, string metadataURI, address implementation) extMetadata)",
    filters,
  });
};
  



/**
 * Creates an event object for the Initialized event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { initializedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  initializedEvent()
 * ],
 * });
 * ```
 */ 
export function initializedEvent() {
  return prepareEvent({
    signature: "event Initialized(uint8 version)",
  });
};
  

/**
 * Represents the filters for the "PlatformFeeInfoUpdated" event.
 */
export type PlatformFeeInfoUpdatedEventFilters = Partial<{
  platformFeeRecipient: AbiParameterToPrimitiveType<{"type":"address","name":"platformFeeRecipient","indexed":true}>
}>;

/**
 * Creates an event object for the PlatformFeeInfoUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { platformFeeInfoUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  platformFeeInfoUpdatedEvent({
 *  platformFeeRecipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function platformFeeInfoUpdatedEvent(filters: PlatformFeeInfoUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PlatformFeeInfoUpdated(address indexed platformFeeRecipient, uint256 platformFeeBps)",
    filters,
  });
};
  



/**
 * Creates an event object for the PlatformFeeTypeUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { platformFeeTypeUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  platformFeeTypeUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function platformFeeTypeUpdatedEvent() {
  return prepareEvent({
    signature: "event PlatformFeeTypeUpdated(uint8 feeType)",
  });
};
  

/**
 * Represents the filters for the "RoleAdminChanged" event.
 */
export type RoleAdminChangedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","indexed":true}>
previousAdminRole: AbiParameterToPrimitiveType<{"type":"bytes32","name":"previousAdminRole","indexed":true}>
newAdminRole: AbiParameterToPrimitiveType<{"type":"bytes32","name":"newAdminRole","indexed":true}>
}>;

/**
 * Creates an event object for the RoleAdminChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleAdminChangedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleAdminChangedEvent({
 *  role: ...,
 *  previousAdminRole: ...,
 *  newAdminRole: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function roleAdminChangedEvent(filters: RoleAdminChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleGranted" event.
 */
export type RoleGrantedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","indexed":true}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","indexed":true}>
sender: AbiParameterToPrimitiveType<{"type":"address","name":"sender","indexed":true}>
}>;

/**
 * Creates an event object for the RoleGranted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleGrantedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleGrantedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function roleGrantedEvent(filters: RoleGrantedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleRevoked" event.
 */
export type RoleRevokedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","indexed":true}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","indexed":true}>
sender: AbiParameterToPrimitiveType<{"type":"address","name":"sender","indexed":true}>
}>;

/**
 * Creates an event object for the RoleRevoked event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleRevokedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleRevokedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function roleRevokedEvent(filters: RoleRevokedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoyaltyEngineUpdated" event.
 */
export type RoyaltyEngineUpdatedEventFilters = Partial<{
  previousAddress: AbiParameterToPrimitiveType<{"type":"address","name":"previousAddress","indexed":true}>
newAddress: AbiParameterToPrimitiveType<{"type":"address","name":"newAddress","indexed":true}>
}>;

/**
 * Creates an event object for the RoyaltyEngineUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { royaltyEngineUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  royaltyEngineUpdatedEvent({
 *  previousAddress: ...,
 *  newAddress: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function royaltyEngineUpdatedEvent(filters: RoyaltyEngineUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoyaltyEngineUpdated(address indexed previousAddress, address indexed newAddress)",
    filters,
  });
};
  

/**
 * Represents the filters for the "BuyerApprovedForListing" event.
 */
export type BuyerApprovedForListingEventFilters = Partial<{
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"listingId","indexed":true}>
buyer: AbiParameterToPrimitiveType<{"type":"address","name":"buyer","indexed":true}>
}>;

/**
 * Creates an event object for the BuyerApprovedForListing event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { buyerApprovedForListingEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  buyerApprovedForListingEvent({
 *  listingId: ...,
 *  buyer: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function buyerApprovedForListingEvent(filters: BuyerApprovedForListingEventFilters = {}) {
  return prepareEvent({
    signature: "event BuyerApprovedForListing(uint256 indexed listingId, address indexed buyer, bool approved)",
    filters,
  });
};
  

/**
 * Represents the filters for the "CancelledListing" event.
 */
export type CancelledListingEventFilters = Partial<{
  listingCreator: AbiParameterToPrimitiveType<{"type":"address","name":"listingCreator","indexed":true}>
listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"listingId","indexed":true}>
}>;

/**
 * Creates an event object for the CancelledListing event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { cancelledListingEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  cancelledListingEvent({
 *  listingCreator: ...,
 *  listingId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function cancelledListingEvent(filters: CancelledListingEventFilters = {}) {
  return prepareEvent({
    signature: "event CancelledListing(address indexed listingCreator, uint256 indexed listingId)",
    filters,
  });
};
  

/**
 * Represents the filters for the "CurrencyApprovedForListing" event.
 */
export type CurrencyApprovedForListingEventFilters = Partial<{
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"listingId","indexed":true}>
currency: AbiParameterToPrimitiveType<{"type":"address","name":"currency","indexed":true}>
}>;

/**
 * Creates an event object for the CurrencyApprovedForListing event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { currencyApprovedForListingEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  currencyApprovedForListingEvent({
 *  listingId: ...,
 *  currency: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function currencyApprovedForListingEvent(filters: CurrencyApprovedForListingEventFilters = {}) {
  return prepareEvent({
    signature: "event CurrencyApprovedForListing(uint256 indexed listingId, address indexed currency, uint256 pricePerToken)",
    filters,
  });
};
  

/**
 * Represents the filters for the "NewListing" event.
 */
export type NewListingEventFilters = Partial<{
  listingCreator: AbiParameterToPrimitiveType<{"type":"address","name":"listingCreator","indexed":true}>
listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"listingId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the NewListing event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { newListingEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  newListingEvent({
 *  listingCreator: ...,
 *  listingId: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function newListingEvent(filters: NewListingEventFilters = {}) {
  return prepareEvent({
    signature: "event NewListing(address indexed listingCreator, uint256 indexed listingId, address indexed assetContract, (uint256 listingId, uint256 tokenId, uint256 quantity, uint256 pricePerToken, uint128 startTimestamp, uint128 endTimestamp, address listingCreator, address assetContract, address currency, uint8 tokenType, uint8 status, bool reserved) listing)",
    filters,
  });
};
  

/**
 * Represents the filters for the "NewSale" event.
 */
export type NewSaleEventFilters = Partial<{
  listingCreator: AbiParameterToPrimitiveType<{"type":"address","name":"listingCreator","indexed":true}>
listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"listingId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the NewSale event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { newSaleEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  newSaleEvent({
 *  listingCreator: ...,
 *  listingId: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function newSaleEvent(filters: NewSaleEventFilters = {}) {
  return prepareEvent({
    signature: "event NewSale(address indexed listingCreator, uint256 indexed listingId, address indexed assetContract, uint256 tokenId, address buyer, uint256 quantityBought, uint256 totalPricePaid)",
    filters,
  });
};
  

/**
 * Represents the filters for the "UpdatedListing" event.
 */
export type UpdatedListingEventFilters = Partial<{
  listingCreator: AbiParameterToPrimitiveType<{"type":"address","name":"listingCreator","indexed":true}>
listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"listingId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the UpdatedListing event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { updatedListingEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  updatedListingEvent({
 *  listingCreator: ...,
 *  listingId: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function updatedListingEvent(filters: UpdatedListingEventFilters = {}) {
  return prepareEvent({
    signature: "event UpdatedListing(address indexed listingCreator, uint256 indexed listingId, address indexed assetContract, (uint256 listingId, uint256 tokenId, uint256 quantity, uint256 pricePerToken, uint128 startTimestamp, uint128 endTimestamp, address listingCreator, address assetContract, address currency, uint8 tokenType, uint8 status, bool reserved) listing)",
    filters,
  });
};
  

/**
 * Represents the filters for the "AuctionClosed" event.
 */
export type AuctionClosedEventFilters = Partial<{
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"auctionId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
closer: AbiParameterToPrimitiveType<{"type":"address","name":"closer","indexed":true}>
}>;

/**
 * Creates an event object for the AuctionClosed event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { auctionClosedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  auctionClosedEvent({
 *  auctionId: ...,
 *  assetContract: ...,
 *  closer: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function auctionClosedEvent(filters: AuctionClosedEventFilters = {}) {
  return prepareEvent({
    signature: "event AuctionClosed(uint256 indexed auctionId, address indexed assetContract, address indexed closer, uint256 tokenId, address auctionCreator, address winningBidder)",
    filters,
  });
};
  

/**
 * Represents the filters for the "CancelledAuction" event.
 */
export type CancelledAuctionEventFilters = Partial<{
  auctionCreator: AbiParameterToPrimitiveType<{"type":"address","name":"auctionCreator","indexed":true}>
auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"auctionId","indexed":true}>
}>;

/**
 * Creates an event object for the CancelledAuction event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { cancelledAuctionEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  cancelledAuctionEvent({
 *  auctionCreator: ...,
 *  auctionId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function cancelledAuctionEvent(filters: CancelledAuctionEventFilters = {}) {
  return prepareEvent({
    signature: "event CancelledAuction(address indexed auctionCreator, uint256 indexed auctionId)",
    filters,
  });
};
  

/**
 * Represents the filters for the "NewAuction" event.
 */
export type NewAuctionEventFilters = Partial<{
  auctionCreator: AbiParameterToPrimitiveType<{"type":"address","name":"auctionCreator","indexed":true}>
auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"auctionId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the NewAuction event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { newAuctionEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  newAuctionEvent({
 *  auctionCreator: ...,
 *  auctionId: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function newAuctionEvent(filters: NewAuctionEventFilters = {}) {
  return prepareEvent({
    signature: "event NewAuction(address indexed auctionCreator, uint256 indexed auctionId, address indexed assetContract, (uint256 auctionId, uint256 tokenId, uint256 quantity, uint256 minimumBidAmount, uint256 buyoutBidAmount, uint64 timeBufferInSeconds, uint64 bidBufferBps, uint64 startTimestamp, uint64 endTimestamp, address auctionCreator, address assetContract, address currency, uint8 tokenType, uint8 status) auction)",
    filters,
  });
};
  

/**
 * Represents the filters for the "NewBid" event.
 */
export type NewBidEventFilters = Partial<{
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"auctionId","indexed":true}>
bidder: AbiParameterToPrimitiveType<{"type":"address","name":"bidder","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the NewBid event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { newBidEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  newBidEvent({
 *  auctionId: ...,
 *  bidder: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function newBidEvent(filters: NewBidEventFilters = {}) {
  return prepareEvent({
    signature: "event NewBid(uint256 indexed auctionId, address indexed bidder, address indexed assetContract, uint256 bidAmount, (uint256 auctionId, uint256 tokenId, uint256 quantity, uint256 minimumBidAmount, uint256 buyoutBidAmount, uint64 timeBufferInSeconds, uint64 bidBufferBps, uint64 startTimestamp, uint64 endTimestamp, address auctionCreator, address assetContract, address currency, uint8 tokenType, uint8 status) auction)",
    filters,
  });
};
  

/**
 * Represents the filters for the "AcceptedOffer" event.
 */
export type AcceptedOfferEventFilters = Partial<{
  offeror: AbiParameterToPrimitiveType<{"type":"address","name":"offeror","indexed":true}>
offerId: AbiParameterToPrimitiveType<{"type":"uint256","name":"offerId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the AcceptedOffer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { acceptedOfferEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  acceptedOfferEvent({
 *  offeror: ...,
 *  offerId: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function acceptedOfferEvent(filters: AcceptedOfferEventFilters = {}) {
  return prepareEvent({
    signature: "event AcceptedOffer(address indexed offeror, uint256 indexed offerId, address indexed assetContract, uint256 tokenId, address seller, uint256 quantityBought, uint256 totalPricePaid)",
    filters,
  });
};
  

/**
 * Represents the filters for the "CancelledOffer" event.
 */
export type CancelledOfferEventFilters = Partial<{
  offeror: AbiParameterToPrimitiveType<{"type":"address","name":"offeror","indexed":true}>
offerId: AbiParameterToPrimitiveType<{"type":"uint256","name":"offerId","indexed":true}>
}>;

/**
 * Creates an event object for the CancelledOffer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { cancelledOfferEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  cancelledOfferEvent({
 *  offeror: ...,
 *  offerId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function cancelledOfferEvent(filters: CancelledOfferEventFilters = {}) {
  return prepareEvent({
    signature: "event CancelledOffer(address indexed offeror, uint256 indexed offerId)",
    filters,
  });
};
  

/**
 * Represents the filters for the "NewOffer" event.
 */
export type NewOfferEventFilters = Partial<{
  offeror: AbiParameterToPrimitiveType<{"type":"address","name":"offeror","indexed":true}>
offerId: AbiParameterToPrimitiveType<{"type":"uint256","name":"offerId","indexed":true}>
assetContract: AbiParameterToPrimitiveType<{"type":"address","name":"assetContract","indexed":true}>
}>;

/**
 * Creates an event object for the NewOffer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { newOfferEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  newOfferEvent({
 *  offeror: ...,
 *  offerId: ...,
 *  assetContract: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function newOfferEvent(filters: NewOfferEventFilters = {}) {
  return prepareEvent({
    signature: "event NewOffer(address indexed offeror, uint256 indexed offerId, address indexed assetContract, (uint256 offerId, uint256 tokenId, uint256 quantity, uint256 totalPrice, uint256 expirationTimestamp, address offeror, address assetContract, address currency, uint8 tokenType, uint8 status) offer)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "DEFAULT_ADMIN_ROLE" function on the contract.
 * @param options - The options for the DEFAULT_ADMIN_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DEFAULT_ADMIN_ROLE } from "TODO";
 * 
 * const result = await DEFAULT_ADMIN_ROLE();
 * 
 * ```
 */
export async function DEFAULT_ADMIN_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa217fddf",
  [],
  [
    {
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractType" function on the contract.
 * @param options - The options for the contractType function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractType } from "TODO";
 * 
 * const result = await contractType();
 * 
 * ```
 */
export async function contractType(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xcb2ef6f7",
  [],
  [
    {
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractURI" function on the contract.
 * @param options - The options for the contractURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractURI } from "TODO";
 * 
 * const result = await contractURI();
 * 
 * ```
 */
export async function contractURI(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe8a3d485",
  [],
  [
    {
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "contractVersion" function on the contract.
 * @param options - The options for the contractVersion function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractVersion } from "TODO";
 * 
 * const result = await contractVersion();
 * 
 * ```
 */
export async function contractVersion(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa0a8e460",
  [],
  [
    {
      "type": "uint8"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "defaultExtensions" function on the contract.
 * @param options - The options for the defaultExtensions function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { defaultExtensions } from "TODO";
 * 
 * const result = await defaultExtensions();
 * 
 * ```
 */
export async function defaultExtensions(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x463c4864",
  [],
  [
    {
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "getAllExtensions" function on the contract.
 * @param options - The options for the getAllExtensions function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllExtensions } from "TODO";
 * 
 * const result = await getAllExtensions();
 * 
 * ```
 */
export async function getAllExtensions(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4a00cc48",
  [],
  [
    {
      "type": "tuple[]",
      "name": "allExtensions",
      "components": [
        {
          "type": "tuple",
          "name": "metadata",
          "components": [
            {
              "type": "string",
              "name": "name"
            },
            {
              "type": "string",
              "name": "metadataURI"
            },
            {
              "type": "address",
              "name": "implementation"
            }
          ]
        },
        {
          "type": "tuple[]",
          "name": "functions",
          "components": [
            {
              "type": "bytes4",
              "name": "functionSelector"
            },
            {
              "type": "string",
              "name": "functionSignature"
            }
          ]
        }
      ]
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getExtension" function.
 */
export type GetExtensionParams = {
  extensionName: AbiParameterToPrimitiveType<{"type":"string","name":"extensionName"}>
};

/**
 * Calls the "getExtension" function on the contract.
 * @param options - The options for the getExtension function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getExtension } from "TODO";
 * 
 * const result = await getExtension({
 *  extensionName: ...,
 * });
 * 
 * ```
 */
export async function getExtension(
  options: BaseTransactionOptions<GetExtensionParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc22707ee",
  [
    {
      "type": "string",
      "name": "extensionName"
    }
  ],
  [
    {
      "type": "tuple",
      "components": [
        {
          "type": "tuple",
          "name": "metadata",
          "components": [
            {
              "type": "string",
              "name": "name"
            },
            {
              "type": "string",
              "name": "metadataURI"
            },
            {
              "type": "address",
              "name": "implementation"
            }
          ]
        },
        {
          "type": "tuple[]",
          "name": "functions",
          "components": [
            {
              "type": "bytes4",
              "name": "functionSelector"
            },
            {
              "type": "string",
              "name": "functionSignature"
            }
          ]
        }
      ]
    }
  ]
],
    params: [options.extensionName]
  });
};




/**
 * Calls the "getFlatPlatformFeeInfo" function on the contract.
 * @param options - The options for the getFlatPlatformFeeInfo function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getFlatPlatformFeeInfo } from "TODO";
 * 
 * const result = await getFlatPlatformFeeInfo();
 * 
 * ```
 */
export async function getFlatPlatformFeeInfo(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe57553da",
  [],
  [
    {
      "type": "address"
    },
    {
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getImplementationForFunction" function.
 */
export type GetImplementationForFunctionParams = {
  functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"_functionSelector"}>
};

/**
 * Calls the "getImplementationForFunction" function on the contract.
 * @param options - The options for the getImplementationForFunction function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getImplementationForFunction } from "TODO";
 * 
 * const result = await getImplementationForFunction({
 *  functionSelector: ...,
 * });
 * 
 * ```
 */
export async function getImplementationForFunction(
  options: BaseTransactionOptions<GetImplementationForFunctionParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xce0b6013",
  [
    {
      "type": "bytes4",
      "name": "_functionSelector"
    }
  ],
  [
    {
      "type": "address"
    }
  ]
],
    params: [options.functionSelector]
  });
};


/**
 * Represents the parameters for the "getMetadataForFunction" function.
 */
export type GetMetadataForFunctionParams = {
  functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector"}>
};

/**
 * Calls the "getMetadataForFunction" function on the contract.
 * @param options - The options for the getMetadataForFunction function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getMetadataForFunction } from "TODO";
 * 
 * const result = await getMetadataForFunction({
 *  functionSelector: ...,
 * });
 * 
 * ```
 */
export async function getMetadataForFunction(
  options: BaseTransactionOptions<GetMetadataForFunctionParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa0dbaefd",
  [
    {
      "type": "bytes4",
      "name": "functionSelector"
    }
  ],
  [
    {
      "type": "tuple",
      "components": [
        {
          "type": "string",
          "name": "name"
        },
        {
          "type": "string",
          "name": "metadataURI"
        },
        {
          "type": "address",
          "name": "implementation"
        }
      ]
    }
  ]
],
    params: [options.functionSelector]
  });
};




/**
 * Calls the "getPlatformFeeInfo" function on the contract.
 * @param options - The options for the getPlatformFeeInfo function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPlatformFeeInfo } from "TODO";
 * 
 * const result = await getPlatformFeeInfo();
 * 
 * ```
 */
export async function getPlatformFeeInfo(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd45573f6",
  [],
  [
    {
      "type": "address"
    },
    {
      "type": "uint16"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "getPlatformFeeType" function on the contract.
 * @param options - The options for the getPlatformFeeType function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPlatformFeeType } from "TODO";
 * 
 * const result = await getPlatformFeeType();
 * 
 * ```
 */
export async function getPlatformFeeType(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf28083c3",
  [],
  [
    {
      "type": "uint8"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getRoleAdmin" function.
 */
export type GetRoleAdminParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
};

/**
 * Calls the "getRoleAdmin" function on the contract.
 * @param options - The options for the getRoleAdmin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleAdmin } from "TODO";
 * 
 * const result = await getRoleAdmin({
 *  role: ...,
 * });
 * 
 * ```
 */
export async function getRoleAdmin(
  options: BaseTransactionOptions<GetRoleAdminParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x248a9ca3",
  [
    {
      "type": "bytes32",
      "name": "role"
    }
  ],
  [
    {
      "type": "bytes32"
    }
  ]
],
    params: [options.role]
  });
};


/**
 * Represents the parameters for the "getRoleMember" function.
 */
export type GetRoleMemberParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
index: AbiParameterToPrimitiveType<{"type":"uint256","name":"index"}>
};

/**
 * Calls the "getRoleMember" function on the contract.
 * @param options - The options for the getRoleMember function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleMember } from "TODO";
 * 
 * const result = await getRoleMember({
 *  role: ...,
 *  index: ...,
 * });
 * 
 * ```
 */
export async function getRoleMember(
  options: BaseTransactionOptions<GetRoleMemberParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9010d07c",
  [
    {
      "type": "bytes32",
      "name": "role"
    },
    {
      "type": "uint256",
      "name": "index"
    }
  ],
  [
    {
      "type": "address",
      "name": "member"
    }
  ]
],
    params: [options.role, options.index]
  });
};


/**
 * Represents the parameters for the "getRoleMemberCount" function.
 */
export type GetRoleMemberCountParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
};

/**
 * Calls the "getRoleMemberCount" function on the contract.
 * @param options - The options for the getRoleMemberCount function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleMemberCount } from "TODO";
 * 
 * const result = await getRoleMemberCount({
 *  role: ...,
 * });
 * 
 * ```
 */
export async function getRoleMemberCount(
  options: BaseTransactionOptions<GetRoleMemberCountParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xca15c873",
  [
    {
      "type": "bytes32",
      "name": "role"
    }
  ],
  [
    {
      "type": "uint256",
      "name": "count"
    }
  ]
],
    params: [options.role]
  });
};




/**
 * Calls the "getRoyaltyEngineAddress" function on the contract.
 * @param options - The options for the getRoyaltyEngineAddress function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoyaltyEngineAddress } from "TODO";
 * 
 * const result = await getRoyaltyEngineAddress();
 * 
 * ```
 */
export async function getRoyaltyEngineAddress(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x5a9ad231",
  [],
  [
    {
      "type": "address",
      "name": "royaltyEngineAddress"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "hasRole" function.
 */
export type HasRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account"}>
};

/**
 * Calls the "hasRole" function on the contract.
 * @param options - The options for the hasRole function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { hasRole } from "TODO";
 * 
 * const result = await hasRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * ```
 */
export async function hasRole(
  options: BaseTransactionOptions<HasRoleParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x91d14854",
  [
    {
      "type": "bytes32",
      "name": "role"
    },
    {
      "type": "address",
      "name": "account"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "hasRoleWithSwitch" function.
 */
export type HasRoleWithSwitchParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account"}>
};

/**
 * Calls the "hasRoleWithSwitch" function on the contract.
 * @param options - The options for the hasRoleWithSwitch function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { hasRoleWithSwitch } from "TODO";
 * 
 * const result = await hasRoleWithSwitch({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * ```
 */
export async function hasRoleWithSwitch(
  options: BaseTransactionOptions<HasRoleWithSwitchParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa32fa5b3",
  [
    {
      "type": "bytes32",
      "name": "role"
    },
    {
      "type": "address",
      "name": "account"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "isTrustedForwarder" function.
 */
export type IsTrustedForwarderParams = {
  forwarder: AbiParameterToPrimitiveType<{"type":"address","name":"forwarder"}>
};

/**
 * Calls the "isTrustedForwarder" function on the contract.
 * @param options - The options for the isTrustedForwarder function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isTrustedForwarder } from "TODO";
 * 
 * const result = await isTrustedForwarder({
 *  forwarder: ...,
 * });
 * 
 * ```
 */
export async function isTrustedForwarder(
  options: BaseTransactionOptions<IsTrustedForwarderParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x572b6c05",
  [
    {
      "type": "address",
      "name": "forwarder"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.forwarder]
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"type":"bytes4","name":"interfaceId"}>
};

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 * 
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 * 
 * ```
 */
export async function supportsInterface(
  options: BaseTransactionOptions<SupportsInterfaceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x01ffc9a7",
  [
    {
      "type": "bytes4",
      "name": "interfaceId"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
};




/**
 * Calls the "_msgData" function on the contract.
 * @param options - The options for the _msgData function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { _msgData } from "TODO";
 * 
 * const result = await _msgData();
 * 
 * ```
 */
export async function _msgData(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8b49d47e",
  [],
  [
    {
      "type": "bytes"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "_msgSender" function on the contract.
 * @param options - The options for the _msgSender function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { _msgSender } from "TODO";
 * 
 * const result = await _msgSender();
 * 
 * ```
 */
export async function _msgSender(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x119df25f",
  [],
  [
    {
      "type": "address",
      "name": "sender"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "currencyPriceForListing" function.
 */
export type CurrencyPriceForListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
currency: AbiParameterToPrimitiveType<{"type":"address","name":"_currency"}>
};

/**
 * Calls the "currencyPriceForListing" function on the contract.
 * @param options - The options for the currencyPriceForListing function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { currencyPriceForListing } from "TODO";
 * 
 * const result = await currencyPriceForListing({
 *  listingId: ...,
 *  currency: ...,
 * });
 * 
 * ```
 */
export async function currencyPriceForListing(
  options: BaseTransactionOptions<CurrencyPriceForListingParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xfb14079d",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "address",
      "name": "_currency"
    }
  ],
  [
    {
      "type": "uint256"
    }
  ]
],
    params: [options.listingId, options.currency]
  });
};


/**
 * Represents the parameters for the "getAllListings" function.
 */
export type GetAllListingsParams = {
  startId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_startId"}>
endId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_endId"}>
};

/**
 * Calls the "getAllListings" function on the contract.
 * @param options - The options for the getAllListings function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllListings } from "TODO";
 * 
 * const result = await getAllListings({
 *  startId: ...,
 *  endId: ...,
 * });
 * 
 * ```
 */
export async function getAllListings(
  options: BaseTransactionOptions<GetAllListingsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc5275fb0",
  [
    {
      "type": "uint256",
      "name": "_startId"
    },
    {
      "type": "uint256",
      "name": "_endId"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "_allListings",
      "components": [
        {
          "type": "uint256",
          "name": "listingId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "pricePerToken"
        },
        {
          "type": "uint128",
          "name": "startTimestamp"
        },
        {
          "type": "uint128",
          "name": "endTimestamp"
        },
        {
          "type": "address",
          "name": "listingCreator"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        },
        {
          "type": "bool",
          "name": "reserved"
        }
      ]
    }
  ]
],
    params: [options.startId, options.endId]
  });
};


/**
 * Represents the parameters for the "getAllValidListings" function.
 */
export type GetAllValidListingsParams = {
  startId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_startId"}>
endId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_endId"}>
};

/**
 * Calls the "getAllValidListings" function on the contract.
 * @param options - The options for the getAllValidListings function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllValidListings } from "TODO";
 * 
 * const result = await getAllValidListings({
 *  startId: ...,
 *  endId: ...,
 * });
 * 
 * ```
 */
export async function getAllValidListings(
  options: BaseTransactionOptions<GetAllValidListingsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x31654b4d",
  [
    {
      "type": "uint256",
      "name": "_startId"
    },
    {
      "type": "uint256",
      "name": "_endId"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "_validListings",
      "components": [
        {
          "type": "uint256",
          "name": "listingId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "pricePerToken"
        },
        {
          "type": "uint128",
          "name": "startTimestamp"
        },
        {
          "type": "uint128",
          "name": "endTimestamp"
        },
        {
          "type": "address",
          "name": "listingCreator"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        },
        {
          "type": "bool",
          "name": "reserved"
        }
      ]
    }
  ]
],
    params: [options.startId, options.endId]
  });
};


/**
 * Represents the parameters for the "getListing" function.
 */
export type GetListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
};

/**
 * Calls the "getListing" function on the contract.
 * @param options - The options for the getListing function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getListing } from "TODO";
 * 
 * const result = await getListing({
 *  listingId: ...,
 * });
 * 
 * ```
 */
export async function getListing(
  options: BaseTransactionOptions<GetListingParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x107a274a",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    }
  ],
  [
    {
      "type": "tuple",
      "name": "listing",
      "components": [
        {
          "type": "uint256",
          "name": "listingId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "pricePerToken"
        },
        {
          "type": "uint128",
          "name": "startTimestamp"
        },
        {
          "type": "uint128",
          "name": "endTimestamp"
        },
        {
          "type": "address",
          "name": "listingCreator"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        },
        {
          "type": "bool",
          "name": "reserved"
        }
      ]
    }
  ]
],
    params: [options.listingId]
  });
};


/**
 * Represents the parameters for the "isBuyerApprovedForListing" function.
 */
export type IsBuyerApprovedForListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
buyer: AbiParameterToPrimitiveType<{"type":"address","name":"_buyer"}>
};

/**
 * Calls the "isBuyerApprovedForListing" function on the contract.
 * @param options - The options for the isBuyerApprovedForListing function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isBuyerApprovedForListing } from "TODO";
 * 
 * const result = await isBuyerApprovedForListing({
 *  listingId: ...,
 *  buyer: ...,
 * });
 * 
 * ```
 */
export async function isBuyerApprovedForListing(
  options: BaseTransactionOptions<IsBuyerApprovedForListingParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9cfbe2a6",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "address",
      "name": "_buyer"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.listingId, options.buyer]
  });
};


/**
 * Represents the parameters for the "isCurrencyApprovedForListing" function.
 */
export type IsCurrencyApprovedForListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
currency: AbiParameterToPrimitiveType<{"type":"address","name":"_currency"}>
};

/**
 * Calls the "isCurrencyApprovedForListing" function on the contract.
 * @param options - The options for the isCurrencyApprovedForListing function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isCurrencyApprovedForListing } from "TODO";
 * 
 * const result = await isCurrencyApprovedForListing({
 *  listingId: ...,
 *  currency: ...,
 * });
 * 
 * ```
 */
export async function isCurrencyApprovedForListing(
  options: BaseTransactionOptions<IsCurrencyApprovedForListingParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa8519047",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "address",
      "name": "_currency"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.listingId, options.currency]
  });
};




/**
 * Calls the "totalListings" function on the contract.
 * @param options - The options for the totalListings function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalListings } from "TODO";
 * 
 * const result = await totalListings();
 * 
 * ```
 */
export async function totalListings(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc78b616c",
  [],
  [
    {
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getAllAuctions" function.
 */
export type GetAllAuctionsParams = {
  startId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_startId"}>
endId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_endId"}>
};

/**
 * Calls the "getAllAuctions" function on the contract.
 * @param options - The options for the getAllAuctions function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllAuctions } from "TODO";
 * 
 * const result = await getAllAuctions({
 *  startId: ...,
 *  endId: ...,
 * });
 * 
 * ```
 */
export async function getAllAuctions(
  options: BaseTransactionOptions<GetAllAuctionsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc291537c",
  [
    {
      "type": "uint256",
      "name": "_startId"
    },
    {
      "type": "uint256",
      "name": "_endId"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "_allAuctions",
      "components": [
        {
          "type": "uint256",
          "name": "auctionId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "minimumBidAmount"
        },
        {
          "type": "uint256",
          "name": "buyoutBidAmount"
        },
        {
          "type": "uint64",
          "name": "timeBufferInSeconds"
        },
        {
          "type": "uint64",
          "name": "bidBufferBps"
        },
        {
          "type": "uint64",
          "name": "startTimestamp"
        },
        {
          "type": "uint64",
          "name": "endTimestamp"
        },
        {
          "type": "address",
          "name": "auctionCreator"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        }
      ]
    }
  ]
],
    params: [options.startId, options.endId]
  });
};


/**
 * Represents the parameters for the "getAllValidAuctions" function.
 */
export type GetAllValidAuctionsParams = {
  startId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_startId"}>
endId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_endId"}>
};

/**
 * Calls the "getAllValidAuctions" function on the contract.
 * @param options - The options for the getAllValidAuctions function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllValidAuctions } from "TODO";
 * 
 * const result = await getAllValidAuctions({
 *  startId: ...,
 *  endId: ...,
 * });
 * 
 * ```
 */
export async function getAllValidAuctions(
  options: BaseTransactionOptions<GetAllValidAuctionsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7b063801",
  [
    {
      "type": "uint256",
      "name": "_startId"
    },
    {
      "type": "uint256",
      "name": "_endId"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "_validAuctions",
      "components": [
        {
          "type": "uint256",
          "name": "auctionId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "minimumBidAmount"
        },
        {
          "type": "uint256",
          "name": "buyoutBidAmount"
        },
        {
          "type": "uint64",
          "name": "timeBufferInSeconds"
        },
        {
          "type": "uint64",
          "name": "bidBufferBps"
        },
        {
          "type": "uint64",
          "name": "startTimestamp"
        },
        {
          "type": "uint64",
          "name": "endTimestamp"
        },
        {
          "type": "address",
          "name": "auctionCreator"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        }
      ]
    }
  ]
],
    params: [options.startId, options.endId]
  });
};


/**
 * Represents the parameters for the "getAuction" function.
 */
export type GetAuctionParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
};

/**
 * Calls the "getAuction" function on the contract.
 * @param options - The options for the getAuction function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAuction } from "TODO";
 * 
 * const result = await getAuction({
 *  auctionId: ...,
 * });
 * 
 * ```
 */
export async function getAuction(
  options: BaseTransactionOptions<GetAuctionParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x78bd7935",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    }
  ],
  [
    {
      "type": "tuple",
      "name": "_auction",
      "components": [
        {
          "type": "uint256",
          "name": "auctionId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "minimumBidAmount"
        },
        {
          "type": "uint256",
          "name": "buyoutBidAmount"
        },
        {
          "type": "uint64",
          "name": "timeBufferInSeconds"
        },
        {
          "type": "uint64",
          "name": "bidBufferBps"
        },
        {
          "type": "uint64",
          "name": "startTimestamp"
        },
        {
          "type": "uint64",
          "name": "endTimestamp"
        },
        {
          "type": "address",
          "name": "auctionCreator"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        }
      ]
    }
  ]
],
    params: [options.auctionId]
  });
};


/**
 * Represents the parameters for the "getWinningBid" function.
 */
export type GetWinningBidParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
};

/**
 * Calls the "getWinningBid" function on the contract.
 * @param options - The options for the getWinningBid function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getWinningBid } from "TODO";
 * 
 * const result = await getWinningBid({
 *  auctionId: ...,
 * });
 * 
 * ```
 */
export async function getWinningBid(
  options: BaseTransactionOptions<GetWinningBidParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6891939d",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    }
  ],
  [
    {
      "type": "address",
      "name": "_bidder"
    },
    {
      "type": "address",
      "name": "_currency"
    },
    {
      "type": "uint256",
      "name": "_bidAmount"
    }
  ]
],
    params: [options.auctionId]
  });
};


/**
 * Represents the parameters for the "isAuctionExpired" function.
 */
export type IsAuctionExpiredParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
};

/**
 * Calls the "isAuctionExpired" function on the contract.
 * @param options - The options for the isAuctionExpired function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isAuctionExpired } from "TODO";
 * 
 * const result = await isAuctionExpired({
 *  auctionId: ...,
 * });
 * 
 * ```
 */
export async function isAuctionExpired(
  options: BaseTransactionOptions<IsAuctionExpiredParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x1389b117",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.auctionId]
  });
};


/**
 * Represents the parameters for the "isNewWinningBid" function.
 */
export type IsNewWinningBidParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
bidAmount: AbiParameterToPrimitiveType<{"type":"uint256","name":"_bidAmount"}>
};

/**
 * Calls the "isNewWinningBid" function on the contract.
 * @param options - The options for the isNewWinningBid function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isNewWinningBid } from "TODO";
 * 
 * const result = await isNewWinningBid({
 *  auctionId: ...,
 *  bidAmount: ...,
 * });
 * 
 * ```
 */
export async function isNewWinningBid(
  options: BaseTransactionOptions<IsNewWinningBidParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2eb566bd",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    },
    {
      "type": "uint256",
      "name": "_bidAmount"
    }
  ],
  [
    {
      "type": "bool"
    }
  ]
],
    params: [options.auctionId, options.bidAmount]
  });
};




/**
 * Calls the "totalAuctions" function on the contract.
 * @param options - The options for the totalAuctions function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalAuctions } from "TODO";
 * 
 * const result = await totalAuctions();
 * 
 * ```
 */
export async function totalAuctions(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x16002f4a",
  [],
  [
    {
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getAllOffers" function.
 */
export type GetAllOffersParams = {
  startId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_startId"}>
endId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_endId"}>
};

/**
 * Calls the "getAllOffers" function on the contract.
 * @param options - The options for the getAllOffers function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllOffers } from "TODO";
 * 
 * const result = await getAllOffers({
 *  startId: ...,
 *  endId: ...,
 * });
 * 
 * ```
 */
export async function getAllOffers(
  options: BaseTransactionOptions<GetAllOffersParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc1edcfbe",
  [
    {
      "type": "uint256",
      "name": "_startId"
    },
    {
      "type": "uint256",
      "name": "_endId"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "_allOffers",
      "components": [
        {
          "type": "uint256",
          "name": "offerId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "totalPrice"
        },
        {
          "type": "uint256",
          "name": "expirationTimestamp"
        },
        {
          "type": "address",
          "name": "offeror"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        }
      ]
    }
  ]
],
    params: [options.startId, options.endId]
  });
};


/**
 * Represents the parameters for the "getAllValidOffers" function.
 */
export type GetAllValidOffersParams = {
  startId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_startId"}>
endId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_endId"}>
};

/**
 * Calls the "getAllValidOffers" function on the contract.
 * @param options - The options for the getAllValidOffers function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllValidOffers } from "TODO";
 * 
 * const result = await getAllValidOffers({
 *  startId: ...,
 *  endId: ...,
 * });
 * 
 * ```
 */
export async function getAllValidOffers(
  options: BaseTransactionOptions<GetAllValidOffersParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x91940b3e",
  [
    {
      "type": "uint256",
      "name": "_startId"
    },
    {
      "type": "uint256",
      "name": "_endId"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "_validOffers",
      "components": [
        {
          "type": "uint256",
          "name": "offerId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "totalPrice"
        },
        {
          "type": "uint256",
          "name": "expirationTimestamp"
        },
        {
          "type": "address",
          "name": "offeror"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        }
      ]
    }
  ]
],
    params: [options.startId, options.endId]
  });
};


/**
 * Represents the parameters for the "getOffer" function.
 */
export type GetOfferParams = {
  offerId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_offerId"}>
};

/**
 * Calls the "getOffer" function on the contract.
 * @param options - The options for the getOffer function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getOffer } from "TODO";
 * 
 * const result = await getOffer({
 *  offerId: ...,
 * });
 * 
 * ```
 */
export async function getOffer(
  options: BaseTransactionOptions<GetOfferParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4579268a",
  [
    {
      "type": "uint256",
      "name": "_offerId"
    }
  ],
  [
    {
      "type": "tuple",
      "name": "_offer",
      "components": [
        {
          "type": "uint256",
          "name": "offerId"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "uint256",
          "name": "totalPrice"
        },
        {
          "type": "uint256",
          "name": "expirationTimestamp"
        },
        {
          "type": "address",
          "name": "offeror"
        },
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint8",
          "name": "tokenType"
        },
        {
          "type": "uint8",
          "name": "status"
        }
      ]
    }
  ]
],
    params: [options.offerId]
  });
};




/**
 * Calls the "totalOffers" function on the contract.
 * @param options - The options for the totalOffers function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalOffers } from "TODO";
 * 
 * const result = await totalOffers();
 * 
 * ```
 */
export async function totalOffers(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa9fd8ed1",
  [],
  [
    {
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "_disableFunctionInExtension" function.
 */
export type _disableFunctionInExtensionParams = {
  extensionName: AbiParameterToPrimitiveType<{"type":"string","name":"_extensionName"}>
functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"_functionSelector"}>
};

/**
 * Calls the "_disableFunctionInExtension" function on the contract.
 * @param options - The options for the "_disableFunctionInExtension" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { _disableFunctionInExtension } from "TODO";
 * 
 * const transaction = _disableFunctionInExtension({
 *  extensionName: ...,
 *  functionSelector: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function _disableFunctionInExtension(
  options: BaseTransactionOptions<_disableFunctionInExtensionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x429eed80",
  [
    {
      "type": "string",
      "name": "_extensionName"
    },
    {
      "type": "bytes4",
      "name": "_functionSelector"
    }
  ],
  []
],
    params: [options.extensionName, options.functionSelector]
  });
};


/**
 * Represents the parameters for the "addExtension" function.
 */
export type AddExtensionParams = {
  extension: AbiParameterToPrimitiveType<{"type":"tuple","name":"_extension","components":[{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}]}>
};

/**
 * Calls the "addExtension" function on the contract.
 * @param options - The options for the "addExtension" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { addExtension } from "TODO";
 * 
 * const transaction = addExtension({
 *  extension: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function addExtension(
  options: BaseTransactionOptions<AddExtensionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xe05688fe",
  [
    {
      "type": "tuple",
      "name": "_extension",
      "components": [
        {
          "type": "tuple",
          "name": "metadata",
          "components": [
            {
              "type": "string",
              "name": "name"
            },
            {
              "type": "string",
              "name": "metadataURI"
            },
            {
              "type": "address",
              "name": "implementation"
            }
          ]
        },
        {
          "type": "tuple[]",
          "name": "functions",
          "components": [
            {
              "type": "bytes4",
              "name": "functionSelector"
            },
            {
              "type": "string",
              "name": "functionSignature"
            }
          ]
        }
      ]
    }
  ],
  []
],
    params: [options.extension]
  });
};


/**
 * Represents the parameters for the "disableFunctionInExtension" function.
 */
export type DisableFunctionInExtensionParams = {
  extensionName: AbiParameterToPrimitiveType<{"type":"string","name":"_extensionName"}>
functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"_functionSelector"}>
};

/**
 * Calls the "disableFunctionInExtension" function on the contract.
 * @param options - The options for the "disableFunctionInExtension" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { disableFunctionInExtension } from "TODO";
 * 
 * const transaction = disableFunctionInExtension({
 *  extensionName: ...,
 *  functionSelector: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function disableFunctionInExtension(
  options: BaseTransactionOptions<DisableFunctionInExtensionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x512cf914",
  [
    {
      "type": "string",
      "name": "_extensionName"
    },
    {
      "type": "bytes4",
      "name": "_functionSelector"
    }
  ],
  []
],
    params: [options.extensionName, options.functionSelector]
  });
};


/**
 * Represents the parameters for the "enableFunctionInExtension" function.
 */
export type EnableFunctionInExtensionParams = {
  extensionName: AbiParameterToPrimitiveType<{"type":"string","name":"_extensionName"}>
function: AbiParameterToPrimitiveType<{"type":"tuple","name":"_function","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}>
};

/**
 * Calls the "enableFunctionInExtension" function on the contract.
 * @param options - The options for the "enableFunctionInExtension" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { enableFunctionInExtension } from "TODO";
 * 
 * const transaction = enableFunctionInExtension({
 *  extensionName: ...,
 *  function: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function enableFunctionInExtension(
  options: BaseTransactionOptions<EnableFunctionInExtensionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x8856a113",
  [
    {
      "type": "string",
      "name": "_extensionName"
    },
    {
      "type": "tuple",
      "name": "_function",
      "components": [
        {
          "type": "bytes4",
          "name": "functionSelector"
        },
        {
          "type": "string",
          "name": "functionSignature"
        }
      ]
    }
  ],
  []
],
    params: [options.extensionName, options.function]
  });
};


/**
 * Represents the parameters for the "getRoyalty" function.
 */
export type GetRoyaltyParams = {
  tokenAddress: AbiParameterToPrimitiveType<{"type":"address","name":"tokenAddress"}>
tokenId: AbiParameterToPrimitiveType<{"type":"uint256","name":"tokenId"}>
value: AbiParameterToPrimitiveType<{"type":"uint256","name":"value"}>
};

/**
 * Calls the "getRoyalty" function on the contract.
 * @param options - The options for the "getRoyalty" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { getRoyalty } from "TODO";
 * 
 * const transaction = getRoyalty({
 *  tokenAddress: ...,
 *  tokenId: ...,
 *  value: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function getRoyalty(
  options: BaseTransactionOptions<GetRoyaltyParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf533b802",
  [
    {
      "type": "address",
      "name": "tokenAddress"
    },
    {
      "type": "uint256",
      "name": "tokenId"
    },
    {
      "type": "uint256",
      "name": "value"
    }
  ],
  [
    {
      "type": "address[]",
      "name": "recipients"
    },
    {
      "type": "uint256[]",
      "name": "amounts"
    }
  ]
],
    params: [options.tokenAddress, options.tokenId, options.value]
  });
};


/**
 * Represents the parameters for the "grantRole" function.
 */
export type GrantRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account"}>
};

/**
 * Calls the "grantRole" function on the contract.
 * @param options - The options for the "grantRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { grantRole } from "TODO";
 * 
 * const transaction = grantRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function grantRole(
  options: BaseTransactionOptions<GrantRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2f2ff15d",
  [
    {
      "type": "bytes32",
      "name": "role"
    },
    {
      "type": "address",
      "name": "account"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "multicall" function.
 */
export type MulticallParams = {
  data: AbiParameterToPrimitiveType<{"type":"bytes[]","name":"data"}>
};

/**
 * Calls the "multicall" function on the contract.
 * @param options - The options for the "multicall" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multicall } from "TODO";
 * 
 * const transaction = multicall({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multicall(
  options: BaseTransactionOptions<MulticallParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xac9650d8",
  [
    {
      "type": "bytes[]",
      "name": "data"
    }
  ],
  [
    {
      "type": "bytes[]",
      "name": "results"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "onERC1155BatchReceived" function.
 */
export type OnERC1155BatchReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"type":"uint256[]"}>
arg_3: AbiParameterToPrimitiveType<{"type":"uint256[]"}>
arg_4: AbiParameterToPrimitiveType<{"type":"bytes"}>
};

/**
 * Calls the "onERC1155BatchReceived" function on the contract.
 * @param options - The options for the "onERC1155BatchReceived" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { onERC1155BatchReceived } from "TODO";
 * 
 * const transaction = onERC1155BatchReceived({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 *  arg_4: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function onERC1155BatchReceived(
  options: BaseTransactionOptions<OnERC1155BatchReceivedParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xbc197c81",
  [
    {
      "type": "address"
    },
    {
      "type": "address"
    },
    {
      "type": "uint256[]"
    },
    {
      "type": "uint256[]"
    },
    {
      "type": "bytes"
    }
  ],
  [
    {
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3, options.arg_4]
  });
};


/**
 * Represents the parameters for the "onERC1155Received" function.
 */
export type OnERC1155ReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"type":"uint256"}>
arg_3: AbiParameterToPrimitiveType<{"type":"uint256"}>
arg_4: AbiParameterToPrimitiveType<{"type":"bytes"}>
};

/**
 * Calls the "onERC1155Received" function on the contract.
 * @param options - The options for the "onERC1155Received" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { onERC1155Received } from "TODO";
 * 
 * const transaction = onERC1155Received({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 *  arg_4: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function onERC1155Received(
  options: BaseTransactionOptions<OnERC1155ReceivedParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf23a6e61",
  [
    {
      "type": "address"
    },
    {
      "type": "address"
    },
    {
      "type": "uint256"
    },
    {
      "type": "uint256"
    },
    {
      "type": "bytes"
    }
  ],
  [
    {
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3, options.arg_4]
  });
};


/**
 * Represents the parameters for the "onERC721Received" function.
 */
export type OnERC721ReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"type":"uint256"}>
arg_3: AbiParameterToPrimitiveType<{"type":"bytes"}>
};

/**
 * Calls the "onERC721Received" function on the contract.
 * @param options - The options for the "onERC721Received" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { onERC721Received } from "TODO";
 * 
 * const transaction = onERC721Received({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function onERC721Received(
  options: BaseTransactionOptions<OnERC721ReceivedParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x150b7a02",
  [
    {
      "type": "address"
    },
    {
      "type": "address"
    },
    {
      "type": "uint256"
    },
    {
      "type": "bytes"
    }
  ],
  [
    {
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3]
  });
};


/**
 * Represents the parameters for the "removeExtension" function.
 */
export type RemoveExtensionParams = {
  extensionName: AbiParameterToPrimitiveType<{"type":"string","name":"_extensionName"}>
};

/**
 * Calls the "removeExtension" function on the contract.
 * @param options - The options for the "removeExtension" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { removeExtension } from "TODO";
 * 
 * const transaction = removeExtension({
 *  extensionName: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function removeExtension(
  options: BaseTransactionOptions<RemoveExtensionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xee7d2adf",
  [
    {
      "type": "string",
      "name": "_extensionName"
    }
  ],
  []
],
    params: [options.extensionName]
  });
};


/**
 * Represents the parameters for the "renounceRole" function.
 */
export type RenounceRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account"}>
};

/**
 * Calls the "renounceRole" function on the contract.
 * @param options - The options for the "renounceRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { renounceRole } from "TODO";
 * 
 * const transaction = renounceRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function renounceRole(
  options: BaseTransactionOptions<RenounceRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x36568abe",
  [
    {
      "type": "bytes32",
      "name": "role"
    },
    {
      "type": "address",
      "name": "account"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "replaceExtension" function.
 */
export type ReplaceExtensionParams = {
  extension: AbiParameterToPrimitiveType<{"type":"tuple","name":"_extension","components":[{"type":"tuple","name":"metadata","components":[{"type":"string","name":"name"},{"type":"string","name":"metadataURI"},{"type":"address","name":"implementation"}]},{"type":"tuple[]","name":"functions","components":[{"type":"bytes4","name":"functionSelector"},{"type":"string","name":"functionSignature"}]}]}>
};

/**
 * Calls the "replaceExtension" function on the contract.
 * @param options - The options for the "replaceExtension" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { replaceExtension } from "TODO";
 * 
 * const transaction = replaceExtension({
 *  extension: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function replaceExtension(
  options: BaseTransactionOptions<ReplaceExtensionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xc0562f6d",
  [
    {
      "type": "tuple",
      "name": "_extension",
      "components": [
        {
          "type": "tuple",
          "name": "metadata",
          "components": [
            {
              "type": "string",
              "name": "name"
            },
            {
              "type": "string",
              "name": "metadataURI"
            },
            {
              "type": "address",
              "name": "implementation"
            }
          ]
        },
        {
          "type": "tuple[]",
          "name": "functions",
          "components": [
            {
              "type": "bytes4",
              "name": "functionSelector"
            },
            {
              "type": "string",
              "name": "functionSignature"
            }
          ]
        }
      ]
    }
  ],
  []
],
    params: [options.extension]
  });
};


/**
 * Represents the parameters for the "revokeRole" function.
 */
export type RevokeRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account"}>
};

/**
 * Calls the "revokeRole" function on the contract.
 * @param options - The options for the "revokeRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeRole } from "TODO";
 * 
 * const transaction = revokeRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revokeRole(
  options: BaseTransactionOptions<RevokeRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd547741f",
  [
    {
      "type": "bytes32",
      "name": "role"
    },
    {
      "type": "address",
      "name": "account"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "setContractURI" function.
 */
export type SetContractURIParams = {
  uri: AbiParameterToPrimitiveType<{"type":"string","name":"_uri"}>
};

/**
 * Calls the "setContractURI" function on the contract.
 * @param options - The options for the "setContractURI" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setContractURI } from "TODO";
 * 
 * const transaction = setContractURI({
 *  uri: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setContractURI(
  options: BaseTransactionOptions<SetContractURIParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x938e3d7b",
  [
    {
      "type": "string",
      "name": "_uri"
    }
  ],
  []
],
    params: [options.uri]
  });
};


/**
 * Represents the parameters for the "setFlatPlatformFeeInfo" function.
 */
export type SetFlatPlatformFeeInfoParams = {
  platformFeeRecipient: AbiParameterToPrimitiveType<{"type":"address","name":"_platformFeeRecipient"}>
flatFee: AbiParameterToPrimitiveType<{"type":"uint256","name":"_flatFee"}>
};

/**
 * Calls the "setFlatPlatformFeeInfo" function on the contract.
 * @param options - The options for the "setFlatPlatformFeeInfo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setFlatPlatformFeeInfo } from "TODO";
 * 
 * const transaction = setFlatPlatformFeeInfo({
 *  platformFeeRecipient: ...,
 *  flatFee: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setFlatPlatformFeeInfo(
  options: BaseTransactionOptions<SetFlatPlatformFeeInfoParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x7e54523c",
  [
    {
      "type": "address",
      "name": "_platformFeeRecipient"
    },
    {
      "type": "uint256",
      "name": "_flatFee"
    }
  ],
  []
],
    params: [options.platformFeeRecipient, options.flatFee]
  });
};


/**
 * Represents the parameters for the "setPlatformFeeInfo" function.
 */
export type SetPlatformFeeInfoParams = {
  platformFeeRecipient: AbiParameterToPrimitiveType<{"type":"address","name":"_platformFeeRecipient"}>
platformFeeBps: AbiParameterToPrimitiveType<{"type":"uint256","name":"_platformFeeBps"}>
};

/**
 * Calls the "setPlatformFeeInfo" function on the contract.
 * @param options - The options for the "setPlatformFeeInfo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setPlatformFeeInfo } from "TODO";
 * 
 * const transaction = setPlatformFeeInfo({
 *  platformFeeRecipient: ...,
 *  platformFeeBps: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setPlatformFeeInfo(
  options: BaseTransactionOptions<SetPlatformFeeInfoParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x1e7ac488",
  [
    {
      "type": "address",
      "name": "_platformFeeRecipient"
    },
    {
      "type": "uint256",
      "name": "_platformFeeBps"
    }
  ],
  []
],
    params: [options.platformFeeRecipient, options.platformFeeBps]
  });
};


/**
 * Represents the parameters for the "setPlatformFeeType" function.
 */
export type SetPlatformFeeTypeParams = {
  feeType: AbiParameterToPrimitiveType<{"type":"uint8","name":"_feeType"}>
};

/**
 * Calls the "setPlatformFeeType" function on the contract.
 * @param options - The options for the "setPlatformFeeType" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setPlatformFeeType } from "TODO";
 * 
 * const transaction = setPlatformFeeType({
 *  feeType: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setPlatformFeeType(
  options: BaseTransactionOptions<SetPlatformFeeTypeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb6f10c79",
  [
    {
      "type": "uint8",
      "name": "_feeType"
    }
  ],
  []
],
    params: [options.feeType]
  });
};


/**
 * Represents the parameters for the "setRoyaltyEngine" function.
 */
export type SetRoyaltyEngineParams = {
  royaltyEngineAddress: AbiParameterToPrimitiveType<{"type":"address","name":"_royaltyEngineAddress"}>
};

/**
 * Calls the "setRoyaltyEngine" function on the contract.
 * @param options - The options for the "setRoyaltyEngine" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setRoyaltyEngine } from "TODO";
 * 
 * const transaction = setRoyaltyEngine({
 *  royaltyEngineAddress: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setRoyaltyEngine(
  options: BaseTransactionOptions<SetRoyaltyEngineParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x21ede032",
  [
    {
      "type": "address",
      "name": "_royaltyEngineAddress"
    }
  ],
  []
],
    params: [options.royaltyEngineAddress]
  });
};


/**
 * Represents the parameters for the "approveBuyerForListing" function.
 */
export type ApproveBuyerForListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
buyer: AbiParameterToPrimitiveType<{"type":"address","name":"_buyer"}>
toApprove: AbiParameterToPrimitiveType<{"type":"bool","name":"_toApprove"}>
};

/**
 * Calls the "approveBuyerForListing" function on the contract.
 * @param options - The options for the "approveBuyerForListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approveBuyerForListing } from "TODO";
 * 
 * const transaction = approveBuyerForListing({
 *  listingId: ...,
 *  buyer: ...,
 *  toApprove: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function approveBuyerForListing(
  options: BaseTransactionOptions<ApproveBuyerForListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x48dd77df",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "address",
      "name": "_buyer"
    },
    {
      "type": "bool",
      "name": "_toApprove"
    }
  ],
  []
],
    params: [options.listingId, options.buyer, options.toApprove]
  });
};


/**
 * Represents the parameters for the "approveCurrencyForListing" function.
 */
export type ApproveCurrencyForListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
currency: AbiParameterToPrimitiveType<{"type":"address","name":"_currency"}>
pricePerTokenInCurrency: AbiParameterToPrimitiveType<{"type":"uint256","name":"_pricePerTokenInCurrency"}>
};

/**
 * Calls the "approveCurrencyForListing" function on the contract.
 * @param options - The options for the "approveCurrencyForListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approveCurrencyForListing } from "TODO";
 * 
 * const transaction = approveCurrencyForListing({
 *  listingId: ...,
 *  currency: ...,
 *  pricePerTokenInCurrency: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function approveCurrencyForListing(
  options: BaseTransactionOptions<ApproveCurrencyForListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xea8f9a3c",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "address",
      "name": "_currency"
    },
    {
      "type": "uint256",
      "name": "_pricePerTokenInCurrency"
    }
  ],
  []
],
    params: [options.listingId, options.currency, options.pricePerTokenInCurrency]
  });
};


/**
 * Represents the parameters for the "buyFromListing" function.
 */
export type BuyFromListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
buyFor: AbiParameterToPrimitiveType<{"type":"address","name":"_buyFor"}>
quantity: AbiParameterToPrimitiveType<{"type":"uint256","name":"_quantity"}>
currency: AbiParameterToPrimitiveType<{"type":"address","name":"_currency"}>
expectedTotalPrice: AbiParameterToPrimitiveType<{"type":"uint256","name":"_expectedTotalPrice"}>
};

/**
 * Calls the "buyFromListing" function on the contract.
 * @param options - The options for the "buyFromListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { buyFromListing } from "TODO";
 * 
 * const transaction = buyFromListing({
 *  listingId: ...,
 *  buyFor: ...,
 *  quantity: ...,
 *  currency: ...,
 *  expectedTotalPrice: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function buyFromListing(
  options: BaseTransactionOptions<BuyFromListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x704232dc",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "address",
      "name": "_buyFor"
    },
    {
      "type": "uint256",
      "name": "_quantity"
    },
    {
      "type": "address",
      "name": "_currency"
    },
    {
      "type": "uint256",
      "name": "_expectedTotalPrice"
    }
  ],
  []
],
    params: [options.listingId, options.buyFor, options.quantity, options.currency, options.expectedTotalPrice]
  });
};


/**
 * Represents the parameters for the "cancelListing" function.
 */
export type CancelListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
};

/**
 * Calls the "cancelListing" function on the contract.
 * @param options - The options for the "cancelListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { cancelListing } from "TODO";
 * 
 * const transaction = cancelListing({
 *  listingId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function cancelListing(
  options: BaseTransactionOptions<CancelListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x305a67a8",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    }
  ],
  []
],
    params: [options.listingId]
  });
};


/**
 * Represents the parameters for the "createListing" function.
 */
export type CreateListingParams = {
  params: AbiParameterToPrimitiveType<{"type":"tuple","name":"_params","components":[{"type":"address","name":"assetContract"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"quantity"},{"type":"address","name":"currency"},{"type":"uint256","name":"pricePerToken"},{"type":"uint128","name":"startTimestamp"},{"type":"uint128","name":"endTimestamp"},{"type":"bool","name":"reserved"}]}>
};

/**
 * Calls the "createListing" function on the contract.
 * @param options - The options for the "createListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createListing } from "TODO";
 * 
 * const transaction = createListing({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createListing(
  options: BaseTransactionOptions<CreateListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x746415b5",
  [
    {
      "type": "tuple",
      "name": "_params",
      "components": [
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint256",
          "name": "pricePerToken"
        },
        {
          "type": "uint128",
          "name": "startTimestamp"
        },
        {
          "type": "uint128",
          "name": "endTimestamp"
        },
        {
          "type": "bool",
          "name": "reserved"
        }
      ]
    }
  ],
  [
    {
      "type": "uint256",
      "name": "listingId"
    }
  ]
],
    params: [options.params]
  });
};


/**
 * Represents the parameters for the "updateListing" function.
 */
export type UpdateListingParams = {
  listingId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_listingId"}>
params: AbiParameterToPrimitiveType<{"type":"tuple","name":"_params","components":[{"type":"address","name":"assetContract"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"quantity"},{"type":"address","name":"currency"},{"type":"uint256","name":"pricePerToken"},{"type":"uint128","name":"startTimestamp"},{"type":"uint128","name":"endTimestamp"},{"type":"bool","name":"reserved"}]}>
};

/**
 * Calls the "updateListing" function on the contract.
 * @param options - The options for the "updateListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { updateListing } from "TODO";
 * 
 * const transaction = updateListing({
 *  listingId: ...,
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function updateListing(
  options: BaseTransactionOptions<UpdateListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x07b67758",
  [
    {
      "type": "uint256",
      "name": "_listingId"
    },
    {
      "type": "tuple",
      "name": "_params",
      "components": [
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint256",
          "name": "pricePerToken"
        },
        {
          "type": "uint128",
          "name": "startTimestamp"
        },
        {
          "type": "uint128",
          "name": "endTimestamp"
        },
        {
          "type": "bool",
          "name": "reserved"
        }
      ]
    }
  ],
  []
],
    params: [options.listingId, options.params]
  });
};


/**
 * Represents the parameters for the "bidInAuction" function.
 */
export type BidInAuctionParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
bidAmount: AbiParameterToPrimitiveType<{"type":"uint256","name":"_bidAmount"}>
};

/**
 * Calls the "bidInAuction" function on the contract.
 * @param options - The options for the "bidInAuction" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { bidInAuction } from "TODO";
 * 
 * const transaction = bidInAuction({
 *  auctionId: ...,
 *  bidAmount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function bidInAuction(
  options: BaseTransactionOptions<BidInAuctionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0858e5ad",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    },
    {
      "type": "uint256",
      "name": "_bidAmount"
    }
  ],
  []
],
    params: [options.auctionId, options.bidAmount]
  });
};


/**
 * Represents the parameters for the "cancelAuction" function.
 */
export type CancelAuctionParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
};

/**
 * Calls the "cancelAuction" function on the contract.
 * @param options - The options for the "cancelAuction" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { cancelAuction } from "TODO";
 * 
 * const transaction = cancelAuction({
 *  auctionId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function cancelAuction(
  options: BaseTransactionOptions<CancelAuctionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x96b5a755",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    }
  ],
  []
],
    params: [options.auctionId]
  });
};


/**
 * Represents the parameters for the "collectAuctionPayout" function.
 */
export type CollectAuctionPayoutParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
};

/**
 * Calls the "collectAuctionPayout" function on the contract.
 * @param options - The options for the "collectAuctionPayout" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { collectAuctionPayout } from "TODO";
 * 
 * const transaction = collectAuctionPayout({
 *  auctionId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function collectAuctionPayout(
  options: BaseTransactionOptions<CollectAuctionPayoutParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xebf05a62",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    }
  ],
  []
],
    params: [options.auctionId]
  });
};


/**
 * Represents the parameters for the "collectAuctionTokens" function.
 */
export type CollectAuctionTokensParams = {
  auctionId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_auctionId"}>
};

/**
 * Calls the "collectAuctionTokens" function on the contract.
 * @param options - The options for the "collectAuctionTokens" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { collectAuctionTokens } from "TODO";
 * 
 * const transaction = collectAuctionTokens({
 *  auctionId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function collectAuctionTokens(
  options: BaseTransactionOptions<CollectAuctionTokensParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x03a54fe0",
  [
    {
      "type": "uint256",
      "name": "_auctionId"
    }
  ],
  []
],
    params: [options.auctionId]
  });
};


/**
 * Represents the parameters for the "createAuction" function.
 */
export type CreateAuctionParams = {
  params: AbiParameterToPrimitiveType<{"type":"tuple","name":"_params","components":[{"type":"address","name":"assetContract"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"quantity"},{"type":"address","name":"currency"},{"type":"uint256","name":"minimumBidAmount"},{"type":"uint256","name":"buyoutBidAmount"},{"type":"uint64","name":"timeBufferInSeconds"},{"type":"uint64","name":"bidBufferBps"},{"type":"uint64","name":"startTimestamp"},{"type":"uint64","name":"endTimestamp"}]}>
};

/**
 * Calls the "createAuction" function on the contract.
 * @param options - The options for the "createAuction" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createAuction } from "TODO";
 * 
 * const transaction = createAuction({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createAuction(
  options: BaseTransactionOptions<CreateAuctionParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x16654d40",
  [
    {
      "type": "tuple",
      "name": "_params",
      "components": [
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint256",
          "name": "minimumBidAmount"
        },
        {
          "type": "uint256",
          "name": "buyoutBidAmount"
        },
        {
          "type": "uint64",
          "name": "timeBufferInSeconds"
        },
        {
          "type": "uint64",
          "name": "bidBufferBps"
        },
        {
          "type": "uint64",
          "name": "startTimestamp"
        },
        {
          "type": "uint64",
          "name": "endTimestamp"
        }
      ]
    }
  ],
  [
    {
      "type": "uint256",
      "name": "auctionId"
    }
  ]
],
    params: [options.params]
  });
};


/**
 * Represents the parameters for the "acceptOffer" function.
 */
export type AcceptOfferParams = {
  offerId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_offerId"}>
};

/**
 * Calls the "acceptOffer" function on the contract.
 * @param options - The options for the "acceptOffer" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { acceptOffer } from "TODO";
 * 
 * const transaction = acceptOffer({
 *  offerId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function acceptOffer(
  options: BaseTransactionOptions<AcceptOfferParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xc815729d",
  [
    {
      "type": "uint256",
      "name": "_offerId"
    }
  ],
  []
],
    params: [options.offerId]
  });
};


/**
 * Represents the parameters for the "cancelOffer" function.
 */
export type CancelOfferParams = {
  offerId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_offerId"}>
};

/**
 * Calls the "cancelOffer" function on the contract.
 * @param options - The options for the "cancelOffer" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { cancelOffer } from "TODO";
 * 
 * const transaction = cancelOffer({
 *  offerId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function cancelOffer(
  options: BaseTransactionOptions<CancelOfferParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xef706adf",
  [
    {
      "type": "uint256",
      "name": "_offerId"
    }
  ],
  []
],
    params: [options.offerId]
  });
};


/**
 * Represents the parameters for the "makeOffer" function.
 */
export type MakeOfferParams = {
  params: AbiParameterToPrimitiveType<{"type":"tuple","name":"_params","components":[{"type":"address","name":"assetContract"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"quantity"},{"type":"address","name":"currency"},{"type":"uint256","name":"totalPrice"},{"type":"uint256","name":"expirationTimestamp"}]}>
};

/**
 * Calls the "makeOffer" function on the contract.
 * @param options - The options for the "makeOffer" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { makeOffer } from "TODO";
 * 
 * const transaction = makeOffer({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function makeOffer(
  options: BaseTransactionOptions<MakeOfferParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x016767fa",
  [
    {
      "type": "tuple",
      "name": "_params",
      "components": [
        {
          "type": "address",
          "name": "assetContract"
        },
        {
          "type": "uint256",
          "name": "tokenId"
        },
        {
          "type": "uint256",
          "name": "quantity"
        },
        {
          "type": "address",
          "name": "currency"
        },
        {
          "type": "uint256",
          "name": "totalPrice"
        },
        {
          "type": "uint256",
          "name": "expirationTimestamp"
        }
      ]
    }
  ],
  [
    {
      "type": "uint256",
      "name": "_offerId"
    }
  ]
],
    params: [options.params]
  });
};


