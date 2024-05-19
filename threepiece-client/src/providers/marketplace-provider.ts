import { getContract } from "thirdweb";
import { testChain, thirdwebClient } from "./web3-provider";

export const marketplaceContract = getContract({
    address: import.meta.env.VITE_MARKETPLACE_CONTRACT,
    chain: testChain,
    client: thirdwebClient,
});