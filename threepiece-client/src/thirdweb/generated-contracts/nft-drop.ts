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
 * Represents the filters for the "Approval" event.
 */
export type ApprovalEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
approved: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"approved","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the Approval event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalEvent({
 *  owner: ...,
 *  approved: ...,
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function approvalEvent(filters: ApprovalEventFilters = {}) {
  return prepareEvent({
    signature: "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ApprovalForAll" event.
 */
export type ApprovalForAllEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
operator: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"operator","type":"address"}>
}>;

/**
 * Creates an event object for the ApprovalForAll event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalForAllEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalForAllEvent({
 *  owner: ...,
 *  operator: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function approvalForAllEvent(filters: ApprovalForAllEventFilters = {}) {
  return prepareEvent({
    signature: "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
    filters,
  });
};
  



/**
 * Creates an event object for the BatchMetadataUpdate event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { batchMetadataUpdateEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  batchMetadataUpdateEvent()
 * ],
 * });
 * ```
 */ 
export function batchMetadataUpdateEvent() {
  return prepareEvent({
    signature: "event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId)",
  });
};
  



/**
 * Creates an event object for the ClaimConditionsUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { claimConditionsUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  claimConditionsUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function claimConditionsUpdatedEvent() {
  return prepareEvent({
    signature: "event ClaimConditionsUpdated((uint256 startTimestamp, uint256 maxClaimableSupply, uint256 supplyClaimed, uint256 quantityLimitPerWallet, bytes32 merkleRoot, uint256 pricePerToken, address currency, string metadata)[] claimConditions, bool resetEligibility)",
  });
};
  



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
 * Represents the filters for the "DefaultRoyalty" event.
 */
export type DefaultRoyaltyEventFilters = Partial<{
  newRoyaltyRecipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"newRoyaltyRecipient","type":"address"}>
}>;

/**
 * Creates an event object for the DefaultRoyalty event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { defaultRoyaltyEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  defaultRoyaltyEvent({
 *  newRoyaltyRecipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function defaultRoyaltyEvent(filters: DefaultRoyaltyEventFilters = {}) {
  return prepareEvent({
    signature: "event DefaultRoyalty(address indexed newRoyaltyRecipient, uint256 newRoyaltyBps)",
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
 * Creates an event object for the MaxTotalSupplyUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { maxTotalSupplyUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  maxTotalSupplyUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function maxTotalSupplyUpdatedEvent() {
  return prepareEvent({
    signature: "event MaxTotalSupplyUpdated(uint256 maxTotalSupply)",
  });
};
  



/**
 * Creates an event object for the MetadataFrozen event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { metadataFrozenEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  metadataFrozenEvent()
 * ],
 * });
 * ```
 */ 
export function metadataFrozenEvent() {
  return prepareEvent({
    signature: "event MetadataFrozen()",
  });
};
  

/**
 * Represents the filters for the "OwnerUpdated" event.
 */
export type OwnerUpdatedEventFilters = Partial<{
  prevOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"prevOwner","type":"address"}>
newOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}>
}>;

/**
 * Creates an event object for the OwnerUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownerUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownerUpdatedEvent({
 *  prevOwner: ...,
 *  newOwner: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function ownerUpdatedEvent(filters: OwnerUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnerUpdated(address indexed prevOwner, address indexed newOwner)",
    filters,
  });
};
  

/**
 * Represents the filters for the "PlatformFeeInfoUpdated" event.
 */
export type PlatformFeeInfoUpdatedEventFilters = Partial<{
  platformFeeRecipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"platformFeeRecipient","type":"address"}>
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
 * Represents the filters for the "PrimarySaleRecipientUpdated" event.
 */
export type PrimarySaleRecipientUpdatedEventFilters = Partial<{
  recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
}>;

/**
 * Creates an event object for the PrimarySaleRecipientUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { primarySaleRecipientUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  primarySaleRecipientUpdatedEvent({
 *  recipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function primarySaleRecipientUpdatedEvent(filters: PrimarySaleRecipientUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PrimarySaleRecipientUpdated(address indexed recipient)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleAdminChanged" event.
 */
export type RoleAdminChangedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
previousAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"}>
newAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}>
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
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
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
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
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
 * Represents the filters for the "RoyaltyForToken" event.
 */
export type RoyaltyForTokenEventFilters = Partial<{
  tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
royaltyRecipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"royaltyRecipient","type":"address"}>
}>;

/**
 * Creates an event object for the RoyaltyForToken event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { royaltyForTokenEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  royaltyForTokenEvent({
 *  tokenId: ...,
 *  royaltyRecipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function royaltyForTokenEvent(filters: RoyaltyForTokenEventFilters = {}) {
  return prepareEvent({
    signature: "event RoyaltyForToken(uint256 indexed tokenId, address indexed royaltyRecipient, uint256 royaltyBps)",
    filters,
  });
};
  



/**
 * Creates an event object for the Staked event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { stakedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  stakedEvent()
 * ],
 * });
 * ```
 */ 
export function stakedEvent() {
  return prepareEvent({
    signature: "event Staked(uint256 tokenId)",
  });
};
  

