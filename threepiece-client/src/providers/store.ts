import { atom, createStore } from "jotai";

export const store = createStore();
export const currentOwnerAtom = atom<string>("");


export async function updateInfo() {
    store.set(landsNftsAtom, await getAllLandNFTs());
    store.set(allPlayersNftsAtom, await getAllPlayerNFTs());
  }
  
