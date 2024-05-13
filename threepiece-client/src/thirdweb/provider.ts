import { NFT, createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { getNFTs } from "thirdweb/extensions/erc721";
import { Land, Owner, Resource } from "./types";

export const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("com.trustwallet.app"),
    createWallet("app.phantom"),
    createWallet("walletConnect"),
];

export const client = createThirdwebClient({
    clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

export const landContract = getContract({
    address: import.meta.env.VITE_LAND_CONTRACT,
    chain: sepolia,
    client: client
});

// NOTE: This part should usually be protected in an API
export const lands = await getLands();

export async function getUserLands(owner: Owner) {
    const ownedLands = lands.filter(land => land.ownerAddress == owner.address);
    return ownedLands;
}

async function getLands() {
    const nfts = await getNFTs({ contract: landContract, includeOwners: true });
    return nftsToLands(nfts);
}


function nftsToLands(nfts: NFT[]) {
    const lands: Land[] = [];

    for (const nft of nfts) {
        const attributes = nft.metadata.attributes as Record<string, MetadataAttributes>;
        console.log(nft)
        lands.push({
            ownerAddress: nft.owner,
            id: Number(attributes[0].value),
            resources: attributes[1].value.split(',').map(resource => {
                if (isResource(resource)) {
                    return resource;
                } else {
                    throw 'Bad resource received: ' + resource;
                }
            }),
        })
    }

    return lands;
}

interface MetadataAttributes {
    trait_type: string
    value: string
}

function isResource(value: string): value is Resource {
    return Object.values(Resource).includes(value as Resource);
}




