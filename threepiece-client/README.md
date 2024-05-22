# Create contract
1. Add contract in https://thirdweb.com/thirdweb.eth/DropERC721 OR write your own in `/contracts` and run `npm run deploy`
2. Add claim phase for Owner
3. Change the contract variable in the .env
   
# Deploy VRF contract
1. `npm run deploy`
2. https://vrf.chain.link/polygon-amoy/ for the parameters
3. Add the contract address to the VRF Subscription Consumers (must have funds)
4. Change the contract variable in the .env
5. [If its a different contract, Run `npx thirdweb generate chainId/contractAddress` and change the generated file name]
6. DEBUG: if transaction reverts, ensure the contract is correctly subscribed

# Automation setup
1. `npm run deploy`
2. Add/edit contract address to https://automation.chain.link/polygon-amoy (must have funds)
3. Change the contract variable in the .env
4. Add Admin role to the UPKEEP ADDRESS in the VRF dashboard 
5. [If its a different contract, Run `npx thirdweb generate chainId/contractAddress` and change the generated file name]


# Useful docs
Contract debug: https://remix.ethereum.org/
VRF: https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-use-chainlink-vrf-in-your-smart-contract
Automation-compatible upkeep contract: https://docs.chain.link/chainlink-automation/guides/compatible-contracts