/**
 * Represents the filters for the "TokenURIRevealed" event.
 */
export type TokenURIRevealedEventFilters = Partial<{
  index: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"}>
}>;

/**
 * Creates an event object for the TokenURIRevealed event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokenURIRevealedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokenURIRevealedEvent({
 *  index: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function tokenURIRevealedEvent(filters: TokenURIRevealedEventFilters = {}) {
  return prepareEvent({
    signature: "event TokenURIRevealed(uint256 indexed index, string revealedURI)",
    filters,
  });
};
  

/**
 * Represents the filters for the "TokensClaimed" event.
 */
export type TokensClaimedEventFilters = Partial<{
  claimConditionIndex: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"claimConditionIndex","type":"uint256"}>
claimer: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"claimer","type":"address"}>
receiver: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"receiver","type":"address"}>
}>;

/**
 * Creates an event object for the TokensClaimed event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokensClaimedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokensClaimedEvent({
 *  claimConditionIndex: ...,
 *  claimer: ...,
 *  receiver: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function tokensClaimedEvent(filters: TokensClaimedEventFilters = {}) {
  return prepareEvent({
    signature: "event TokensClaimed(uint256 indexed claimConditionIndex, address indexed claimer, address indexed receiver, uint256 startTokenId, uint256 quantityClaimed)",
    filters,
  });
};
  

/**
 * Represents the filters for the "TokensLazyMinted" event.
 */
