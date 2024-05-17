import {
  allLandNfts,
  client,
  getAdminAccount,
  getUserLands,
  landContract,
} from "../thirdweb/provider";
import {
  ContractOptions,
  NFT,
  defineChain,
  getContract,
  sendAndConfirmTransaction,
  sendTransaction,
} from "thirdweb";
import { MetadataAttributes } from "../thirdweb/types";
import {
  SetClaimConditionsParams,
  setClaimConditions,
  totalSupply,
  updateBatchBaseURI,
} from "../thirdweb/11155111/erc721";
import { upload } from "thirdweb/storage";
import { ThirdwebSDK, createMerkleTreeFromAllowList } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { sepolia } from "thirdweb/chains";
import {
  createListing,
  getAllListings,
  getAllValidListings,
} from "thirdweb/extensions/marketplace";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { multicall } from "../thirdweb/11155111/marketplace";

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

export async function createContract(
  name: string,
  primary_sale_recipient: string
) {
  const sdk = new ThirdwebSDK("sepolia", client);
  const metamask = new ethers.providers.InfuraProvider("sepolia");
  const signer: ethers.Signer = new ethers.Wallet(
    import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY,
    metamask
  );
  sdk.updateSignerOrProvider(signer);

  const contractAdress = await sdk.deployer.deployBuiltInContract("nft-drop", {
    name,
    primary_sale_recipient,
  });
  console.log(contractAdress);
}

async function multicallTx(
  listingData: Readonly<`0x${string}`[]>,
  marketplaceContract: Readonly<ContractOptions<[]>>
) {
  const batchTx = multicall({
    data: [...listingData],
    contract: marketplaceContract,
  });
  console.log(batchTx);

  const batchResult = await sendAndConfirmTransaction({
    account: await getAdminAccount(5),
    transaction: batchTx,
  });

  console.log(batchResult);
}

export async function createBatchListing() {
  let listingData = [];
  const marketplaceContract = getContract({
    address: import.meta.env.VITE_MARKETPLACE_CONTRACT,
    chain: defineChain(11155111),
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
    const listingDataPromise: `0x${string}` = await (
      listingTx.data as () => Promise<`0x${string}`>
    )();
    listingData.push(listingDataPromise);
  }
  await multicallTx(listingData, marketplaceContract);
  const listings = await getAllValidListings({
    contract: marketplaceContract,
  });
  console.log(listings);
}
