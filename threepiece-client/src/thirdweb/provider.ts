import {
    NFT,
    createThirdwebClient,
    getContract,
} from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { getNFTs } from "thirdweb/extensions/erc721";
import { Land, LandNFT, LandNFTAttributes, MetadataAttributes, Resource, isValidLand } from "./types";
import { ethers } from "ethers";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { nextTokenIdToMint, totalSupply } from "./11155111/erc721";

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
    client: client,
});

export const landStableContract = getContract({
    address: import.meta.env.VITE_LAND_STABLE_CONTRACT,
    chain: sepolia,
    client: client,
});

// NOTE: This part should usually be protected in an API
export const allLands = await getLands();

export async function getUserLands(ownerAddress: string) {
    const ownedLands = allLands.filter(land => land.ownerAddress == ownerAddress);
    return ownedLands;
}

async function getLands() {
    const nfts = await getNFTs({
        contract: landContract, includeOwners: true, count: Number(await totalSupply({
            contract: landContract
        }))
    });

    return nftsToLands(nfts);
}

export async function claimLand(address: string, landId: number) {
    const account = await getAdminAccount();

    // prepare NFT transfer transaction from admin to user

    // prepare gas bill to user

    // if gas is paid, send and confirm nft transfer transaction
}

export async function getAdminAccount() {
    const metamask = new ethers.InfuraProvider("sepolia");
    const signer: ethers.Signer = new ethers.Wallet(import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY, metamask);

    return await ethers6Adapter.signer.fromEthers({
        signer,
    });
}

function nftsToLands(nfts: NFT[]) {
    const lands: Land[] = [];

    for (const nft of nfts) {
        const landNftAttributes = nft.metadata.attributes as unknown as LandNFTAttributes;
        if (typeof landNftAttributes?.[1]?.value === 'string') {
            landNftAttributes[1].value = JSON.parse(landNftAttributes?.[1]?.value);
        }

        const land: Land = {
            ownerAddress: nft.owner,
            nft: nft as LandNFT,
            id: Number(landNftAttributes?.[0]?.value),
            resources: landNftAttributes?.[1]?.value,
            event: landNftAttributes?.[2]?.value
        }

        if (!isValidLand(land)) {
            console.log(landNftAttributes)
            throw new Error('Problem parsing NFT ' + nft.id);
        }

        lands.push(land)

    }

    return lands;
}