export type TokensLazyMintedEventFilters = Partial<{
  startTokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"startTokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the TokensLazyMinted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokensLazyMintedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokensLazyMintedEvent({
 *  startTokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function tokensLazyMintedEvent(filters: TokensLazyMintedEventFilters = {}) {
  return prepareEvent({
    signature: "event TokensLazyMinted(uint256 indexed startTokenId, uint256 endTokenId, string baseURI, bytes encryptedBaseURI)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Transfer" event.
 */
export type TransferEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the Transfer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferEvent({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function transferEvent(filters: TransferEventFilters = {}) {
  return prepareEvent({
    signature: "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    filters,
  });
};
  



/**
 * Creates an event object for the Unstaked event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { unstakedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  unstakedEvent()
 * ],
 * });
 * ```
 */ 
export function unstakedEvent() {
  return prepareEvent({
    signature: "event Unstaked(uint256 tokenId)",
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
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
};

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { balanceOf } from "TODO";
 * 
 * const result = await balanceOf({
 *  owner: ...,
 * });
 * 
 * ```
 */
export async function balanceOf(
  options: BaseTransactionOptions<BalanceOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x70a08231",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner]
  });
};


/**
 * Represents the parameters for the "batchFrozen" function.
 */
export type BatchFrozenParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "batchFrozen" function on the contract.
 * @param options - The options for the batchFrozen function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { batchFrozen } from "TODO";
 * 
 * const result = await batchFrozen({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function batchFrozen(
  options: BaseTransactionOptions<BatchFrozenParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x83040532",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "claimCondition" function on the contract.
 * @param options - The options for the claimCondition function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { claimCondition } from "TODO";
 * 
 * const result = await claimCondition();
 * 
 * ```
 */
export async function claimCondition(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd637ed59",
  [],
  [
    {
      "internalType": "uint256",
      "name": "currentStartId",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "count",
      "type": "uint256"
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
      "internalType": "bytes32",
      "name": "",
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
      "internalType": "string",
      "name": "",
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
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "encryptDecrypt" function.
 */
export type EncryptDecryptParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"data","type":"bytes"}>
key: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"key","type":"bytes"}>
};

/**
 * Calls the "encryptDecrypt" function on the contract.
 * @param options - The options for the encryptDecrypt function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { encryptDecrypt } from "TODO";
 * 
 * const result = await encryptDecrypt({
 *  data: ...,
 *  key: ...,
 * });
 * 
 * ```
 */
export async function encryptDecrypt(
  options: BaseTransactionOptions<EncryptDecryptParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe7150322",
  [
    {
      "internalType": "bytes",
      "name": "data",
      "type": "bytes"
    },
    {
      "internalType": "bytes",
      "name": "key",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bytes",
      "name": "result",
      "type": "bytes"
    }
  ]
],
    params: [options.data, options.key]
  });
};


/**
 * Represents the parameters for the "encryptedData" function.
 */
export type EncryptedDataParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "encryptedData" function on the contract.
 * @param options - The options for the encryptedData function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { encryptedData } from "TODO";
 * 
 * const result = await encryptedData({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function encryptedData(
  options: BaseTransactionOptions<EncryptedDataParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa05112fc",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bytes",
      "name": "",
      "type": "bytes"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "getActiveClaimConditionId" function on the contract.
 * @param options - The options for the getActiveClaimConditionId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getActiveClaimConditionId } from "TODO";
 * 
 * const result = await getActiveClaimConditionId();
 * 
 * ```
 */
export async function getActiveClaimConditionId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc68907de",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getApproved" function.
 */
export type GetApprovedParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "getApproved" function on the contract.
 * @param options - The options for the getApproved function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getApproved } from "TODO";
 * 
 * const result = await getApproved({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function getApproved(
  options: BaseTransactionOptions<GetApprovedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x081812fc",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.tokenId]
  });
};




/**
 * Calls the "getBaseURICount" function on the contract.
 * @param options - The options for the getBaseURICount function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getBaseURICount } from "TODO";
 * 
 * const result = await getBaseURICount();
 * 
 * ```
 */
export async function getBaseURICount(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x63b45e2d",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getBatchIdAtIndex" function.
 */
export type GetBatchIdAtIndexParams = {
  index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_index","type":"uint256"}>
};

/**
 * Calls the "getBatchIdAtIndex" function on the contract.
 * @param options - The options for the getBatchIdAtIndex function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getBatchIdAtIndex } from "TODO";
 * 
 * const result = await getBatchIdAtIndex({
 *  index: ...,
 * });
 * 
 * ```
 */
export async function getBatchIdAtIndex(
  options: BaseTransactionOptions<GetBatchIdAtIndexParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2419f51b",
  [
    {
      "internalType": "uint256",
      "name": "_index",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.index]
  });
};


/**
 * Represents the parameters for the "getClaimConditionById" function.
 */
export type GetClaimConditionByIdParams = {
  conditionId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_conditionId","type":"uint256"}>
};

/**
 * Calls the "getClaimConditionById" function on the contract.
 * @param options - The options for the getClaimConditionById function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getClaimConditionById } from "TODO";
 * 
 * const result = await getClaimConditionById({
 *  conditionId: ...,
 * });
 * 
 * ```
 */
export async function getClaimConditionById(
  options: BaseTransactionOptions<GetClaimConditionByIdParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6f8934f4",
  [
    {
      "internalType": "uint256",
      "name": "_conditionId",
      "type": "uint256"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "startTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxClaimableSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "supplyClaimed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "quantityLimitPerWallet",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "merkleRoot",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        }
      ],
      "internalType": "struct IClaimCondition.ClaimCondition",
      "name": "condition",
      "type": "tuple"
    }
  ]
],
    params: [options.conditionId]
  });
};


/**
 * Represents the parameters for the "getCumulativeDurationStaked" function.
 */
export type GetCumulativeDurationStakedParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "getCumulativeDurationStaked" function on the contract.
 * @param options - The options for the getCumulativeDurationStaked function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getCumulativeDurationStaked } from "TODO";
 * 
 * const result = await getCumulativeDurationStaked({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function getCumulativeDurationStaked(
  options: BaseTransactionOptions<GetCumulativeDurationStakedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x23e9afb0",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "getCurrentAdditionalBalance" function.
 */
export type GetCurrentAdditionalBalanceParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "getCurrentAdditionalBalance" function on the contract.
 * @param options - The options for the getCurrentAdditionalBalance function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getCurrentAdditionalBalance } from "TODO";
 * 
 * const result = await getCurrentAdditionalBalance({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function getCurrentAdditionalBalance(
  options: BaseTransactionOptions<GetCurrentAdditionalBalanceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xad0614f9",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.tokenId]
  });
};




/**
 * Calls the "getDefaultRoyaltyInfo" function on the contract.
 * @param options - The options for the getDefaultRoyaltyInfo function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getDefaultRoyaltyInfo } from "TODO";
 * 
 * const result = await getDefaultRoyaltyInfo();
 * 
 * ```
 */
export async function getDefaultRoyaltyInfo(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb24f2d39",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint16",
      "name": "",
      "type": "uint16"
    }
  ]
],
    params: []
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
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
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
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint16",
      "name": "",
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
      "internalType": "enum IPlatformFee.PlatformFeeType",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getRevealURI" function.
 */
export type GetRevealURIParams = {
  batchId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_batchId","type":"uint256"}>
key: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_key","type":"bytes"}>
};

/**
 * Calls the "getRevealURI" function on the contract.
 * @param options - The options for the getRevealURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRevealURI } from "TODO";
 * 
 * const result = await getRevealURI({
 *  batchId: ...,
 *  key: ...,
 * });
 * 
 * ```
 */
export async function getRevealURI(
  options: BaseTransactionOptions<GetRevealURIParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9fc4d68f",
  [
    {
      "internalType": "uint256",
      "name": "_batchId",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "_key",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "string",
      "name": "revealedURI",
      "type": "string"
    }
  ]
],
    params: [options.batchId, options.key]
  });
};


/**
 * Represents the parameters for the "getRoleAdmin" function.
 */
export type GetRoleAdminParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
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
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"index","type":"uint256"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "uint256",
      "name": "index",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "member",
      "type": "address"
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
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "count",
      "type": "uint256"
    }
  ]
],
    params: [options.role]
  });
};


/**
 * Represents the parameters for the "getRoyaltyInfoForToken" function.
 */
export type GetRoyaltyInfoForTokenParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_tokenId","type":"uint256"}>
};

