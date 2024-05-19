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
 * Represents the filters for the "Added" event.
 */
export type AddedEventFilters = Partial<{
  deployer: AbiParameterToPrimitiveType<{"type":"address","name":"deployer","indexed":true,"internalType":"address"}>
deployment: AbiParameterToPrimitiveType<{"type":"address","name":"deployment","indexed":true,"internalType":"address"}>
chainId: AbiParameterToPrimitiveType<{"type":"uint256","name":"chainId","indexed":true,"internalType":"uint256"}>
}>;

/**
 * Creates an event object for the Added event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { addedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  addedEvent({
 *  deployer: ...,
 *  deployment: ...,
 *  chainId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function addedEvent(filters: AddedEventFilters = {}) {
  return prepareEvent({
    signature: "event Added(address indexed deployer, address indexed deployment, uint256 indexed chainId, string metadataUri)",
    filters,
  });
}
  

/**
 * Represents the filters for the "Deleted" event.
 */
export type DeletedEventFilters = Partial<{
  deployer: AbiParameterToPrimitiveType<{"type":"address","name":"deployer","indexed":true,"internalType":"address"}>
deployment: AbiParameterToPrimitiveType<{"type":"address","name":"deployment","indexed":true,"internalType":"address"}>
chainId: AbiParameterToPrimitiveType<{"type":"uint256","name":"chainId","indexed":true,"internalType":"uint256"}>
}>;

/**
 * Creates an event object for the Deleted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { deletedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  deletedEvent({
 *  deployer: ...,
 *  deployment: ...,
 *  chainId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function deletedEvent(filters: DeletedEventFilters = {}) {
  return prepareEvent({
    signature: "event Deleted(address indexed deployer, address indexed deployment, uint256 indexed chainId)",
    filters,
  });
}
  

/**
 * Represents the filters for the "PluginAdded" event.
 */
export type PluginAddedEventFilters = Partial<{
  functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector","indexed":true,"internalType":"bytes4"}>
pluginAddress: AbiParameterToPrimitiveType<{"type":"address","name":"pluginAddress","indexed":true,"internalType":"address"}>
}>;

/**
 * Creates an event object for the PluginAdded event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { pluginAddedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  pluginAddedEvent({
 *  functionSelector: ...,
 *  pluginAddress: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function pluginAddedEvent(filters: PluginAddedEventFilters = {}) {
  return prepareEvent({
    signature: "event PluginAdded(bytes4 indexed functionSelector, address indexed pluginAddress)",
    filters,
  });
}
  

/**
 * Represents the filters for the "PluginRemoved" event.
 */
export type PluginRemovedEventFilters = Partial<{
  functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector","indexed":true,"internalType":"bytes4"}>
pluginAddress: AbiParameterToPrimitiveType<{"type":"address","name":"pluginAddress","indexed":true,"internalType":"address"}>
}>;

/**
 * Creates an event object for the PluginRemoved event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { pluginRemovedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  pluginRemovedEvent({
 *  functionSelector: ...,
 *  pluginAddress: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function pluginRemovedEvent(filters: PluginRemovedEventFilters = {}) {
  return prepareEvent({
    signature: "event PluginRemoved(bytes4 indexed functionSelector, address indexed pluginAddress)",
    filters,
  });
}
  

/**
 * Represents the filters for the "PluginSet" event.
 */
export type PluginSetEventFilters = Partial<{
  functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector","indexed":true,"internalType":"bytes4"}>
functionSignature: AbiParameterToPrimitiveType<{"type":"string","name":"functionSignature","indexed":true,"internalType":"string"}>
pluginAddress: AbiParameterToPrimitiveType<{"type":"address","name":"pluginAddress","indexed":true,"internalType":"address"}>
}>;

/**
 * Creates an event object for the PluginSet event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { pluginSetEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  pluginSetEvent({
 *  functionSelector: ...,
 *  functionSignature: ...,
 *  pluginAddress: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function pluginSetEvent(filters: PluginSetEventFilters = {}) {
  return prepareEvent({
    signature: "event PluginSet(bytes4 indexed functionSelector, string indexed functionSignature, address indexed pluginAddress)",
    filters,
  });
}
  

/**
 * Represents the filters for the "PluginUpdated" event.
 */
export type PluginUpdatedEventFilters = Partial<{
  functionSelector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"functionSelector","indexed":true,"internalType":"bytes4"}>
oldPluginAddress: AbiParameterToPrimitiveType<{"type":"address","name":"oldPluginAddress","indexed":true,"internalType":"address"}>
newPluginAddress: AbiParameterToPrimitiveType<{"type":"address","name":"newPluginAddress","indexed":true,"internalType":"address"}>
}>;

