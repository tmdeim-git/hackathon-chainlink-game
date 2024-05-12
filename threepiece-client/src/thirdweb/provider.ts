import { NFT, createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { inAppWallet, createWallet, Wallet } from "thirdweb/wallets";
import { } from "./11155111/0x3268a076ec2723d3ee842f670839bf3920dc27fb";
import { getNFTs } from "thirdweb/extensions/erc721";
import { Land, Owner, isResource } from "./types";

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
export const lands = await getNFTs({ contract: landContract, includeOwners: true });

export const getUserLands = async (owner: Owner): Promise<Land[]> => {
    const ownedNFTs = lands.filter(nft => nft.owner == owner.address);

    return nftsToLands(ownedNFTs, owner);
}

const nftsToLands = (nfts: NFT[], owner: Owner): Land[] => {
    const lands: Land[] = [];

    for (const nft of nfts) {
        const attributes = nft.metadata.attributes as any;
        lands.push({
            owner: owner,
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

    console.log(lands[0])

    return lands;
}



