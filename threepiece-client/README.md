# GAMING APP
Gaming application fully deployed on Polygon zkEVM Cardona Testnet (except for Chainlink functions related contracts, unsupported)

## Create NFT contract
1. Add contract in https://thirdweb.com/thirdweb.eth/DropERC721 OR write your own in `/contracts` and run `npm run deploy`
2. Add claim phase for Owner (claim-conditions)
3. Change the contract variable in the .env
   
## Deploy RNG VRF contract and setup automation 
1. `npm run deploy`(https://vrf.chain.link/polygon-amoy/ for the parameters)
2. Add the contract address to the allowed VRF Subscription Consumers (must have funds)
3. Change the contract variable in the .env
4. Add a new time-based automation for the contract to https://automation.chain.link/polygon-amoy (must have funds)
5. Add ADMIN role to the UPKEEP ADDRESS in the VRF contract on the dashboard 
6. [If the contract was modified, Run `npx thirdweb generate chainId/contractAddress` and put the code in in the `generated-contracts/vrf.ts`]

## Deploy marketplace
1. `npm run deploy` (LINK on Cardona = 0x5576815a38A3706f37bf815b261cCc7cCA77e975, Token address = The address of tokens that will be traded)

## Debug
- If the VRF RNG instantly reverts, ensure the contract is correctly subscribed
- If the automation performs upkeep but no event happens, check if the Automation Upkeep Address is Admin for the VRF contract

## Useful docs
Contract debug: https://remix.ethereum.org/
VRF: https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-use-chainlink-vrf-in-your-smart-contract
Automation-compatible upkeep contract: https://docs.chain.link/chainlink-automation/guides/compatible-contracts