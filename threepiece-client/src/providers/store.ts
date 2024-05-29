import { atom, createStore } from "jotai";
import { landsNftsAtom } from "./land-provider";
import { allPlayersNftsAtom } from "./player-provider";
import { getAllLandNFTs, getAllPlayerNFTs, marketplaceLandContract } from "./web3-provider";
//import { allListedLandNftsAtom, getAllListedLandsNfts } from "./marketplace-provider";
//import { activeTradeCounter } from "../thirdweb/generated-contracts/marketplace";

export const store = createStore();
export const currentOwnerAtom = atom<string>("");

export async function refreshNfts() {
  console.log("Updating NFTs...")
  store.set(landsNftsAtom, await getAllLandNFTs());
  store.set(allPlayersNftsAtom, await getAllPlayerNFTs());
  // store.set(allListedLandNftsAtom, await getAllListedLandsNfts(await activeTradeCounter({
  //   contract: marketplaceLandContract
  // })));
  // console.log("Updated", landsNftsAtom, allPlayersNftsAtom, allListedLandNftsAtom)
}

