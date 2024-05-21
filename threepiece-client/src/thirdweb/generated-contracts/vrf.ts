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
 * Creates an event object for the Log event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { logEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  logEvent()
 * ],
 * });
 * ```
 */ 
export function logEvent() {
  return prepareEvent({
    signature: "event Log(string log)",
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
 * Creates an event object for the VrfChanceEventRequest event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { vrfChanceEventRequestEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  vrfChanceEventRequestEvent()
 * ],
 * });
 * ```
 */ 
export function vrfChanceEventRequestEvent() {
  return prepareEvent({
    signature: "event VrfChanceEventRequest(uint256 requestId, string eventName, uint8 chance, uint256 numberOfResultsWanted)",
  });
};
  



/**
 * Creates an event object for the VrfChanceEventResult event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { vrfChanceEventResultEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  vrfChanceEventResultEvent()
 * ],
 * });
 * ```
 */ 
export function vrfChanceEventResultEvent() {
  return prepareEvent({
    signature: "event VrfChanceEventResult(uint256 requestId, string eventName, bool[] results)",
  });
};
  



/**
 * Creates an event object for the VrfRngRequest event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { vrfRngRequestEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  vrfRngRequestEvent()
 * ],
 * });
 * ```
 */ 
export function vrfRngRequestEvent() {
  return prepareEvent({
    signature: "event VrfRngRequest(uint256 requestId, uint32 numberOfResultsWanted, uint256 startRange, uint256 endRange)",
  });
};
  



/**
 * Creates an event object for the VrfRngResult event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { vrfRngResultEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  vrfRngResultEvent()
 * ],
 * });
 * ```
 */ 
export function vrfRngResultEvent() {
  return prepareEvent({
    signature: "event VrfRngResult(uint256 requestId, uint256[] numbersGenerated)",
  });
};
  

/**
* Contract read functions
*/

/**
 * Represents the parameters for the "checkUpkeep" function.
 */
export type CheckUpkeepParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"","type":"bytes"}>
};

/**
 * Calls the "checkUpkeep" function on the contract.
 * @param options - The options for the checkUpkeep function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { checkUpkeep } from "TODO";
 * 
 * const result = await checkUpkeep({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function checkUpkeep(
  options: BaseTransactionOptions<CheckUpkeepParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6e04ff0d",
  [
    {
      "internalType": "bytes",
      "name": "",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "upkeepNeeded",
      "type": "bool"
    },
    {
      "internalType": "bytes",
      "name": "performData",
      "type": "bytes"
    }
  ]
],
    params: [options.arg_0]
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
 * Calls the "deployer" function on the contract.
 * @param options - The options for the deployer function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { deployer } from "TODO";
 * 
 * const result = await deployer();
 * 
 * ```
 */
export async function deployer(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd5f39488",
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
    },
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "numberOfResultsWanted",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startRange",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endRange",
          "type": "uint256"
        }
      ],
      "internalType": "struct RngUsingChainlinkVRF.Rng",
      "name": "rng",
      "type": "tuple"
    },
    {
      "components": [
        {
          "internalType": "string",
          "name": "eventName",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "chance",
          "type": "uint8"
        }
      ],
      "internalType": "struct RngUsingChainlinkVRF.ChanceEvent",
      "name": "chanceEvent",
      "type": "tuple"
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
 * Calls the "upkeepCounter" function on the contract.
 * @param options - The options for the upkeepCounter function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { upkeepCounter } from "TODO";
 * 
 * const result = await upkeepCounter();
 * 
 * ```
 */
export async function upkeepCounter(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa3d3c0d2",
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
 * Represents the parameters for the "performUpkeep" function.
 */
export type PerformUpkeepParams = {
  performData: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"performData","type":"bytes"}>
};

/**
 * Calls the "performUpkeep" function on the contract.
 * @param options - The options for the "performUpkeep" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { performUpkeep } from "TODO";
 * 
 * const transaction = performUpkeep({
 *  performData: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function performUpkeep(
  options: BaseTransactionOptions<PerformUpkeepParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x4585e33b",
  [
    {
      "internalType": "bytes",
      "name": "performData",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.performData]
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


/**
 * Represents the parameters for the "vrfRng" function.
 */
export type VrfRngParams = {
  numberOfResultsWanted: AbiParameterToPrimitiveType<{"internalType":"uint32","name":"numberOfResultsWanted","type":"uint32"}>
startRange: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"startRange","type":"uint256"}>
endRange: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"endRange","type":"uint256"}>
};

/**
 * Calls the "vrfRng" function on the contract.
 * @param options - The options for the "vrfRng" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { vrfRng } from "TODO";
 * 
 * const transaction = vrfRng({
 *  numberOfResultsWanted: ...,
 *  startRange: ...,
 *  endRange: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function vrfRng(
  options: BaseTransactionOptions<VrfRngParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa97c9b79",
  [
    {
      "internalType": "uint32",
      "name": "numberOfResultsWanted",
      "type": "uint32"
    },
    {
      "internalType": "uint256",
      "name": "startRange",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "endRange",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }
  ]
],
    params: [options.numberOfResultsWanted, options.startRange, options.endRange]
  });
};


/**
 * Represents the parameters for the "vrfTriggerChanceEvent" function.
 */
export type VrfTriggerChanceEventParams = {
  eventName: AbiParameterToPrimitiveType<{"internalType":"string","name":"eventName","type":"string"}>
chance: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"chance","type":"uint8"}>
numberOfResultsWanted: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"numberOfResultsWanted","type":"uint256"}>
};

/**
 * Calls the "vrfTriggerChanceEvent" function on the contract.
 * @param options - The options for the "vrfTriggerChanceEvent" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { vrfTriggerChanceEvent } from "TODO";
 * 
 * const transaction = vrfTriggerChanceEvent({
 *  eventName: ...,
 *  chance: ...,
 *  numberOfResultsWanted: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function vrfTriggerChanceEvent(
  options: BaseTransactionOptions<VrfTriggerChanceEventParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd04a0a84",
  [
    {
      "internalType": "string",
      "name": "eventName",
      "type": "string"
    },
    {
      "internalType": "uint8",
      "name": "chance",
      "type": "uint8"
    },
    {
      "internalType": "uint256",
      "name": "numberOfResultsWanted",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "requestId",
      "type": "uint256"
    }
  ]
],
    params: [options.eventName, options.chance, options.numberOfResultsWanted]
  });
};