/**
 * Creates an event object for the PluginUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { pluginUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  pluginUpdatedEvent({
 *  functionSelector: ...,
 *  oldPluginAddress: ...,
 *  newPluginAddress: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function pluginUpdatedEvent(filters: PluginUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PluginUpdated(bytes4 indexed functionSelector, address indexed oldPluginAddress, address indexed newPluginAddress)",
    filters,
  });
}
  

/**
 * Represents the filters for the "RoleAdminChanged" event.
 */
export type RoleAdminChangedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","indexed":true,"internalType":"bytes32"}>
previousAdminRole: AbiParameterToPrimitiveType<{"type":"bytes32","name":"previousAdminRole","indexed":true,"internalType":"bytes32"}>
newAdminRole: AbiParameterToPrimitiveType<{"type":"bytes32","name":"newAdminRole","indexed":true,"internalType":"bytes32"}>
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
}
  

/**
 * Represents the filters for the "RoleGranted" event.
 */
export type RoleGrantedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","indexed":true,"internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","indexed":true,"internalType":"address"}>
sender: AbiParameterToPrimitiveType<{"type":"address","name":"sender","indexed":true,"internalType":"address"}>
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
}
  

/**
 * Represents the filters for the "RoleRevoked" event.
 */
export type RoleRevokedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","indexed":true,"internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","indexed":true,"internalType":"address"}>
sender: AbiParameterToPrimitiveType<{"type":"address","name":"sender","indexed":true,"internalType":"address"}>
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
}
  

/**
* Contract read functions
*/



/**
 * Calls the "OPERATOR_ROLE" function on the contract.
 * @param options - The options for the OPERATOR_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { OPERATOR_ROLE } from "TODO";
 * 
 * const result = await OPERATOR_ROLE();
 * 
 * ```
 */
export async function OPERATOR_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf5b541a6",
  [],
  [
    {
      "type": "bytes32",
      "name": "",
      "internalType": "bytes32"
    }
  ]
],
    params: []
  });
}




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
      "type": "bytes",
      "name": "",
      "internalType": "bytes"
    }
  ]
],
    params: []
  });
}




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
      "name": "sender",
      "internalType": "address"
    }
  ]
],
    params: []
  });
}




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
      "type": "bytes32",
      "name": "",
      "internalType": "bytes32"
    }
  ]
],
    params: []
  });
}




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
      "type": "uint8",
      "name": "",
      "internalType": "uint8"
    }
  ]
],
    params: []
  });
}


/**
 * Represents the parameters for the "count" function.
 */
export type CountParams = {
  deployer: AbiParameterToPrimitiveType<{"type":"address","name":"_deployer","internalType":"address"}>
};

/**
 * Calls the "count" function on the contract.
 * @param options - The options for the count function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { count } from "TODO";
 * 
 * const result = await count({
 *  deployer: ...,
 * });
 * 
 * ```
 */
export async function count(
  options: BaseTransactionOptions<CountParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x05d85eda",
  [
    {
      "type": "address",
      "name": "_deployer",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "uint256",
      "name": "deploymentCount",
      "internalType": "uint256"
    }
  ]
],
    params: [options.deployer]
  });
}


/**
 * Represents the parameters for the "getAll" function.
 */
export type GetAllParams = {
  deployer: AbiParameterToPrimitiveType<{"type":"address","name":"_deployer","internalType":"address"}>
};

/**
 * Calls the "getAll" function on the contract.
 * @param options - The options for the getAll function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAll } from "TODO";
 * 
 * const result = await getAll({
 *  deployer: ...,
 * });
 * 
 * ```
 */
export async function getAll(
  options: BaseTransactionOptions<GetAllParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xeb077342",
  [
    {
      "type": "address",
      "name": "_deployer",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "tuple[]",
      "name": "allDeployments",
      "components": [
        {
          "type": "address",
          "name": "deploymentAddress",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "chainId",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "metadataURI",
          "internalType": "string"
        }
      ],
      "internalType": "struct ITWMultichainRegistry.Deployment[]"
    }
  ]
],
    params: [options.deployer]
  });
}


/**
 * Represents the parameters for the "getMetadataUri" function.
 */
export type GetMetadataUriParams = {
  chainId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_chainId","internalType":"uint256"}>
deployment: AbiParameterToPrimitiveType<{"type":"address","name":"_deployment","internalType":"address"}>
};