/**
 * Calls the "getRoyaltyInfoForToken" function on the contract.
 * @param options - The options for the getRoyaltyInfoForToken function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoyaltyInfoForToken } from "TODO";
 * 
 * const result = await getRoyaltyInfoForToken({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function getRoyaltyInfoForToken(
  options: BaseTransactionOptions<GetRoyaltyInfoForTokenParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4cc157df",
  [
    {
      "internalType": "uint256",
      "name": "_tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint16",
      "name": "",
      "type": "uint16"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "getStakingRewards" function.
 */
export type GetStakingRewardsParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "getStakingRewards" function on the contract.
 * @param options - The options for the getStakingRewards function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getStakingRewards } from "TODO";
 * 
 * const result = await getStakingRewards({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function getStakingRewards(
  options: BaseTransactionOptions<GetStakingRewardsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x067f9c10",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "getSupplyClaimedByWallet" function.
 */
export type GetSupplyClaimedByWalletParams = {
  conditionId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_conditionId","type":"uint256"}>
claimer: AbiParameterToPrimitiveType<{"internalType":"address","name":"_claimer","type":"address"}>
};

/**
 * Calls the "getSupplyClaimedByWallet" function on the contract.
 * @param options - The options for the getSupplyClaimedByWallet function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getSupplyClaimedByWallet } from "TODO";
 * 
 * const result = await getSupplyClaimedByWallet({
 *  conditionId: ...,
 *  claimer: ...,
 * });
 * 
 * ```
 */
export async function getSupplyClaimedByWallet(
  options: BaseTransactionOptions<GetSupplyClaimedByWalletParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xad1eefc5",
  [
    {
      "internalType": "uint256",
      "name": "_conditionId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_claimer",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "supplyClaimedByWallet",
      "type": "uint256"
    }
  ]
],
    params: [options.conditionId, options.claimer]
  });
};


/**
 * Represents the parameters for the "hasRole" function.
 */
export type HasRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
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
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "isApprovedForAll" function.
 */
export type IsApprovedForAllParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
operator: AbiParameterToPrimitiveType<{"internalType":"address","name":"operator","type":"address"}>
};

/**
 * Calls the "isApprovedForAll" function on the contract.
 * @param options - The options for the isApprovedForAll function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isApprovedForAll } from "TODO";
 * 
 * const result = await isApprovedForAll({
 *  owner: ...,
 *  operator: ...,
 * });
 * 
 * ```
 */
export async function isApprovedForAll(
  options: BaseTransactionOptions<IsApprovedForAllParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe985e9c5",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.owner, options.operator]
  });
};


/**
 * Represents the parameters for the "isEncryptedBatch" function.
 */
export type IsEncryptedBatchParams = {
  batchId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_batchId","type":"uint256"}>
};

/**
 * Calls the "isEncryptedBatch" function on the contract.
 * @param options - The options for the isEncryptedBatch function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isEncryptedBatch } from "TODO";
 * 
 * const result = await isEncryptedBatch({
 *  batchId: ...,
 * });
 * 
 * ```
 */
export async function isEncryptedBatch(
  options: BaseTransactionOptions<IsEncryptedBatchParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x492e224b",
  [
    {
      "internalType": "uint256",
      "name": "_batchId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.batchId]
  });
};


/**
 * Represents the parameters for the "isStaked" function.
 */
export type IsStakedParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "isStaked" function on the contract.
 * @param options - The options for the isStaked function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isStaked } from "TODO";
 * 
 * const result = await isStaked({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function isStaked(
  options: BaseTransactionOptions<IsStakedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xbaa51f86",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "isTrustedForwarder" function.
 */
export type IsTrustedForwarderParams = {
  forwarder: AbiParameterToPrimitiveType<{"internalType":"address","name":"forwarder","type":"address"}>
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
      "internalType": "address",
      "name": "forwarder",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.forwarder]
  });
};




/**
 * Calls the "maxTotalSupply" function on the contract.
 * @param options - The options for the maxTotalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { maxTotalSupply } from "TODO";
 * 
 * const result = await maxTotalSupply();
 * 
 * ```
 */
export async function maxTotalSupply(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2ab4d052",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 * 
 * const result = await name();
 * 
 * ```
 */
export async function name(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06fdde03",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "nextTokenIdToClaim" function on the contract.
 * @param options - The options for the nextTokenIdToClaim function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nextTokenIdToClaim } from "TODO";
 * 
 * const result = await nextTokenIdToClaim();
 * 
 * ```
 */
export async function nextTokenIdToClaim(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xacd083f8",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "nextTokenIdToMint" function on the contract.
 * @param options - The options for the nextTokenIdToMint function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nextTokenIdToMint } from "TODO";
 * 
 * const result = await nextTokenIdToMint();
 * 
 * ```
 */
export async function nextTokenIdToMint(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3b1475a7",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 * 
 * const result = await owner();
 * 
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8da5cb5b",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "ownerOf" function.
 */
export type OwnerOfParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "ownerOf" function on the contract.
 * @param options - The options for the ownerOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { ownerOf } from "TODO";
 * 
 * const result = await ownerOf({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function ownerOf(
  options: BaseTransactionOptions<OwnerOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6352211e",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.tokenId]
  });
};




/**
 * Calls the "primarySaleRecipient" function on the contract.
 * @param options - The options for the primarySaleRecipient function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { primarySaleRecipient } from "TODO";
 * 
 * const result = await primarySaleRecipient();
 * 
 * ```
 */
export async function primarySaleRecipient(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x079fe40e",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "royaltyInfo" function.
 */
export type RoyaltyInfoParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
salePrice: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"salePrice","type":"uint256"}>
};

