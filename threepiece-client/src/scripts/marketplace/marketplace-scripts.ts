import { allLandNfts } from "../../providers/land-provider";
import { sendAndConfirmMulticall } from "../erc721-scripts";
import { createListing, getAllValidListings } from "thirdweb/extensions/marketplace";
import { marketplaceContract } from "../../providers/marketplace-provider";

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

    const result = await sendAndConfirmMulticall(allListingTx, marketplaceContract);

    console.log(result);

    const listings = await getAllValidListings({
        contract: marketplaceContract,
    });

    console.log(listings);
}