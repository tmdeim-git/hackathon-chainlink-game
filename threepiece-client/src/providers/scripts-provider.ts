import { useActiveAccount } from "thirdweb/react";
import { adminAddress } from "./backend/admin";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";
import { updateMetadata } from "./backend/scripts/erc721-scripts";
import { Land, ResourceType } from "../thirdweb/types";
import { allLandNfts } from "./land-provider";
import { landContract } from "./web3-provider";

export async function resetLands() {
  if (useActiveAccount().address === adminAddress) {
    return await resetLandNfts();
  }
}

export async function startProduction(land: Land, resource: ResourceType) {
  if (useActiveAccount().address === adminAddress) {
    const metadata = land.nft.metadata;
    const newAttributeValue = metadata.attributes[1].value.map((r) => {
      if (r.resourceType === resource && !r.productionEndDate) {
        r.productionEndDate = new Date(
          new Date().getTime() + r.productionTimeSeconds * 1000
        );
      }

      return r;
    });
    metadata.attributes[1].value = newAttributeValue;
    return await updateMetadata(
      metadata,
      allLandNfts,
      Number(land.nft.id),
      landContract
    );
  }
}
