
import { LazyMintParams, claimTo, lazyMint } from "thirdweb/extensions/erc721";
import config from "./lands.json";
import { client, allNfts, getAdminAccount } from "../thirdweb/provider";
import { ContractOptions, NFT, sendAndConfirmTransaction } from "thirdweb";
import { Land, LandEvent, LandNFTAttributes, MetadataAttributes, Resource, isValidLand } from "../thirdweb/types";
import { updateBatchBaseURI } from "../thirdweb/11155111/erc721";
import { upload } from "thirdweb/storage";

/**
 * Create and claim NFTs to the admin account
 */
export async function mintAndClaimLands(contract: Readonly<ContractOptions<[]>>) {
    const nfts: LazyMintParams['nfts'] = [];
    const admin = await getAdminAccount();

    for (const configLand of config.lands) {
        const land: Land = {
            id: configLand.id,
            resources: configLand.resources.split(',') as Resource[],
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

    const mintTx = lazyMint({
        contract: contract,
        nfts
    });

    const claimTx = claimTo({
        contract: contract,
        quantity: BigInt(config.lands.length),
        to: admin.address
    });


    const mintResult = await sendAndConfirmTransaction({
        account: admin,
        transaction: mintTx
    });

    console.log(mintResult);

    const claimResult = await sendAndConfirmTransaction({
        account: admin,
        transaction: claimTx
    });

    console.log(claimResult);
}

/**
 * Update the metadata for a single NFT with the metadata given
 */
export async function updateMetadata(nftToChange: NFT, newMetadata: NFT['metadata'], contract: Readonly<ContractOptions<[]>>) {
    const metadatas = allNfts.map(n => n.metadata) as NFT['metadata'][];
    metadatas[Number(nftToChange.id)] = newMetadata;
    return await batchUpdateMetadata(metadatas, contract);
}

/**
 * For every NFT, add a new attribute with a default value
 */
export async function batchAddAttribute(newAttr: MetadataAttributes, contract: Readonly<ContractOptions<[]>>) {
    const metadatas = allNfts.map(n => n.metadata) as NFT['metadata'][];
    console.log(metadatas[0]);

    for (const { attributes } of metadatas) {
        attributes[Object.keys(attributes).length] = newAttr;
    }

    return await batchUpdateMetadata(metadatas, contract);
}

/**
 * For every NFT, remove a single attribute based on the trait_type given
 */
export async function batchRemoveAttribute(trait_type: MetadataAttributes['trait_type'], contract: Readonly<ContractOptions<[]>>) {
    const metadatas = allNfts.map(n => n.metadata) as NFT['metadata'][];

    for (const { attributes } of metadatas) {
        const attributesArr = attributes as unknown as Array<MetadataAttributes>;
        const indexOfTrait = attributesArr.findIndex(e => e.trait_type === trait_type);
        attributesArr.splice(indexOfTrait, 1)
        attributes[indexOfTrait] = attributesArr[indexOfTrait];
    }

    return await batchUpdateMetadata(metadatas, contract);
}

/**
 * For every NFT, update a single attribute based on the trait_type given
 */
export async function batchUpdateAttribute(updatedAttributes: MetadataAttributes, contract: Readonly<ContractOptions<[]>>) {
    const metadatas = allNfts.map(n => n.metadata) as NFT['metadata'][];

    for (const { attributes } of metadatas) {
        const attributesArr = attributes as unknown as Array<MetadataAttributes>;
        const indexOfTrait = attributesArr.findIndex(e => e.trait_type === updatedAttributes.trait_type);
        attributes[indexOfTrait] = updatedAttributes;
    }

    return await batchUpdateMetadata(metadatas, contract);
}

/**
 * Update literally every single NFT metadata from the STABLE contract with with the ones from the CURRENT contract
 */
export async function batchUpdateStable(contract: Readonly<ContractOptions<[]>>) {
    return await batchUpdateMetadata(allNfts.map(n => n.metadata), contract);
}

/**
 * Update literally every single NFT metadata with the ones given in parameter
 */
export async function batchUpdateMetadata(metadatas: NFT['metadata'][], contract: Readonly<ContractOptions<[]>>) {
    const uri = await upload({
        client,
        files: Object.values(metadatas),
    });

    const newNftsRepo = uri[0].substring(0, uri[0].lastIndexOf('/')) + '/';

    const updateMetadataTx = updateBatchBaseURI({
        contract: contract,
        index: 0n,
        uri: newNftsRepo,
    })

    const result = await sendAndConfirmTransaction({
        account: await getAdminAccount(),
        transaction: updateMetadataTx
    });

    console.log(result);

    return result;
}

/**
 * Used to create the JSON for the initial lands
 */
export async function generateJson() {
    const list = []

    for (let i = 0; i < config.rows; i++) {
        for (let j = 0; j < config.cols; j++) {
            list.push({
                id: i * config.cols + j,
                resources: "water",
                hasEvent: 0
            })
        }
    }

    console.log(JSON.stringify(list))
}