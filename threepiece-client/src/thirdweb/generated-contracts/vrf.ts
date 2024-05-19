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
 * Creates an event object for the CoordinatorSet event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { coordinatorSetEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  coordinatorSetEvent()
 * ],
 * });
 * ```
 */ 
export function coordinatorSetEvent() {
  return prepareEvent({
    signature: "event CoordinatorSet(address vrfCoordinator)",
  });
};
  

/**
 * Represents the filters for the "OwnershipTransferRequested" event.
 */
export type OwnershipTransferRequestedEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
}>;

/**
 * Creates an event object for the OwnershipTransferRequested event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferRequestedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferRequestedEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function ownershipTransferRequestedEvent(filters: OwnershipTransferRequestedEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferRequested(address indexed from, address indexed to)",
    filters,
  });
};
  

/**
 * Represents the filters for the "OwnershipTransferred" event.
 */
export type OwnershipTransferredEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
}>;

/**
 * Creates an event object for the OwnershipTransferred event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferredEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferredEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function ownershipTransferredEvent(filters: OwnershipTransferredEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferred(address indexed from, address indexed to)",
    filters,
  });
};
  



/**
 * Creates an event object for the RequestFulfilled event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { requestFulfilledEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  requestFulfilledEvent()
 * ],
 * });
 * ```
 */ 
export function requestFulfilledEvent() {
  return prepareEvent({
    signature: "event RequestFulfilled(uint256 requestId, uint256[] randomWords)",
  });
};
  



/**
 * Creates an event object for the RequestSent event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { requestSentEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  requestSentEvent()
 * ],
 * });
 * ```
 */ 
export function requestSentEvent() {
  return prepareEvent({
    signature: "event RequestSent(uint256 requestId, uint32 numWords)",
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "entryfee" function on the contract.
 * @param options - The options for the entryfee function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { entryfee } from "TODO";
 * 
 * const result = await entryfee();
 * 
 * ```
 */
export async function entryfee(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7af4b357",
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
 * Calls the "gameId" function on the contract.
 * @param options - The options for the gameId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { gameId } from "TODO";
 * 
 * const result = await gameId();
 * 
 * ```
 */
export async function gameId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd7c81b55",
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
 * Calls the "gameStarted" function on the contract.
 * @param options - The options for the gameStarted function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { gameStarted } from "TODO";
 * 
 * const result = await gameStarted();
 * 
 * ```
 */
export async function gameStarted(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x5e123ce4",
  [],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getRequestStatus" function.
 */
export type GetRequestStatusParams = {
  requestId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_requestId","type":"uint256"}>
};

/**
 * Calls the "getRequestStatus" function on the contract.
 * @param options - The options for the getRequestStatus function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRequestStatus } from "TODO";
 * 
 * const result = await getRequestStatus({
 *  requestId: ...,
 * });
 * 
 * ```
 */
export async function getRequestStatus(
  options: BaseTransactionOptions<GetRequestStatusParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd8a4676f",
  [
    {
      "internalType": "uint256",
      "name": "_requestId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "fulfilled",
      "type": "bool"
    },
    {
      "internalType": "uint256[]",
      "name": "randomWords",
      "type": "uint256[]"
    }
  ]
],
    params: [options.requestId]
  });
};




/**
 * Calls the "lastRequestId" function on the contract.
 * @param options - The options for the lastRequestId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { lastRequestId } from "TODO";
 * 
 * const result = await lastRequestId();
 * 
 * ```
 */
export async function lastRequestId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xfc2a88c3",
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
 * Represents the parameters for the "players" function.
 */