/**
 * Calls the "royaltyInfo" function on the contract.
 * @param options - The options for the royaltyInfo function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { royaltyInfo } from "TODO";
 * 
 * const result = await royaltyInfo({
 *  tokenId: ...,
 *  salePrice: ...,
 * });
 * 
 * ```
 */
export async function royaltyInfo(
  options: BaseTransactionOptions<RoyaltyInfoParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2a55205a",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "salePrice",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "receiver",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "royaltyAmount",
      "type": "uint256"
    }
  ]
],
    params: [options.tokenId, options.salePrice]
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}>
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
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
};




/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { symbol } from "TODO";
 * 
 * const result = await symbol();
 * 
 * ```
 */
export async function symbol(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x95d89b41",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "tokenToIsStaked" function.
 */
export type TokenToIsStakedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "tokenToIsStaked" function on the contract.
 * @param options - The options for the tokenToIsStaked function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenToIsStaked } from "TODO";
 * 
 * const result = await tokenToIsStaked({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function tokenToIsStaked(
  options: BaseTransactionOptions<TokenToIsStakedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa96533e9",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "tokenToTotalDurationStaked" function.
 */
export type TokenToTotalDurationStakedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "tokenToTotalDurationStaked" function on the contract.
 * @param options - The options for the tokenToTotalDurationStaked function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenToTotalDurationStaked } from "TODO";
 * 
 * const result = await tokenToTotalDurationStaked({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function tokenToTotalDurationStaked(
  options: BaseTransactionOptions<TokenToTotalDurationStakedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x37057779",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "tokenToWhenStaked" function.
 */
export type TokenToWhenStakedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "tokenToWhenStaked" function on the contract.
 * @param options - The options for the tokenToWhenStaked function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenToWhenStaked } from "TODO";
 * 
 * const result = await tokenToWhenStaked({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function tokenToWhenStaked(
  options: BaseTransactionOptions<TokenToWhenStakedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf1da6b97",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "tokenURI" function.
 */
export type TokenURIParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_tokenId","type":"uint256"}>
};

/**
 * Calls the "tokenURI" function on the contract.
 * @param options - The options for the tokenURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenURI } from "TODO";
 * 
 * const result = await tokenURI({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function tokenURI(
  options: BaseTransactionOptions<TokenURIParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc87b56dd",
  [
    {
      "internalType": "uint256",
      "name": "_tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: [options.tokenId]
  });
};




/**
 * Calls the "totalMinted" function on the contract.
 * @param options - The options for the totalMinted function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalMinted } from "TODO";
 * 
 * const result = await totalMinted();
 * 
 * ```
 */
export async function totalMinted(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa2309ff8",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "totalSupply" function on the contract.
 * @param options - The options for the totalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalSupply } from "TODO";
 * 
 * const result = await totalSupply();
 * 
 * ```
 */
export async function totalSupply(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x18160ddd",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "verifyClaim" function.
 */
export type VerifyClaimParams = {
  conditionId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_conditionId","type":"uint256"}>
claimer: AbiParameterToPrimitiveType<{"internalType":"address","name":"_claimer","type":"address"}>
quantity: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_quantity","type":"uint256"}>
currency: AbiParameterToPrimitiveType<{"internalType":"address","name":"_currency","type":"address"}>
pricePerToken: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_pricePerToken","type":"uint256"}>
allowlistProof: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"},{"internalType":"uint256","name":"quantityLimitPerWallet","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"address","name":"currency","type":"address"}],"internalType":"struct IDrop.AllowlistProof","name":"_allowlistProof","type":"tuple"}>
};

/**
 * Calls the "verifyClaim" function on the contract.
 * @param options - The options for the verifyClaim function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { verifyClaim } from "TODO";
 * 
 * const result = await verifyClaim({
 *  conditionId: ...,
 *  claimer: ...,
 *  quantity: ...,
 *  currency: ...,
 *  pricePerToken: ...,
 *  allowlistProof: ...,
 * });
 * 
 * ```
 */
export async function verifyClaim(
  options: BaseTransactionOptions<VerifyClaimParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x23a2902b",
  [
    {
      "internalType": "uint256",
      "name": "_conditionId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_claimer",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_quantity",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_currency",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_pricePerToken",
      "type": "uint256"
    },
    {
      "components": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "quantityLimitPerWallet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        }
      ],
      "internalType": "struct IDrop.AllowlistProof",
      "name": "_allowlistProof",
      "type": "tuple"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "isOverride",
      "type": "bool"
    }
  ]
],
    params: [options.conditionId, options.claimer, options.quantity, options.currency, options.pricePerToken, options.allowlistProof]
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "approve" function.
 */
