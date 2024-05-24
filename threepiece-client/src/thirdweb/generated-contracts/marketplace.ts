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
  trade: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_trade","type":"uint256"}>
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
 *  trade: ...,
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
      "name": "_trade",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.trade]
  });
};


/**
 * Represents the parameters for the "executeTrade" function.
 */
export type ExecuteTradeParams = {
  trade: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_trade","type":"uint256"}>
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
 *  trade: ...,
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
      "name": "_trade",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.trade]
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


