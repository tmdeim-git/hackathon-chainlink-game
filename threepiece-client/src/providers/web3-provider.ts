import { Chain, ContractOptions, createThirdwebClient, defineChain, getContract } from "thirdweb";
import { Wallet, privateKeyToAccount } from "thirdweb/wallets";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { getNFTs } from "thirdweb/extensions/erc721";
import { polygonAmoy, sepolia } from "thirdweb/chains";

const polygonZkevmCardona: Chain = {
    id: 2442,
    name: "Polygon zkEVM Cardona Testnet",
    rpc: `https://2442.rpc.thirdweb.com/` + import.meta.env.VITE_THIRDWEB_CLIENT_ID,
    testnet: true,
};

export const testChain: Chain = polygonZkevmCardona // sepolia

export const thirdwebClient = createThirdwebClient({
    clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

export const adminAccount = privateKeyToAccount({
    client: thirdwebClient,
    privateKey: import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY,
});

export const thirdwebMultichainRegistry = getContract({
    client: thirdwebClient,
    chain: defineChain(137), // don't touch this
    address: "0xcdAD8FA86e18538aC207872E8ff3536501431B73", // don't touch this
});

export const adminSdk = ThirdwebSDK.fromPrivateKey(import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY, sepolia.rpc, thirdwebClient);

// CONTRACTS

export const landContract = getContract({
    address: import.meta.env.VITE_LAND_CONTRACT,
    chain: testChain,
    client: thirdwebClient,
});

export const landStableContract = getContract({
    address: import.meta.env.VITE_LAND_STABLE_CONTRACT,
    chain: testChain,
    client: thirdwebClient,
});

export const vrfContract = getContract({
    address: import.meta.env.VITE_VRF_CONTRACT,
    chain: polygonAmoy,
    client: thirdwebClient,
});

export async function getAllLandNFTs() {
    const landNfts = await getMyNFTs(landContract);
    console.log(landNfts);

    return landNfts;
}

async function getMyNFTs(contract: Readonly<ContractOptions<[]>>) {
    return (await getNFTs({
        contract: contract,
        count: 5000,
        includeOwners: true
    })).filter(n => n.owner)

}