export type ApproveParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "approve" function on the contract.
 * @param options - The options for the "approve" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approve } from "TODO";
 * 
 * const transaction = approve({
 *  to: ...,
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function approve(
  options: BaseTransactionOptions<ApproveParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x095ea7b3",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.to, options.tokenId]
  });
};


/**
 * Represents the parameters for the "burn" function.
 */
export type BurnParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "burn" function on the contract.
 * @param options - The options for the "burn" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { burn } from "TODO";
 * 
 * const transaction = burn({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function burn(
  options: BaseTransactionOptions<BurnParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42966c68",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "claim" function.
 */
export type ClaimParams = {
  receiver: AbiParameterToPrimitiveType<{"internalType":"address","name":"_receiver","type":"address"}>
quantity: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_quantity","type":"uint256"}>
currency: AbiParameterToPrimitiveType<{"internalType":"address","name":"_currency","type":"address"}>
pricePerToken: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_pricePerToken","type":"uint256"}>
allowlistProof: AbiParameterToPrimitiveType<{"components":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"},{"internalType":"uint256","name":"quantityLimitPerWallet","type":"uint256"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"address","name":"currency","type":"address"}],"internalType":"struct IDrop.AllowlistProof","name":"_allowlistProof","type":"tuple"}>
data: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_data","type":"bytes"}>
};

/**
 * Calls the "claim" function on the contract.
 * @param options - The options for the "claim" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { claim } from "TODO";
 * 
 * const transaction = claim({
 *  receiver: ...,
 *  quantity: ...,
 *  currency: ...,
 *  pricePerToken: ...,
 *  allowlistProof: ...,
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function claim(
  options: BaseTransactionOptions<ClaimParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x84bb1e42",
  [
    {
      "internalType": "address",
      "name": "_receiver",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_quantity",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_currency",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_pricePerToken",
      "type": "uint256"
    },
    {
      "components": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "quantityLimitPerWallet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        }
      ],
      "internalType": "struct IDrop.AllowlistProof",
      "name": "_allowlistProof",
      "type": "tuple"
    },
    {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.receiver, options.quantity, options.currency, options.pricePerToken, options.allowlistProof, options.data]
  });
};


/**
 * Represents the parameters for the "freezeBatchBaseURI" function.
 */
export type FreezeBatchBaseURIParams = {
  index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_index","type":"uint256"}>
};

/**
 * Calls the "freezeBatchBaseURI" function on the contract.
 * @param options - The options for the "freezeBatchBaseURI" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { freezeBatchBaseURI } from "TODO";
 * 
 * const transaction = freezeBatchBaseURI({
 *  index: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function freezeBatchBaseURI(
  options: BaseTransactionOptions<FreezeBatchBaseURIParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa07ced9e",
  [
    {
      "internalType": "uint256",
      "name": "_index",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.index]
  });
};


/**
 * Represents the parameters for the "grantRole" function.
 */
export type GrantRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "lazyMint" function.
 */
export type LazyMintParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
baseURIForTokens: AbiParameterToPrimitiveType<{"internalType":"string","name":"_baseURIForTokens","type":"string"}>
data: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_data","type":"bytes"}>
};

/**
 * Calls the "lazyMint" function on the contract.
 * @param options - The options for the "lazyMint" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { lazyMint } from "TODO";
 * 
 * const transaction = lazyMint({
 *  amount: ...,
 *  baseURIForTokens: ...,
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function lazyMint(
  options: BaseTransactionOptions<LazyMintParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd37c353b",
  [
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "_baseURIForTokens",
      "type": "string"
    },
    {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "batchId",
      "type": "uint256"
    }
  ]
],
    params: [options.amount, options.baseURIForTokens, options.data]
  });
};


/**
 * Represents the parameters for the "mint" function.
 */
export type MintParams = {
  quanity: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_quanity","type":"uint256"}>
};

/**
 * Calls the "mint" function on the contract.
 * @param options - The options for the "mint" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { mint } from "TODO";
 * 
 * const transaction = mint({
 *  quanity: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function mint(
  options: BaseTransactionOptions<MintParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa0712d68",
  [
    {
      "internalType": "uint256",
      "name": "_quanity",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.quanity]
  });
};


/**
 * Represents the parameters for the "multicall" function.
 */
export type MulticallParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes[]","name":"data","type":"bytes[]"}>
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
      "internalType": "bytes[]",
      "name": "data",
      "type": "bytes[]"
    }
  ],
  [
    {
      "internalType": "bytes[]",
      "name": "results",
      "type": "bytes[]"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "renounceRole" function.
 */
export type RenounceRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "reveal" function.
 */
export type RevealParams = {
  index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_index","type":"uint256"}>
key: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"_key","type":"bytes"}>
};

/**
 * Calls the "reveal" function on the contract.
 * @param options - The options for the "reveal" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { reveal } from "TODO";
 * 
 * const transaction = reveal({
 *  index: ...,
 *  key: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function reveal(
  options: BaseTransactionOptions<RevealParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xce805642",
  [
    {
      "internalType": "uint256",
      "name": "_index",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "_key",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "string",
      "name": "revealedURI",
      "type": "string"
    }
  ]
],
    params: [options.index, options.key]
  });
};


/**
 * Represents the parameters for the "revokeRole" function.
 */
export type RevokeRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
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
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "safeTransferFrom" function.
 */
export type SafeTransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "safeTransferFrom" function on the contract.
 * @param options - The options for the "safeTransferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { safeTransferFrom } from "TODO";
 * 
 * const transaction = safeTransferFrom({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function safeTransferFrom(
  options: BaseTransactionOptions<SafeTransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42842e0e",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.from, options.to, options.tokenId]
  });
};


/**
 * Represents the parameters for the "setApprovalForAll" function.
 */
export type SetApprovalForAllParams = {
  operator: AbiParameterToPrimitiveType<{"internalType":"address","name":"operator","type":"address"}>
approved: AbiParameterToPrimitiveType<{"internalType":"bool","name":"approved","type":"bool"}>
};

/**
 * Calls the "setApprovalForAll" function on the contract.
 * @param options - The options for the "setApprovalForAll" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setApprovalForAll } from "TODO";
 * 
 * const transaction = setApprovalForAll({
 *  operator: ...,
 *  approved: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setApprovalForAll(
  options: BaseTransactionOptions<SetApprovalForAllParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa22cb465",
  [
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    },
    {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }
  ],
  []
],
    params: [options.operator, options.approved]
  });
};


/**
 * Represents the parameters for the "setClaimConditions" function.
 */
export type SetClaimConditionsParams = {
  conditions: AbiParameterToPrimitiveType<{"components":[{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"maxClaimableSupply","type":"uint256"},{"internalType":"uint256","name":"supplyClaimed","type":"uint256"},{"internalType":"uint256","name":"quantityLimitPerWallet","type":"uint256"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"uint256","name":"pricePerToken","type":"uint256"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"string","name":"metadata","type":"string"}],"internalType":"struct IClaimCondition.ClaimCondition[]","name":"_conditions","type":"tuple[]"}>
resetClaimEligibility: AbiParameterToPrimitiveType<{"internalType":"bool","name":"_resetClaimEligibility","type":"bool"}>
};

/**
 * Calls the "setClaimConditions" function on the contract.
 * @param options - The options for the "setClaimConditions" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setClaimConditions } from "TODO";
 * 
 * const transaction = setClaimConditions({
 *  conditions: ...,
 *  resetClaimEligibility: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setClaimConditions(
  options: BaseTransactionOptions<SetClaimConditionsParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x74bc7db7",
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "startTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxClaimableSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "supplyClaimed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "quantityLimitPerWallet",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "merkleRoot",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "pricePerToken",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "currency",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        }
      ],
      "internalType": "struct IClaimCondition.ClaimCondition[]",
      "name": "_conditions",
      "type": "tuple[]"
    },
    {
      "internalType": "bool",
      "name": "_resetClaimEligibility",
      "type": "bool"
    }
  ],
  []
],
    params: [options.conditions, options.resetClaimEligibility]
  });
};


/**
 * Represents the parameters for the "setContractURI" function.
 */
export type SetContractURIParams = {
  uri: AbiParameterToPrimitiveType<{"internalType":"string","name":"_uri","type":"string"}>
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
      "internalType": "string",
      "name": "_uri",
      "type": "string"
    }
  ],
  []
],
    params: [options.uri]
  });
};


