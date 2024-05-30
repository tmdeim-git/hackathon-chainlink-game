import { getContract } from "thirdweb";
import { getAllValidListings } from "thirdweb/extensions/marketplace";
import { testChain, thirdwebClient } from "./web3-provider";
import { atom, useAtomValue } from "jotai";

export const marketplaceContract = getContract({
  address: import.meta.env.VITE_MARKETPLACE_CONTRACT,
  chain: testChain,
  client: thirdwebClient,
});

export async function getAllActiveListings() {
  const validListings = await getAllValidListings({
    contract: marketplaceContract,
    count: BigInt(Number.MAX_SAFE_INTEGER),
    start: 0,
  });
  return validListings;
}

export const allActiveListedLandNftsAtom = atom(await getAllActiveListings());

export function useGetActiveListings() {
  return useAtomValue(allActiveListedLandNftsAtom);
}