/**
 * Calls the "getMetadataUri" function on the contract.
 * @param options - The options for the getMetadataUri function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getMetadataUri } from "TODO";
 * 
 * const result = await getMetadataUri({
 *  chainId: ...,
 *  deployment: ...,
 * });
 * 
 * ```
 */
export async function getMetadataUri(
  options: BaseTransactionOptions<GetMetadataUriParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf4c2012d",
  [
    {
      "type": "uint256",
      "name": "_chainId",
      "internalType": "uint256"
    },
    {
      "type": "address",
      "name": "_deployment",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "string",
      "name": "metadataUri",
      "internalType": "string"
    }
  ]
],
    params: [options.chainId, options.deployment]
  });
}




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
      "type": "bytes32",
      "name": "",
      "internalType": "bytes32"
    }
  ]
],
    params: []
  });
}


/**
 * Represents the parameters for the "_getPluginForFunction" function.
 */
export type _getPluginForFunctionParams = {
  selector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"_selector","internalType":"bytes4"}>
};

/**
 * Calls the "_getPluginForFunction" function on the contract.
 * @param options - The options for the _getPluginForFunction function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { _getPluginForFunction } from "TODO";
 * 
 * const result = await _getPluginForFunction({
 *  selector: ...,
 * });
 * 
 * ```
 */
export async function _getPluginForFunction(
  options: BaseTransactionOptions<_getPluginForFunctionParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc511f8fb",
  [
    {
      "type": "bytes4",
      "name": "_selector",
      "internalType": "bytes4"
    }
  ],
  [
    {
      "type": "address",
      "name": "",
      "internalType": "address"
    }
  ]
],
    params: [options.selector]
  });
}


/**
 * Represents the parameters for the "getAllFunctionsOfPlugin" function.
 */
export type GetAllFunctionsOfPluginParams = {
  pluginAddress: AbiParameterToPrimitiveType<{"type":"address","name":"_pluginAddress","internalType":"address"}>
};

/**
 * Calls the "getAllFunctionsOfPlugin" function on the contract.
 * @param options - The options for the getAllFunctionsOfPlugin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllFunctionsOfPlugin } from "TODO";
 * 
 * const result = await getAllFunctionsOfPlugin({
 *  pluginAddress: ...,
 * });
 * 
 * ```
 */
export async function getAllFunctionsOfPlugin(
  options: BaseTransactionOptions<GetAllFunctionsOfPluginParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x5c573f2e",
  [
    {
      "type": "address",
      "name": "_pluginAddress",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "bytes4[]",
      "name": "registered",
      "internalType": "bytes4[]"
    }
  ]
],
    params: [options.pluginAddress]
  });
}




/**
 * Calls the "getAllPlugins" function on the contract.
 * @param options - The options for the getAllPlugins function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllPlugins } from "TODO";
 * 
 * const result = await getAllPlugins();
 * 
 * ```
 */
export async function getAllPlugins(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6b86400e",
  [],
  [
    {
      "type": "tuple[]",
      "name": "registered",
      "components": [
        {
          "type": "bytes4",
          "name": "functionSelector",
          "internalType": "bytes4"
        },
        {
          "type": "string",
          "name": "functionSignature",
          "internalType": "string"
        },
        {
          "type": "address",
          "name": "pluginAddress",
          "internalType": "address"
        }
      ],
      "internalType": "struct IPluginMap.Plugin[]"
    }
  ]
],
    params: []
  });
}


/**
 * Represents the parameters for the "getPluginForFunction" function.
 */
export type GetPluginForFunctionParams = {
  selector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"_selector","internalType":"bytes4"}>
};

/**
 * Calls the "getPluginForFunction" function on the contract.
 * @param options - The options for the getPluginForFunction function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPluginForFunction } from "TODO";
 * 
 * const result = await getPluginForFunction({
 *  selector: ...,
 * });
 * 
 * ```
 */
export async function getPluginForFunction(
  options: BaseTransactionOptions<GetPluginForFunctionParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa520a38a",
  [
    {
      "type": "bytes4",
      "name": "_selector",
      "internalType": "bytes4"
    }
  ],
  [
    {
      "type": "address",
      "name": "",
      "internalType": "address"
    }
  ]
],
    params: [options.selector]
  });
}


/**
 * Represents the parameters for the "getRoleAdmin" function.
 */
export type GetRoleAdminParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
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
      "name": "role",
      "internalType": "bytes32"
    }
  ],
  [
    {
      "type": "bytes32",
      "name": "",
      "internalType": "bytes32"
    }
  ]
],
    params: [options.role]
  });
}


/**
 * Represents the parameters for the "getRoleMember" function.
 */
