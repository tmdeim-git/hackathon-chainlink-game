import { ContractOptions, NFT } from "thirdweb";
import { Account } from "thirdweb/wallets";
import { Land, ResourceType, MetadataAttributes, LandNFTAttributes, LandNFT } from "../thirdweb/types";
import { adminAddress } from "./backend/admin";
import {
  updateMetadata,
  batchUpdateAttribute,
  batchAddAttribute,
  batchRemoveAttribute,
} from "./backend/scripts/erc721-scripts";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";
import { landsNftsAtom } from "./land-provider";
import { landContract } from "./web3-provider";
import { store } from "./store";

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
  const allLandNfts = store.get(landsNftsAtom);
  await updateMetadata(
    metadata,
    allLandNfts,
    Number(land.nft.id),
    landContract
  );
  return endDate;
}

export async function endProduction(land: Land, resource: ResourceType) {
  const metadata = land.nft.metadata;
  const newAttributeValue = metadata.attributes[1].value.map((r) => {
    if (r.resourceType === resource && r.productionEndDate) {
      r.productionEndDate = null;
    }

    return r;
  });
  metadata.attributes[1].value = newAttributeValue;
  const allLandNfts = store.get(landsNftsAtom);
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
    const nftList = store.get(landsNftsAtom);
    return await batchUpdateAttribute(newAttributes, nftList, contract);
  }
}

export async function updateAttributeLand(
  account: Account,
  contract: Readonly<ContractOptions<[]>>,
  newAttributes: LandNFTAttributes,
  nftId: bigint
) {
  if (account.address === adminAddress) {
    const nftList = store.get(landsNftsAtom) as NFT[];
    let metadata = nftList.find(n => n.id === nftId).metadata;
    metadata.attributes = newAttributes as unknown as Record<string, unknown>;

    return await updateMetadata(metadata, nftList, Number(nftId), contract);
  }
}

export async function batchAddAttributes(
  newAttributes: MetadataAttributes,
  account: Account,
  contract: Readonly<ContractOptions<[]>>
) {
  if (account.address === adminAddress) {
    const nftList = store.get(landsNftsAtom);
    return await batchAddAttribute(newAttributes, nftList, contract);
  }
}

export async function batchDeleteAttributes(
  trait_type: string,
  account: Account,
  contract: Readonly<ContractOptions<[]>>
) {
  const allLandNfts = store.get(landsNftsAtom);
  if (account.address === adminAddress) {
    return await batchRemoveAttribute(
      trait_type,
      allLandNfts,
      contract
    );
  }
}
