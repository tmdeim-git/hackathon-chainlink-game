import { ethers } from "ethers";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { LazyMintParams, claimTo, lazyMint, setTokenURI } from "thirdweb/extensions/erc721";
import config from "./lands.json";
import { client, getUserLands, landContract } from "../thirdweb/provider";
import { sendAndConfirmTransaction } from "thirdweb";
import { Land, LandNFTMetaData, Resource } from "../thirdweb/types";
import { metadataFrozenEvent, tokenURI, updateBatchBaseURI } from "../thirdweb/11155111/erc721";
import { upload } from "thirdweb/storage";

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
    const createdLands = await getUserLands(admin.address);

    for (const { nftMetadata } of createdLands) {
        console.log(nftMetadata)
        await updateMetadata(nftMetadata, nftMetadata);
    }
}

export async function updateMetadata(nftMetadata: LandNFTMetaData, newMetadata: Partial<LandNFTMetaData>) {

    const uri = await upload({
        client,
        files: [newMetadata],
    });

    console.log(uri)
    console.log(nftMetadata.id)
    const updateMetadataTx = setTokenURI({
        contract: landContract,
        tokenId: nftMetadata.id,
        uri: uri
    })
    console.log(updateMetadataTx)

    const result = await sendAndConfirmTransaction({
        account: admin,
        transaction: updateMetadataTx
    });

    console.log(result)
}