import { NFT } from "thirdweb";
import {
  Land,
  LandNFT,
  LandNFTAttributes,
  isValidLand
} from "../thirdweb/types";
import { getAllLandNFTs } from "./web3-provider";

// NOTE: This part should usually be protected in an API
export const allLandNfts = await getAllLandNFTs();
export const allLands = nftsToLands(allLandNfts);

export async function getUserLands(ownerAddress: string) {
  const ownedLands = allLands.filter(
    (land) => land.ownerAddress == ownerAddress
  );
  return ownedLands;
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
            l?.productionEndDate && new Date(l.productionEndDate)
        };
      }),
      event: landNftAttributes?.[2]?.value
    };

    if (!isValidLand(land)) {
      console.log(landNftAttributes);
      console.log("Problem parsing NFT " + nft.id);
    }

    lands.push(land);
  }

  return lands;
}