export type PlayersParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "players" function on the contract.
 * @param options - The options for the players function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { players } from "TODO";
 * 
 * const result = await players({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function players(
  options: BaseTransactionOptions<PlayersParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf71d96cb",
  [
    {
      "internalType": "uint256",
      "name": "",
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
    params: [options.arg_0]
  });
};




/**
 * Calls the "randomWordsNum" function on the contract.
 * @param options - The options for the randomWordsNum function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { randomWordsNum } from "TODO";
 * 
 * const result = await randomWordsNum();
 * 
 * ```
 */
export async function randomWordsNum(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9a8ff87c",
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
 * Calls the "recentWinner" function on the contract.
 * @param options - The options for the recentWinner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { recentWinner } from "TODO";
 * 
 * const result = await recentWinner();
 * 
 * ```
 */
export async function recentWinner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4f8c70cf",
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
 * Represents the parameters for the "requestIds" function.
 */
export type RequestIdsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "requestIds" function on the contract.
 * @param options - The options for the requestIds function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { requestIds } from "TODO";
 * 
 * const result = await requestIds({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function requestIds(
  options: BaseTransactionOptions<RequestIdsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8796ba8c",
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
 * Represents the parameters for the "s_requests" function.
 */
export type S_requestsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "s_requests" function on the contract.
 * @param options - The options for the s_requests function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { s_requests } from "TODO";
 * 
 * const result = await s_requests({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function s_requests(
  options: BaseTransactionOptions<S_requestsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa168fa89",
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
      "name": "fulfilled",
      "type": "bool"
    },
    {
      "internalType": "bool",
      "name": "exists",
      "type": "bool"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "s_vrfCoordinator" function on the contract.
 * @param options - The options for the s_vrfCoordinator function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { s_vrfCoordinator } from "TODO";
 * 
 * const result = await s_vrfCoordinator();
 * 
 * ```
 */
export async function s_vrfCoordinator(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9eccacf6",
  [],
  [
    {
      "internalType": "contract IVRFCoordinatorV2Plus",
      "name": "",
      "type": "address"
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
 * Calls the "acceptOwnership" function on the contract.
 * @param options - The options for the "acceptOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { acceptOwnership } from "TODO";
 * 
 * const transaction = acceptOwnership();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function acceptOwnership(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x79ba5097",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "rawFulfillRandomWords" function.
 */
export type RawFulfillRandomWordsParams = {
  requestId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"requestId","type":"uint256"}>
randomWords: AbiParameterToPrimitiveType<{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}>
};

/**
 * Calls the "rawFulfillRandomWords" function on the contract.
 * @param options - The options for the "rawFulfillRandomWords" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { rawFulfillRandomWords } from "TODO";
 * 
 * const transaction = rawFulfillRandomWords({
 *  requestId: ...,
 *  randomWords: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function rawFulfillRandomWords(
  options: BaseTransactionOptions<RawFulfillRandomWordsParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x1fe543e3",
  [
    {
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    },
    {
      "internalType": "uint256[]",
      "name": "randomWords",
      "type": "uint256[]"
    }
  ],
  []
],
    params: [options.requestId, options.randomWords]
  });
};




/**
 * Calls the "requestRandomWords" function on the contract.
 * @param options - The options for the "requestRandomWords" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { requestRandomWords } from "TODO";
 * 
 * const transaction = requestRandomWords();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function requestRandomWords(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xe0c86289",
  [],
  [
    {
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "setCoordinator" function.
 */
export type SetCoordinatorParams = {
  vrfCoordinator: AbiParameterToPrimitiveType<{"internalType":"address","name":"_vrfCoordinator","type":"address"}>
};

/**
 * Calls the "setCoordinator" function on the contract.
 * @param options - The options for the "setCoordinator" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setCoordinator } from "TODO";
 * 
 * const transaction = setCoordinator({
 *  vrfCoordinator: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setCoordinator(
  options: BaseTransactionOptions<SetCoordinatorParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x8ea98117",
  [
    {
      "internalType": "address",
      "name": "_vrfCoordinator",
      "type": "address"
    }
  ],
  []
],
    params: [options.vrfCoordinator]
  });
};


/**
 * Represents the parameters for the "transferOwnership" function.
 */
export type TransferOwnershipParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
};

/**
 * Calls the "transferOwnership" function on the contract.
 * @param options - The options for the "transferOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferOwnership } from "TODO";
 * 
 * const transaction = transferOwnership({
 *  to: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transferOwnership(
  options: BaseTransactionOptions<TransferOwnershipParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf2fde38b",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    }
  ],
  []
],
    params: [options.to]
  });
};


