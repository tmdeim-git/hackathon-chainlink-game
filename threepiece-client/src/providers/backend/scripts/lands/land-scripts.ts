import { ContractOptions, NFT, getContract, prepareContractCall, resolveMethod, sendAndConfirmTransaction } from "thirdweb";
import { LazyMintParams, lazyMint, claimTo, burn } from "thirdweb/extensions/erc721";
import config from './config.json'
import { batchUpdateMetadata, sendAndConfirmMulticall } from "../erc721-scripts";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { contractURI } from "thirdweb/extensions/common";
import { Land, Resource, isValidLand, LandNFTAttributes, GameEvent } from "../../../../thirdweb/types";
import { allLandNfts } from "../../../land-provider";
import { landContract, testChain, thirdwebClient, thirdwebMultichainRegistry } from "../../../web3-provider";
import { adminAccount, adminSdk } from "../../admin";

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
            event: configLand.event as GameEvent.Land
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

    console.log(allLandNfts);

    await burnByBatch(allLandNfts, contractToUse);

    const mintTx = lazyMint({
        contract: contractToUse,
        nfts
    });

    const claimTx = claimTo({
        contract: contractToUse,
        quantity: BigInt(config.lands.length),
        to: adminAccount.address
    });

    const batchResult = await sendAndConfirmMulticall([mintTx, claimTx], contractToUse)

    console.log(batchResult);
}

// TODO try to abstract the "burn" into an abstract function
export async function burnByBatch(
    nfts: NFT[],
    contract: Readonly<ContractOptions<[]>>,
    batchLength = 55
) {
    const burnTxList = []

    for (const nft of nfts) {
        const burnTx = burn({
            contract: contract,
            tokenId: nft.id
        });

        burnTxList.push(burnTx)

        if (burnTxList.length === batchLength) {
            console.log(burnTx);

            await sendAndConfirmMulticall(burnTxList, contract);
            burnTxList.length = 0;
        }
    }

    if (burnTxList.length > 0) {
        await sendAndConfirmMulticall(burnTxList, contract);
    }
}

export async function claimLand(address: string, landId: bigint) {
    // prepare NFT transfer transaction from admin to user

    // prepare gas bill to user

    // if gas is paid, send and confirm nft transfer transaction
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
                event: GameEvent.Land.None
            }
            list.push(land)
        }
    }

    console.log(JSON.stringify(list))
}

export async function createNftdropContract() {
    const sdk = ThirdwebSDK.fromSigner(adminSdk.getSigner(), testChain.rpc, thirdwebClient);
    const contractAddress = await sdk.deployer.deployNFTDrop({
        name: "Automatic NFT Drops",
        trusted_forwarders: []
    });
    console.log("Deployed at", contractAddress);


    const contractToAdd = getContract({
        client: thirdwebClient,
        chain: testChain,
        address: contractAddress,
    });

    const metadataURI = await contractURI({
        contract: contractToAdd,
    });

    /* @ts-ignore */
    const tx = prepareContractCall({
        contract: thirdwebMultichainRegistry,
        method: resolveMethod("add"),
        params: [
            /* @ts-ignore */
            adminAccount.address,
            /* @ts-ignore */
            contractToAdd.address,
            /* @ts-ignore */
            contractToAdd.chain.id,
            /* @ts-ignore */
            metadataURI || "",
        ],
    });

    const result = await sendAndConfirmTransaction({
        account: adminAccount,
        transaction: tx,
    });
    console.log("Added to dashboard", result);

    // TODO add to dashboard

    return tx;
}