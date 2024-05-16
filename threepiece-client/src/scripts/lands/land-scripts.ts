import { ContractOptions, sendAndConfirmTransaction } from "thirdweb";
import { LazyMintParams, burn, lazyMint, claimTo } from "thirdweb/extensions/erc721";
import { multicall } from "../../thirdweb/11155111/erc721";
import { getAdminAccount, allLandNfts, landContract } from "../../thirdweb/provider";
import { Land, Resource, LandEvent, isValidLand, LandNFTAttributes } from "../../thirdweb/types";
import config from './config.json'

/**
 * Burn, create and claim NFTs to the admin account
 */
export async function resetLandNfts(contract?: Readonly<ContractOptions<[]>>) {
    const contractToUse = contract || landContract;
    const nfts: LazyMintParams['nfts'] = [];
    const admin = await getAdminAccount();

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

    const burnData = []
    console.log(allLandNfts);

    for (const nft of allLandNfts) {
        const burnTx = burn({
            contract: contractToUse,
            tokenId: nft.id
        });
        burnData.push(await (burnTx.data as () => Promise<`0x${string}`>)())
    };

    const mintTx = lazyMint({
        contract: contractToUse,
        nfts
    });
    const mintData = await (mintTx.data as () => Promise<`0x${string}`>)()

    const claimTx = claimTo({
        contract: contractToUse,
        quantity: BigInt(config.lands.length),
        to: admin.address
    });
    const claimData = await (claimTx.data as () => Promise<`0x${string}`>)()

    const batchTx = multicall({
        data: [...burnData, mintData, claimData],
        contract: contractToUse
    })

    const batchResult = await sendAndConfirmTransaction({
        account: admin,
        transaction: batchTx
    })

    console.log(batchResult);
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