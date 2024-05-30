import {
  NFT,
  ContractOptions,
  sendAndConfirmTransaction,
  PreparedTransaction,
  resolveMethod,
  prepareContractCall,
} from "thirdweb";
import { upload } from "thirdweb/storage";
import {
  getBaseURICount,
  updateBatchBaseURI,
} from "../../../thirdweb/generated-contracts/nft-drop";
import { MetadataAttributes } from "../../../thirdweb/types";
import { thirdwebClient } from "../../web3-provider";
import { adminAccount } from "../admin";

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

  return await batchUpdateMetadata(metadatas, contract, nftList[0].id);
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
    const indexOfTrait = (attributes as any).findIndex(
      (e) => e.trait_type === trait_type
    );
    (attributes as any).splice(indexOfTrait, 1);
  }

  return await batchUpdateMetadata(metadatas, contract, nftList[0].id);
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

  console.log("Updating...", metadatas);

  return await batchUpdateMetadata(metadatas, contract, nftList[0].id);
}

/**
 * Update the metadata for a single NFT with the metadata given
 */
export async function updateMetadata(
  newMetadata: NFT["metadata"],
  nftList: NFT[],
  nftIdToChange: number,
  contract: Readonly<ContractOptions<[]>>
) {
  nftList.find(n => n.id === BigInt(nftIdToChange)).metadata = newMetadata;

  return await batchUpdateMetadata(
    nftList.map((n) => n.metadata),
    contract,
    nftList[0].id
  );
}

/**
 * Update literally every single NFT metadata with the ones given in parameter
 */
export async function batchUpdateMetadata(
  metadatas: NFT["metadata"][],
  contract: Readonly<ContractOptions<[]>>,
  startIndex: bigint
) {
  let uri: string | string[] = await upload({
    client: thirdwebClient,
    files: Object.values(metadatas),
    rewriteFileNames: {
      fileStartNumber: Number(startIndex),
    },
  });

  if (typeof uri !== "string")
    // then its an array of the same base uri, we take the first
    uri = uri[0];
  const newNftsRepo = uri.substring(0, uri.lastIndexOf("/")) + "/";

  const updateMetadataTx = updateBatchBaseURI({
    contract: contract,
    index:
      (await getBaseURICount({
        contract: contract,
      })) - 1n,
    uri: newNftsRepo,
  });

  const result = await sendAndConfirmTransaction({
    account: adminAccount,
    transaction: updateMetadataTx,
  });

  console.log(result);

  return result;
}

// ============== MULTICALL FUNCTIONS ==============

export async function sendAndConfirmMulticall(
  listTx: Readonly<PreparedTransaction[]>,
  contract: Readonly<ContractOptions<[]>>
) {
  const dataList: `0x${string}`[] = [];

  for (const tx of listTx) {
    const txData = await (tx.data as () => Promise<`0x${string}`>)();

    dataList.push(txData);
  }

  // @ts-ignore error ts(2322)
  const batchTx = prepareContractCall({
    contract: contract,
    method: resolveMethod("multicall"),
    params: [
      // @ts-ignore error ts(2322)
      dataList,
    ],
  });
  const batchResult = await sendAndConfirmTransaction({
    account: adminAccount,
    transaction: batchTx,
  });

  console.log(batchResult);
  return batchResult;
}
