# Create contract
1. Add contract in https://thirdweb.com/thirdweb.eth/DropERC721 OR write your own in `/contracts` and run `npx thirdweb deploy`
2. Add claim phase for Owner
3. Change the contract variable in the .env
4. [If its a different contract, Run `npx thirdweb generate chainId/contractAddress` and change the generated file name to erc721.ts]
   
# Deploy VRF contract
1. `npx thirdweb deploy`
2. https://vrf.chain.link/polygon-amoy/ for the parameters
3. Add the contract address to the VRF Subscription Consumers

# (if needed)Deploy the upkeep contract (automation compatible)
1. `npx thirdweb deploy`
2. https://automation.chain.link/polygon-amoy for parameters

# Useful docs
Contract debug: https://remix.ethereum.org/
VRF: https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-use-chainlink-vrf-in-your-smart-contract
Automation-compatible upkeep contract: https://docs.chain.link/chainlink-automation/guides/compatible-contracts