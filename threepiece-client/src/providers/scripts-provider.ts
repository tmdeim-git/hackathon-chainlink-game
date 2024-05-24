import { Land, MetadataAttributes, ResourceType } from "../thirdweb/types";
import { adminAddress } from "./backend/admin";
import { batchUpdateAttribute } from "./backend/scripts/erc721-scripts";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";
import { updateMetadata } from "./backend/scripts/erc721-scripts";
import { allLandNfts } from "./land-provider";
import { landContract } from "./web3-provider";
import { ContractOptions } from "thirdweb";
import { Account } from "thirdweb/wallets";

export async function startProduction(land: Land, resource: ResourceType) {
  const metadata = land.nft.metadata;
  let endDate;
  const newAttributeValue = metadata.attributes[1].value.map((r) => {
    if (r.resourceType === resource && !r.productionEndDate) {
      endDate = new Date(
        new Date().getTime() + r.productionTimeSeconds * 1000
      ).toISOString();
      r.productionEndDate = endDate;
    }
    return r;
  });
  metadata.attributes[1].value = newAttributeValue;
  await updateMetadata(
    metadata,
    allLandNfts,
    Number(land.nft.id),
    landContract
  );
  return endDate;
}

export async function endProduction(land: Land, resource: ResourceType) {
  console.log(land);

  const metadata = land.nft.metadata;
  const newAttributeValue = metadata.attributes[1].value.map((r) => {
    if (r.resourceType === resource && r.productionEndDate) {
      r.productionEndDate = null;
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

export async function resetLands(account: Account) {
  if (account.address === adminAddress) {
    return await resetLandNfts();
  }
}

export async function batchUpdateAttributeLand(
  account: Account,
  contract: Readonly<ContractOptions<[]>>,
  newAttributes: MetadataAttributes
) {
  if (account.address === adminAddress) {
    const nftList = allLandNfts;
    return await batchUpdateAttribute(newAttributes, nftList, contract);
  }
}

/*updatedAttributes: MetadataAttributes, nftList: NFT[], contract: Readonly<ContractOptions<[]>>*/
