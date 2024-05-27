import { getContract } from "thirdweb";
import { getAllLandNFTs, marketplaceLandContract, testChain, thirdwebClient } from "./web3-provider";
import { getTradesByOwner, activeTrades, activeTradeCounter } from "../thirdweb/generated-contracts/marketplace";
import { Land } from "../thirdweb/types";
import { allLandsAtom, nftsToLands } from "./land-provider";
import { atom, useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import { useMemo } from "react";
import { store } from "./store";

const allListedLandsNfts = await getAllListedLandsNfts(await activeTradeCounter({
    contract: marketplaceLandContract
}));
export const allListedLandNftsAtom = atom(allListedLandsNfts);

export const allListedLands = atom((get) => {
    const nfts = get(allListedLandNftsAtom);
    return nftToLandListings(nfts);
});

export function useGetUserListedLandsNfts(ownerAddress: string) {
    const playerLandListingsAtom = useMemo(
        () =>

            selectAtom(allListedLands, (listedLands) => {
                console.log("Listings", listedLands)
                return listedLands.filter((l) => l.poster === ownerAddress)
            })
        ,
        [ownerAddress]
    );
    return useAtomValue(playerLandListingsAtom);
}

export function useGetMarketplaceLandsNfts(ownerAddress: string) {
    const playerLandListingsAtom = useMemo(
        () =>
            selectAtom(allListedLands, (listedLands) =>
                listedLands.filter((l) => l.poster !== ownerAddress),
            ),
        [ownerAddress]
    );
    return useAtomValue(playerLandListingsAtom);
}

export const marketplaceContract = getContract({
    address: import.meta.env.VITE_MARKETPLACE_CONTRACT,
    chain: testChain,
    client: thirdwebClient,
});

export async function getUserListedLandsNfts(owner: string) {
    const trades = await getTradesByOwner({
        owner: owner,
        contract: marketplaceLandContract,
    });

    return trades;
}

export async function getAllListedLandsNfts(numOfLands: bigint) {
    const listedPromise = [];

    for (let index = 0; index < numOfLands; index++) {
        const listing = activeTrades({ // lister address, nft id, price, status
            arg_0: BigInt(index),
            contract: marketplaceLandContract,
        });

        listedPromise.push(listing);
    }

    return (await Promise.all(listedPromise)).filter(l => l[0] !== "0x0000000000000000000000000000000000000000"); // means inactive trade
}

function nftToLandListings(nfts: any[]): {
    land: Land
    poster: string;
    item: bigint;
    price: bigint;
    status: `0x${string}`
}[] {
    const allLands = store.get(allLandsAtom);

    console.log("TO LAND LISTINGS", nfts.map((nft) => {
        return {
            land: allLands[nft[1]],
            poster: nft[0],
            item: nft[1],
            price: nft[2],
            status: nft[3],
        }
    }));
    return nfts.map((nft) => {
        return {
            land: allLands[nft[1]],
            poster: nft[0],
            item: nft[1],
            price: nft[2],
            status: nft[3],
        }
    }); // TODO: transform to listings and rename to nftToLandListings
}