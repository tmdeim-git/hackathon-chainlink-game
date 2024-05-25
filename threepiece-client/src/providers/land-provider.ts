import { NFT } from "thirdweb";
import {
  Land,
  LandNFT,
  LandNFTAttributes,
  isValidLand,
} from "../thirdweb/types";
import { getAllLandNFTs } from "./web3-provider";
import { atom, useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import { useMemo } from "react";

// NOTE: This part should usually be protected in an API
export const allLandNfts = await getAllLandNFTs();

const landsNftsAtom = atom(allLandNfts);

export const allLandsAtom = atom((get) => {
  const allLandNfts = get(landsNftsAtom);
  return nftsToLands(allLandNfts);
});

export function useGetLandsNft() {
  return useAtomValue(landsNftsAtom);
}

export function useGetLands() {
  return useAtomValue(allLandsAtom);
}

export function useGetPlayerLands(ownerAddress: string) {
  const playerLandsAtom = useMemo(
    () =>
      selectAtom(allLandsAtom, (lands) =>
        lands.filter((land) => land.ownerAddress === ownerAddress)
      ),
    [ownerAddress]
  );
  return useAtomValue(playerLandsAtom);
}

function nftsToLands(nfts: NFT[]) {
  const lands: Land[] = [];

  for (const nft of nfts) {
    const landNftAttributes = nft.metadata
      .attributes as unknown as LandNFTAttributes;
    if (typeof landNftAttributes?.[1]?.value === "string") {
      landNftAttributes[1].value = JSON.parse(landNftAttributes?.[1]?.value);
    }

    const land: Land = {
      ownerAddress: nft.owner,
      nft: nft as LandNFT,
      id: Number(landNftAttributes?.[0]?.value),
      resources: landNftAttributes?.[1]?.value.map((l) => {
        return {
          ...l,
          productionEndDate:
            l?.productionEndDate && new Date(l.productionEndDate),
        };
      }),
      event: landNftAttributes?.[2]?.value,
    };

    if (!isValidLand(land)) {
      console.log(landNftAttributes);
      console.log("Problem parsing NFT " + nft.id);
    }

    lands.push(land);
  }

  return lands;
}
