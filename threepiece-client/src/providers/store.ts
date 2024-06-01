import { atom, createStore } from "jotai";
import { landsNftsAtom } from "./land-provider";
import { allPlayersNftsAtom } from "./player-provider";
import { getAllLandNFTs, getAllPlayerNFTs } from "./web3-provider";
import {
  allActiveListedLandNftsAtom,
  getAllActiveListings,
} from "./marketplace-provider";

export const store = createStore();
export const currentOwnerAtom = atom<string>("");
export async function refreshNfts() {
  console.log("Updating NFTs...");
  store.set(landsNftsAtom, await getAllLandNFTs());
  store.set(allPlayersNftsAtom, await getAllPlayerNFTs());
  store.set(allActiveListedLandNftsAtom, await getAllActiveListings());
  console.log(
    "Updated",
    landsNftsAtom,
    allPlayersNftsAtom,
    allActiveListedLandNftsAtom)
}