/**
 * Represents the parameters for the "setDefaultRoyaltyInfo" function.
 */
export type SetDefaultRoyaltyInfoParams = {
  royaltyRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_royaltyRecipient","type":"address"}>
royaltyBps: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_royaltyBps","type":"uint256"}>
};

/**
 * Calls the "setDefaultRoyaltyInfo" function on the contract.
 * @param options - The options for the "setDefaultRoyaltyInfo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setDefaultRoyaltyInfo } from "TODO";
 * 
 * const transaction = setDefaultRoyaltyInfo({
 *  royaltyRecipient: ...,
 *  royaltyBps: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setDefaultRoyaltyInfo(
  options: BaseTransactionOptions<SetDefaultRoyaltyInfoParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x600dd5ea",
  [
    {
      "internalType": "address",
      "name": "_royaltyRecipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_royaltyBps",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.royaltyRecipient, options.royaltyBps]
  });
};


/**
 * Represents the parameters for the "setFlatPlatformFeeInfo" function.
 */
export type SetFlatPlatformFeeInfoParams = {
  platformFeeRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_platformFeeRecipient","type":"address"}>
flatFee: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_flatFee","type":"uint256"}>
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
      "internalType": "address",
      "name": "_platformFeeRecipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_flatFee",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.platformFeeRecipient, options.flatFee]
  });
};


/**
 * Represents the parameters for the "setMaxTotalSupply" function.
 */
export type SetMaxTotalSupplyParams = {
  maxTotalSupply: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_maxTotalSupply","type":"uint256"}>
};

