import { allLandNfts } from "../../providers/land-provider";
import { createListing, getAllValidListings } from "thirdweb/extensions/marketplace";
import { marketplaceContract } from "../../providers/marketplace-provider";
import { PreparedTransaction, ContractOptions, sendAndConfirmTransaction } from "thirdweb";
import { multicall } from "../../thirdweb/generated-contracts/marketplace-v3";
import { getAdminAccount } from "../erc721-scripts";

export async function createBatchListing() {
    const allListingTx = [];

    for (const nft of allLandNfts) {
        const listingTx = createListing({
            contract: marketplaceContract,
            tokenId: nft.id,
            assetContractAddress: import.meta.env.VITE_LAND_CONTRACT,
            pricePerToken: "0.001",
        });

        allListingTx.push(listingTx);
    }

    const result = await marketplaceSendAndConfirmMulticall(allListingTx, marketplaceContract);

    console.log(result);

    const listings = await getAllValidListings({
        contract: marketplaceContract,
    });

    console.log(listings);
}

async function marketplaceSendAndConfirmMulticall(
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
        data: dataList,
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