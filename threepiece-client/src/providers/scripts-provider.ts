import { MetadataAttributes } from "../thirdweb/types";
import { adminAddress } from "./backend/admin";
import { batchAddAttribute, batchUpdateAttribute } from "./backend/scripts/erc721-scripts";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";
import { Account } from "thirdweb/wallets";
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



export async function batchAddAttributes(newAttributes: MetadataAttributes,account: Account,contract: Readonly<ContractOptions<[]>> ){
    if(account.address ===adminAddress) {
        const nftList = allLandNfts;
        return await batchAddAttribute(newAttributes,nftList,contract);
    }

}
/*batchAddAttribute(newAttr: MetadataAttributes, nftList: NFT[], contract: Readonly<ContractOptions<[]>>)*/

export async function batchDeleteAttributes(newAttributes: MetadataAttributes,account: Account,contract: Readonly<ContractOptions<[]>> ){
    if(account.address ===adminAddress) {
        return await batchDeleteAttributes(newAttributes,account,contract);
    }

}
/*batchDeleteAttributes( MetadataAttributes,Account, contract: Readonly<ContractOptions<[]>>): Promise<void>*/


