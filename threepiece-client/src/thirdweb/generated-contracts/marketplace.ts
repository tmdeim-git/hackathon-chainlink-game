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
 * Creates an event object for the TradeStatusChange event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tradeStatusChangeEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tradeStatusChangeEvent()
 * ],
 * });
 * ```
 */ 
export function tradeStatusChangeEvent() {
  return prepareEvent({
    signature: "event TradeStatusChange(uint256 ad, bytes32 status)",
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "activeTradeCounter" function on the contract.
 * @param options - The options for the activeTradeCounter function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { activeTradeCounter } from "TODO";
 * 
 * const result = await activeTradeCounter();
 * 
 * ```
 */
export async function activeTradeCounter(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8112740c",
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
 * Represents the parameters for the "activeTrades" function.
 */
export type ActiveTradesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "activeTrades" function on the contract.
 * @param options - The options for the activeTrades function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { activeTrades } from "TODO";
 * 
 * const result = await activeTrades({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function activeTrades(
  options: BaseTransactionOptions<ActiveTradesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4be52276",
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
      "name": "poster",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "item",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    },
    {
      "internalType": "bytes32",
      "name": "status",
      "type": "bytes32"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "getAll" function on the contract.
 * @param options - The options for the getAll function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAll } from "TODO";
 * 
 * const result = await getAll();
 * 
 * ```
 */
export async function getAll(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x53ed5143",
  [],
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "poster",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "item",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "status",
          "type": "bytes32"
        }
      ],
      "internalType": "struct NFTMarketplace.Trade[]",
      "name": "",
      "type": "tuple[]"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getTrade" function.
 */
export type GetTradeParams = {
  trade: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_trade","type":"uint256"}>
};

/**
 * Calls the "getTrade" function on the contract.
 * @param options - The options for the getTrade function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getTrade } from "TODO";
 * 
 * const result = await getTrade({
 *  trade: ...,
 * });
 * 
 * ```
 */
export async function getTrade(
  options: BaseTransactionOptions<GetTradeParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2db25e05",
  [
    {
      "internalType": "uint256",
      "name": "_trade",
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
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.trade]
  });
};


/**
 * Represents the parameters for the "getTradesByOwner" function.
 */
export type GetTradesByOwnerParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
};

/**
 * Calls the "getTradesByOwner" function on the contract.
 * @param options - The options for the getTradesByOwner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getTradesByOwner } from "TODO";
 * 
 * const result = await getTradesByOwner({
 *  owner: ...,
 * });
 * 
 * ```
 */
export async function getTradesByOwner(
  options: BaseTransactionOptions<GetTradesByOwnerParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe847948a",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "poster",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "item",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "status",
          "type": "bytes32"
        }
      ],
      "internalType": "struct NFTMarketplace.Trade[]",
      "name": "",
      "type": "tuple[]"
    }
  ]
],
    params: [options.owner]
  });
};




/**
 * Calls the "itemToken" function on the contract.
 * @param options - The options for the itemToken function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { itemToken } from "TODO";
 * 
 * const result = await itemToken();
 * 
 * ```
 */
export async function itemToken(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x777f5440",
  [],
  [
    {
      "internalType": "contract IERC721",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "tradeCounter" function on the contract.
 * @param options - The options for the tradeCounter function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tradeCounter } from "TODO";
 * 
 * const result = await tradeCounter();
 * 
 * ```
 */
export async function tradeCounter(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x660d15b5",
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
 * Represents the parameters for the "trades" function.
 */
export type TradesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "trades" function on the contract.
 * @param options - The options for the trades function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { trades } from "TODO";
 * 
 * const result = await trades({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function trades(
  options: BaseTransactionOptions<TradesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x1e6c598e",
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
      "name": "poster",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "item",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "price",
      "type": "uint256"
    },
    {
      "internalType": "bytes32",
      "name": "status",
      "type": "bytes32"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "cancelTrade" function.
 */
export type CancelTradeParams = {
  item: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_item","type":"uint256"}>
};

/**
 * Calls the "cancelTrade" function on the contract.
 * @param options - The options for the "cancelTrade" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { cancelTrade } from "TODO";
 * 
 * const transaction = cancelTrade({
 *  item: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function cancelTrade(
  options: BaseTransactionOptions<CancelTradeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x09ec6cc7",
  [
    {
      "internalType": "uint256",
      "name": "_item",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.item]
  });
};


/**
 * Represents the parameters for the "executeTrade" function.
 */
export type ExecuteTradeParams = {
  item: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_item","type":"uint256"}>
};

/**
 * Calls the "executeTrade" function on the contract.
 * @param options - The options for the "executeTrade" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { executeTrade } from "TODO";
 * 
 * const transaction = executeTrade({
 *  item: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function executeTrade(
  options: BaseTransactionOptions<ExecuteTradeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x02d2838b",
  [
    {
      "internalType": "uint256",
      "name": "_item",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.item]
  });
};


/**
 * Represents the parameters for the "openTrade" function.
 */
export type OpenTradeParams = {
  item: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_item","type":"uint256"}>
price: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_price","type":"uint256"}>
};

/**
 * Calls the "openTrade" function on the contract.
 * @param options - The options for the "openTrade" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { openTrade } from "TODO";
 * 
 * const transaction = openTrade({
 *  item: ...,
 *  price: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function openTrade(
  options: BaseTransactionOptions<OpenTradeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0c493fba",
  [
    {
      "internalType": "uint256",
      "name": "_item",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_price",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.item, options.price]
  });
};


/**
 * Represents the parameters for the "removeTrade" function.
 */
export type RemoveTradeParams = {
  item: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_item","type":"uint256"}>
};

/**
 * Calls the "removeTrade" function on the contract.
 * @param options - The options for the "removeTrade" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { removeTrade } from "TODO";
 * 
 * const transaction = removeTrade({
 *  item: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function removeTrade(
  options: BaseTransactionOptions<RemoveTradeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xe08405c7",
  [
    {
      "internalType": "uint256",
      "name": "_item",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.item]
  });
};


