import {
  allLandNfts,
  testChain,
  client,
  getAdminAccount,
} from "../thirdweb/provider";
import {
  ContractOptions,
  NFT,
  PreparedTransaction,
  getContract,
  sendAndConfirmTransaction,
} from "thirdweb";
import { MetadataAttributes } from "../thirdweb/types";
import {
  updateBatchBaseURI,
} from "../thirdweb/generated-contracts/erc721";
import { upload } from "thirdweb/storage";
import {
  createListing,
  getAllValidListings,
} from "thirdweb/extensions/marketplace";
import { multicall } from "../thirdweb/generated-contracts/marketplace";

/**
 * For every NFT, add a new attribute with a default value
 */
export async function batchAddAttribute(
  newAttr: MetadataAttributes,
  nftList: NFT[],
  contract: Readonly<ContractOptions<[]>>
) {
  const metadatas = nftList.map((n) => n.metadata);

  for (const { attributes } of metadatas) {
    attributes[Object.keys(attributes).length] = newAttr;
  }

  return await batchUpdateMetadata(metadatas, contract);
}

/**
 * For every NFT, remove a single attribute based on the trait_type given
 */
export async function batchRemoveAttribute(
  trait_type: MetadataAttributes["trait_type"],
  nftList: NFT[],
  contract: Readonly<ContractOptions<[]>>
) {
  const metadatas = nftList.map((n) => n.metadata);

  for (const { attributes } of metadatas) {
    const attributesArr = attributes as unknown as Array<MetadataAttributes>;
    const indexOfTrait = attributesArr.findIndex(
      (e) => e.trait_type === trait_type
    );
    attributesArr.splice(indexOfTrait, 1);
    attributes[indexOfTrait] = attributesArr[indexOfTrait];
  }

  return await batchUpdateMetadata(metadatas, contract);
}

/**
 * For every NFT, update a single attribute based on the trait_type given
 */
export async function batchUpdateAttribute(
  updatedAttributes: MetadataAttributes,
  nftList: NFT[],
  contract: Readonly<ContractOptions<[]>>
) {
  const metadatas = nftList.map((n) => n.metadata);

  for (const { attributes } of metadatas) {
    const attributesArr = attributes as unknown as Array<MetadataAttributes>;
    const indexOfTrait = attributesArr.findIndex(
      (e) => e.trait_type === updatedAttributes.trait_type
    );
    attributes[indexOfTrait] = updatedAttributes;
  }

  return await batchUpdateMetadata(metadatas, contract);
}

/**
 * Update the metadata for a single NFT with the metadata given
 */
export async function updateMetadata(
  nftToChange: NFT,
  newMetadata: NFT["metadata"],
  nftList: NFT[],
  contract: Readonly<ContractOptions<[]>>
) {
  const metadatas = nftList.map((n) => n.metadata);
  metadatas[Number(nftToChange.id)] = newMetadata;
  return await batchUpdateMetadata(metadatas, contract);
}

/**
 * Update literally every single NFT metadata with the ones given in parameter
 */
export async function batchUpdateMetadata(
  metadatas: NFT["metadata"][],
  contract: Readonly<ContractOptions<[]>>
) {
  const uri = await upload({
    client,
    files: Object.values(metadatas),
  });

  const newNftsRepo = uri[0].substring(0, uri[0].lastIndexOf("/")) + "/";

  const updateMetadataTx = updateBatchBaseURI({
    contract: contract,
    index: 0n,
    uri: newNftsRepo,
  });

  const result = await sendAndConfirmTransaction({
    account: await getAdminAccount(),
    transaction: updateMetadataTx,
  });

  console.log(result);

  return result;
}

export async function createBatchListing() {
  let listingData = [];
  const marketplaceContract = getContract({
    address: import.meta.env.VITE_MARKETPLACE_CONTRACT,
    chain: testChain,
    client,
  });

  console.log(allLandNfts);

  for (const nft of allLandNfts) {
    const listingTx = createListing({
      contract: marketplaceContract,
      tokenId: nft.id,
      assetContractAddress: import.meta.env.VITE_LAND_CONTRACT,
      pricePerToken: "0.001",
    });

    listingData.push(listingTx);
  }
  await sendAndConfirmMulticall(listingData, marketplaceContract);
  const listings = await getAllValidListings({
    contract: marketplaceContract,
  });
  console.log(listings);
}

export async function sendAndConfirmMulticall(
  listTx: Readonly<PreparedTransaction[]>,
  contract: Readonly<ContractOptions<[]>>
) {
  const dataList: `0x${string}`[] = [];

  for (const tx of listTx) {
    const txData = await (
      tx.data as () => Promise<`0x${string}`>
    )()
    dataList.push(txData);
  }

  const batchTx = multicall({
    data: [...dataList],
    contract: contract,
  });
  console.log(batchTx);

  const batchResult = await sendAndConfirmTransaction({
    account: await getAdminAccount(),
    transaction: batchTx,
  });

  console.log(batchResult);
  return batchResult;
}
