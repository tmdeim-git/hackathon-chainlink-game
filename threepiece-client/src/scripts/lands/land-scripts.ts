import { ContractOptions, NFT, PreparedTransaction, sendAndConfirmTransaction } from "thirdweb";
import { LazyMintParams, burn, lazyMint, claimTo } from "thirdweb/extensions/erc721";
import { allLandNfts } from "../../providers/land-provider";
import { landContract, landStableContract } from "../../providers/web3-provider";
import { getAdminAccount } from "../erc721-scripts";
import { Land, Resource, LandEvent, isValidLand, LandNFTAttributes } from "../../thirdweb/types";
import config from './config.json'
import { batchUpdateMetadata } from "../erc721-scripts";
import { multicall } from "../../thirdweb/generated-contracts/nft-drop";

/**
 * Burn, create and claim NFTs to the admin account
 */
export async function resetLandNfts(contract?: Readonly<ContractOptions<[]>>) {
    const contractToUse = contract || landContract;
    const nfts: LazyMintParams['nfts'] = [];

    for (const configLand of config.lands) {
        const land: Land = {
            id: configLand.id,
            resources: configLand.resources as Resource[],
            event: configLand.event as LandEvent
        };

        if (!isValidLand(land))
            throw new Error('JSON contains errors for land id: ' + configLand.id);

        const attributes: LandNFTAttributes = [
            {
                trait_type: "id",
                value: land.id + 1
            }, {
                trait_type: "resources",
                value: land.resources
            }, {
                trait_type: "event",
                value: land.event
            }
        ];

        nfts.push(
            {
                name: `ThreePiece Land #${land.id + 1}`,
                description: "A land full of mystery...",
                image: "ipfs://QmcJoG6Sgh3Mhv94tXANDrjom7JVv3adpW5igX9VbaHyYN",
                attributes: attributes
            }
        );
    }

    const burnTxList = []
    console.log(allLandNfts);

    for (const nft of allLandNfts) {
        const burnTx = burn({
            contract: contractToUse,
            tokenId: nft.id
        });
        burnTxList.push(burnTx)
    };

    const mintTx = lazyMint({
        contract: contractToUse,
        nfts
    });

    const admin = await getAdminAccount();
    const claimTx = claimTo({
        contract: contractToUse,
        quantity: BigInt(config.lands.length),
        to: admin.address
    });

    const batchResult = await landSendAndConfirmMulticall([...burnTxList, mintTx, claimTx], contractToUse)

    console.log(batchResult);
}

export async function claimLand(address: string, landId: bigint) {
    const account = await getAdminAccount();

    // prepare NFT transfer transaction from admin to user

    // prepare gas bill to user

    // if gas is paid, send and confirm nft transfer transaction
}

/**
 * Update literally every single NFT metadata from the STABLE contract with with the ones from the CURRENT contract
 */
export async function batchUpdateStable(nftList: NFT[]) {
    return await batchUpdateMetadata(nftList.map(n => n.metadata), landStableContract);
}

async function landSendAndConfirmMulticall(
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

/**
 * Used to create the JSON for the initial lands
 */
export async function outputLandJson() {
    const list = []

    for (let i = 0; i < config.rows; i++) {
        for (let j = 0; j < config.cols; j++) {
            const land: Land = {
                id: i * config.cols + j,
                resources: [Resource.Water],
                event: LandEvent.None
            }
            list.push(land)
        }
    }

    console.log(JSON.stringify(list))
}