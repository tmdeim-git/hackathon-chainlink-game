import { Land, MetadataAttributes } from "../thirdweb/types";
import { adminAddress } from "./backend/admin";
import { batchUpdateAttribute } from "./backend/scripts/erc721-scripts";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";
import { Account } from "thirdweb/wallets";
import { landContract } from "./web3-provider";
import { allLandNfts } from "./land-provider";
import { ContractOptions, NFT } from "thirdweb";

export async function resetLands(account: Account) {
    if (account.address === adminAddress) {
        return await resetLandNfts();
    }
}

export async function batchUpdateAttributeLand(
    account: Account, 
    contract: Readonly<ContractOptions<[]>>,
    newAttributes: MetadataAttributes, 
) {
    if (account.address === adminAddress) {
        const nftList = allLandNfts;
        return await batchUpdateAttribute(newAttributes, nftList, contract);
    }
}

/*updatedAttributes: MetadataAttributes, nftList: NFT[], contract: Readonly<ContractOptions<[]>>*/