export type GetRoleMemberParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
index: AbiParameterToPrimitiveType<{"type":"uint256","name":"index","internalType":"uint256"}>
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
      "name": "role",
      "internalType": "bytes32"
    },
    {
      "type": "uint256",
      "name": "index",
      "internalType": "uint256"
    }
  ],
  [
    {
      "type": "address",
      "name": "member",
      "internalType": "address"
    }
  ]
],
    params: [options.role, options.index]
  });
}


/**
 * Represents the parameters for the "getRoleMemberCount" function.
 */
export type GetRoleMemberCountParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
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
      "name": "role",
      "internalType": "bytes32"
    }
  ],
  [
    {
      "type": "uint256",
      "name": "count",
      "internalType": "uint256"
    }
  ]
],
    params: [options.role]
  });
}


/**
 * Represents the parameters for the "hasRole" function.
 */
export type HasRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","internalType":"address"}>
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
      "name": "role",
      "internalType": "bytes32"
    },
    {
      "type": "address",
      "name": "account",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
}


/**
 * Represents the parameters for the "hasRoleWithSwitch" function.
 */
export type HasRoleWithSwitchParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","internalType":"address"}>
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
      "name": "role",
      "internalType": "bytes32"
    },
    {
      "type": "address",
      "name": "account",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
}


/**
 * Represents the parameters for the "isTrustedForwarder" function.
 */
export type IsTrustedForwarderParams = {
  forwarder: AbiParameterToPrimitiveType<{"type":"address","name":"forwarder","internalType":"address"}>
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
      "name": "forwarder",
      "internalType": "address"
    }
  ],
  [
    {
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }
  ]
],
    params: [options.forwarder]
  });
}




/**
 * Calls the "pluginMap" function on the contract.
 * @param options - The options for the pluginMap function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { pluginMap } from "TODO";
 * 
 * const result = await pluginMap();
 * 
 * ```
 */
export async function pluginMap(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb48912da",
  [],
  [
    {
      "type": "address",
      "name": "",
      "internalType": "address"
    }
  ]
],
    params: []
  });
}


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}>
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
      "name": "interfaceId",
      "internalType": "bytes4"
    }
  ],
  [
    {
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
}


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "add" function.
 */
export type AddParams = {
  deployer: AbiParameterToPrimitiveType<{"type":"address","name":"_deployer","internalType":"address"}>
deployment: AbiParameterToPrimitiveType<{"type":"address","name":"_deployment","internalType":"address"}>
chainId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_chainId","internalType":"uint256"}>
metadataUri: AbiParameterToPrimitiveType<{"type":"string","name":"metadataUri","internalType":"string"}>
};

/**
 * Calls the "add" function on the contract.
 * @param options - The options for the "add" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { add } from "TODO";
 * 
 * const transaction = add({
 *  deployer: ...,
 *  deployment: ...,
 *  chainId: ...,
 *  metadataUri: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function add(
  options: BaseTransactionOptions<AddParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x26c5b516",
  [
    {
      "type": "address",
      "name": "_deployer",
      "internalType": "address"
    },
    {
      "type": "address",
      "name": "_deployment",
      "internalType": "address"
    },
    {
      "type": "uint256",
      "name": "_chainId",
      "internalType": "uint256"
    },
    {
      "type": "string",
      "name": "metadataUri",
      "internalType": "string"
    }
  ],
  []
],
    params: [options.deployer, options.deployment, options.chainId, options.metadataUri]
  });
}


/**
 * Represents the parameters for the "remove" function.
 */
export type RemoveParams = {
  deployer: AbiParameterToPrimitiveType<{"type":"address","name":"_deployer","internalType":"address"}>
deployment: AbiParameterToPrimitiveType<{"type":"address","name":"_deployment","internalType":"address"}>
chainId: AbiParameterToPrimitiveType<{"type":"uint256","name":"_chainId","internalType":"uint256"}>
};

/**
 * Calls the "remove" function on the contract.
 * @param options - The options for the "remove" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { remove } from "TODO";
 * 
 * const transaction = remove({
 *  deployer: ...,
 *  deployment: ...,
 *  chainId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function remove(
  options: BaseTransactionOptions<RemoveParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x59e5fd04",
  [
    {
      "type": "address",
      "name": "_deployer",
      "internalType": "address"
    },
    {
      "type": "address",
      "name": "_deployment",
      "internalType": "address"
    },
    {
      "type": "uint256",
      "name": "_chainId",
      "internalType": "uint256"
    }
  ],
  []
],
    params: [options.deployer, options.deployment, options.chainId]
  });
}


/**
 * Represents the parameters for the "addPlugin" function.
 */
export type AddPluginParams = {
  plugin: AbiParameterToPrimitiveType<{"type":"tuple","name":"_plugin","components":[{"type":"bytes4","name":"functionSelector","internalType":"bytes4"},{"type":"string","name":"functionSignature","internalType":"string"},{"type":"address","name":"pluginAddress","internalType":"address"}],"internalType":"struct IPluginMap.Plugin"}>
};

/**
 * Calls the "addPlugin" function on the contract.
 * @param options - The options for the "addPlugin" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { addPlugin } from "TODO";
 * 
 * const transaction = addPlugin({
 *  plugin: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function addPlugin(
  options: BaseTransactionOptions<AddPluginParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x1ab6b705",
  [
    {
      "type": "tuple",
      "name": "_plugin",
      "components": [
        {
          "type": "bytes4",
          "name": "functionSelector",
          "internalType": "bytes4"
        },
        {
          "type": "string",
          "name": "functionSignature",
          "internalType": "string"
        },
        {
          "type": "address",
          "name": "pluginAddress",
          "internalType": "address"
        }
      ],
      "internalType": "struct IPluginMap.Plugin"
    }
  ],
  []
],
    params: [options.plugin]
  });
}


/**
 * Represents the parameters for the "grantRole" function.
 */
export type GrantRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","internalType":"address"}>
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
      "name": "role",
      "internalType": "bytes32"
    },
    {
      "type": "address",
      "name": "account",
      "internalType": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
}


