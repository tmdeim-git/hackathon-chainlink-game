import { ethers } from "ethers";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { LazyMintParams, claimTo, lazyMint, setTokenURI } from "thirdweb/extensions/erc721";
import config from "./lands.json";
import { client, getUserLands, landContract, allLands } from "../thirdweb/provider";
import { NFT, sendAndConfirmTransaction } from "thirdweb";
import { Land, LandNFT, Resource } from "../thirdweb/types";
import { metadataFrozenEvent, tokenURI, updateBatchBaseURI } from "../thirdweb/11155111/erc721";
import { download, upload } from "thirdweb/storage";

const metamask = new ethers.InfuraProvider("sepolia");
const signer: ethers.Signer = new ethers.Wallet(import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY, metamask);
const admin = await ethers6Adapter.signer.fromEthers({
    signer,
});

export async function mintAndClaimLands() {
    const nfts: LazyMintParams['nfts'] = [];

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
                        value: "water"
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

export async function generateJson() {
    const list: Land[] = []

    for (let i = 0; i < config.rows; i++) {
        for (let j = 0; j < config.cols; j++) {
            list.push({
                id: i * config.cols + j,
                resources: [Resource.Water]
            })
        }
    }

    console.log(JSON.stringify(list))
}

export async function update() {
    const myLands = (await getUserLands(admin.address))
    const testLand = myLands[0];

    await updateMetadata(testLand.nft, testLand.nft.metadata);
}

export async function updateMetadata(nftToChange: LandNFT, newMetadata: LandNFT['metadata']) {
    const currentNftsRepo = nftToChange.tokenURI.substring(0, nftToChange.tokenURI.lastIndexOf('/'))

    const metadatas: Record<number, LandNFT['metadata']> = {};
    for (const land of allLands) {
        const res = await download({
            client,
            uri: `${currentNftsRepo}/${land.nft.id}`
        });
        metadatas[Number(land.nft.id)] = await res.json();
    }
    metadatas[Number(nftToChange.id)].attributes[0].value = 999;

    const uri = await upload({
        client,
        files: Object.values(metadatas),

    });

    console.log("NEW", uri)
    const newNftsRepo = uri[0].substring(0, uri[0].lastIndexOf('/'))
    console.log("OLD", currentNftsRepo);

    const updateMetadataTx = updateBatchBaseURI({
        contract: landContract,
        index: 0n,
        uri: newNftsRepo,
    })
    /*
        const result = await sendAndConfirmTransaction({
            account: admin,
            transaction: updateMetadataTx
        });

    console.log(result)*/
}