/**
 * Calls the "setMaxTotalSupply" function on the contract.
 * @param options - The options for the "setMaxTotalSupply" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setMaxTotalSupply } from "TODO";
 * 
 * const transaction = setMaxTotalSupply({
 *  maxTotalSupply: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setMaxTotalSupply(
  options: BaseTransactionOptions<SetMaxTotalSupplyParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x3f3e4c11",
  [
    {
      "internalType": "uint256",
      "name": "_maxTotalSupply",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.maxTotalSupply]
  });
};


/**
 * Represents the parameters for the "setOwner" function.
 */
export type SetOwnerParams = {
  newOwner: AbiParameterToPrimitiveType<{"internalType":"address","name":"_newOwner","type":"address"}>
};

/**
 * Calls the "setOwner" function on the contract.
 * @param options - The options for the "setOwner" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setOwner } from "TODO";
 * 
 * const transaction = setOwner({
 *  newOwner: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setOwner(
  options: BaseTransactionOptions<SetOwnerParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x13af4035",
  [
    {
      "internalType": "address",
      "name": "_newOwner",
      "type": "address"
    }
  ],
  []
],
    params: [options.newOwner]
  });
};


/**
 * Represents the parameters for the "setPlatformFeeInfo" function.
 */
export type SetPlatformFeeInfoParams = {
  platformFeeRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_platformFeeRecipient","type":"address"}>
platformFeeBps: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_platformFeeBps","type":"uint256"}>
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
      "internalType": "address",
      "name": "_platformFeeRecipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_platformFeeBps",
      "type": "uint256"
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
  feeType: AbiParameterToPrimitiveType<{"internalType":"enum IPlatformFee.PlatformFeeType","name":"_feeType","type":"uint8"}>
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
      "internalType": "enum IPlatformFee.PlatformFeeType",
      "name": "_feeType",
      "type": "uint8"
    }
  ],
  []
],
    params: [options.feeType]
  });
};


/**
 * Represents the parameters for the "setPrimarySaleRecipient" function.
 */
export type SetPrimarySaleRecipientParams = {
  saleRecipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_saleRecipient","type":"address"}>
};

/**
 * Calls the "setPrimarySaleRecipient" function on the contract.
 * @param options - The options for the "setPrimarySaleRecipient" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setPrimarySaleRecipient } from "TODO";
 * 
 * const transaction = setPrimarySaleRecipient({
 *  saleRecipient: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setPrimarySaleRecipient(
  options: BaseTransactionOptions<SetPrimarySaleRecipientParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x6f4f2837",
  [
    {
      "internalType": "address",
      "name": "_saleRecipient",
      "type": "address"
    }
  ],
  []
],
    params: [options.saleRecipient]
  });
};


/**
 * Represents the parameters for the "setRoyaltyInfoForToken" function.
 */
export type SetRoyaltyInfoForTokenParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_tokenId","type":"uint256"}>
recipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_recipient","type":"address"}>
bps: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_bps","type":"uint256"}>
};

/**
 * Calls the "setRoyaltyInfoForToken" function on the contract.
 * @param options - The options for the "setRoyaltyInfoForToken" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setRoyaltyInfoForToken } from "TODO";
 * 
 * const transaction = setRoyaltyInfoForToken({
 *  tokenId: ...,
 *  recipient: ...,
 *  bps: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setRoyaltyInfoForToken(
  options: BaseTransactionOptions<SetRoyaltyInfoForTokenParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x9bcf7a15",
  [
    {
      "internalType": "uint256",
      "name": "_tokenId",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "_recipient",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_bps",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId, options.recipient, options.bps]
  });
};


/**
 * Represents the parameters for the "stake" function.
 */
export type StakeParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "stake" function on the contract.
 * @param options - The options for the "stake" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { stake } from "TODO";
 * 
 * const transaction = stake({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function stake(
  options: BaseTransactionOptions<StakeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa694fc3a",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "transferFrom" function.
 */
export type TransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "transferFrom" function on the contract.
 * @param options - The options for the "transferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFrom } from "TODO";
 * 
 * const transaction = transferFrom({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transferFrom(
  options: BaseTransactionOptions<TransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x23b872dd",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.from, options.to, options.tokenId]
  });
};


/**
 * Represents the parameters for the "unstake" function.
 */
export type UnstakeParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "unstake" function on the contract.
 * @param options - The options for the "unstake" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { unstake } from "TODO";
 * 
 * const transaction = unstake({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function unstake(
  options: BaseTransactionOptions<UnstakeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2e17de78",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "updateBatchBaseURI" function.
 */
export type UpdateBatchBaseURIParams = {
  index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_index","type":"uint256"}>
uri: AbiParameterToPrimitiveType<{"internalType":"string","name":"_uri","type":"string"}>
};

/**
 * Calls the "updateBatchBaseURI" function on the contract.
 * @param options - The options for the "updateBatchBaseURI" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { updateBatchBaseURI } from "TODO";
 * 
 * const transaction = updateBatchBaseURI({
 *  index: ...,
 *  uri: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function updateBatchBaseURI(
  options: BaseTransactionOptions<UpdateBatchBaseURIParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xde903ddd",
  [
    {
      "internalType": "uint256",
      "name": "_index",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "_uri",
      "type": "string"
    }
  ],
  []
],
    params: [options.index, options.uri]
  });
};