/**
 * Represents the parameters for the "multicall" function.
 */
export type MulticallParams = {
  data: AbiParameterToPrimitiveType<{"type":"bytes[]","name":"data","internalType":"bytes[]"}>
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
      "name": "data",
      "internalType": "bytes[]"
    }
  ],
  [
    {
      "type": "bytes[]",
      "name": "results",
      "internalType": "bytes[]"
    }
  ]
],
    params: [options.data]
  });
}


/**
 * Represents the parameters for the "removePlugin" function.
 */
export type RemovePluginParams = {
  selector: AbiParameterToPrimitiveType<{"type":"bytes4","name":"_selector","internalType":"bytes4"}>
};

/**
 * Calls the "removePlugin" function on the contract.
 * @param options - The options for the "removePlugin" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { removePlugin } from "TODO";
 * 
 * const transaction = removePlugin({
 *  selector: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function removePlugin(
  options: BaseTransactionOptions<RemovePluginParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa5342fdf",
  [
    {
      "type": "bytes4",
      "name": "_selector",
      "internalType": "bytes4"
    }
  ],
  []
],
    params: [options.selector]
  });
}


/**
 * Represents the parameters for the "renounceRole" function.
 */
export type RenounceRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","internalType":"address"}>
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
      "name": "role",
      "internalType": "bytes32"
    },
    {
      "type": "address",
      "name": "account",
      "internalType": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
}


/**
 * Represents the parameters for the "revokeRole" function.
 */
export type RevokeRoleParams = {
  role: AbiParameterToPrimitiveType<{"type":"bytes32","name":"role","internalType":"bytes32"}>
account: AbiParameterToPrimitiveType<{"type":"address","name":"account","internalType":"address"}>
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
      "name": "role",
      "internalType": "bytes32"
    },
    {
      "type": "address",
      "name": "account",
      "internalType": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
}


/**
 * Represents the parameters for the "updatePlugin" function.
 */
export type UpdatePluginParams = {
  plugin: AbiParameterToPrimitiveType<{"type":"tuple","name":"_plugin","components":[{"type":"bytes4","name":"functionSelector","internalType":"bytes4"},{"type":"string","name":"functionSignature","internalType":"string"},{"type":"address","name":"pluginAddress","internalType":"address"}],"internalType":"struct IPluginMap.Plugin"}>
};

/**
 * Calls the "updatePlugin" function on the contract.
 * @param options - The options for the "updatePlugin" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { updatePlugin } from "TODO";
 * 
 * const transaction = updatePlugin({
 *  plugin: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function updatePlugin(
  options: BaseTransactionOptions<UpdatePluginParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x4cb5d8fd",
  [
    {
      "type": "tuple",
      "name": "_plugin",
      "components": [
        {
          "type": "bytes4",
          "name": "functionSelector",
          "internalType": "bytes4"
        },
        {
          "type": "string",
          "name": "functionSignature",
          "internalType": "string"
        },
        {
          "type": "address",
          "name": "pluginAddress",
          "internalType": "address"
        }
      ],
      "internalType": "struct IPluginMap.Plugin"
    }
  ],
  []
],
    params: [options.plugin]
  });
}


