import { getNFTs } from "thirdweb/extensions/erc721";
import { Chain, createThirdwebClient, getContract } from "thirdweb";

export const polygonZkevmCardona: Chain = {
    id: 2442,
    name: "Polygon zkEVM Cardona Testnet",
    rpc: `https://neat-small-putty.zkevm-cardona.quiknode.pro/10f0c336e759b63153c9f800aa5000031398f2cf/`,
    testnet: true,
};

export const testChain: Chain = polygonZkevmCardona;

export const client = createThirdwebClient({
    clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

export const landContract = getContract({
    address: import.meta.env.VITE_LAND_CONTRACT,
    chain: testChain,
    client,
});

export const landStableContract = getContract({
    address: import.meta.env.VITE_LAND_STABLE_CONTRACT,
    chain: testChain,
    client,
});

export async function getAllLandNFTs() {
    const landNfts = (await getNFTs({
        contract: landContract, includeOwners: true, count: Number.MAX_VALUE
    })).filter(n => n.owner != null);

    return landNfts;
}






