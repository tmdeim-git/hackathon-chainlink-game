
import { LazyMintParams, claimTo, lazyMint } from "thirdweb/extensions/erc721";
import config from "./lands.json";
import { client, landContract, allLands, getAdminAccount } from "../thirdweb/provider";
import { NFT, sendAndConfirmTransaction } from "thirdweb";
import { Land, Resource } from "../thirdweb/types";
import { updateBatchBaseURI } from "../thirdweb/11155111/erc721";
import { download, upload } from "thirdweb/storage";

export async function mintAndClaimLands() {
    const nfts: LazyMintParams['nfts'] = [];
    const admin = await getAdminAccount();

    for (const land of config.lands) {
        nfts.push(
            {
                name: `ThreePiece Land #${land.id + 1}`,
                description: "A land full of mystery...",
                image: "ipfs://QmcJoG6Sgh3Mhv94tXANDrjom7JVv3adpW5igX9VbaHyYN",
                attributes: [
                    {
                        trait_type: "id",
                        value: land.id + 1
                    }, {
                        trait_type: "resources",
                        value: land.resources
                    }
                ]
            }
        );
    }

    console.log(landContract)
    const mintTx = lazyMint({
        contract: landContract,
        nfts
    });

    const claimTx = claimTo({
        contract: landContract,
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

export async function updateMetadata(nftToChange: NFT, newMetadata: NFT['metadata']) {
    const currentBaseNftsRepo = nftToChange.tokenURI.substring(0, nftToChange.tokenURI.lastIndexOf('/')) + '/';

    const metadatas: Record<number, NFT['metadata']> = {};
    for (const land of allLands) {
        const res = await download({
            client,
            uri: `${currentBaseNftsRepo}${land.nft.id}`
        });
        metadatas[Number(land.nft.id)] = await res.json();
    }

    metadatas[Number(nftToChange.id)] = newMetadata;

    const uri = await upload({
        client,
        files: Object.values(metadatas),
    });

    const newNftsRepo = uri[0].substring(0, uri[0].lastIndexOf('/')) + '/';

    const updateMetadataTx = updateBatchBaseURI({
        contract: landContract,
        index: 0n,
        uri: newNftsRepo,
    })

    const result = await sendAndConfirmTransaction({
        account: await getAdminAccount(),
        transaction: updateMetadataTx
    });

    console.log(result);
}

export async function generateJson() {
    const list = []

    for (let i = 0; i < config.rows; i++) {
        for (let j = 0; j < config.cols; j++) {
            list.push({
                id: i * config.cols + j,
                resources: "water"
            })
        }
    }

    console.log(JSON.stringify(list))
}