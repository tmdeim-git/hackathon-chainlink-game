import { Chain, ContractOptions, createThirdwebClient, defineChain, getContract } from "thirdweb";
import { getNFTs } from "thirdweb/extensions/erc721";
import { polygonAmoy } from "thirdweb/chains";

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

export const thirdwebMultichainRegistry = getContract({
    client: thirdwebClient,
    chain: defineChain(137), // don't touch this
    address: "0xcdAD8FA86e18538aC207872E8ff3536501431B73", // don't touch this
});


// CONTRACTS

export const landContract = getContract({
    address: import.meta.env.VITE_LAND_CONTRACT,
    chain: testChain,
    client: thirdwebClient,
});

export const vrfContract = getContract({
    address: import.meta.env.VITE_VRF_CONTRACT,
    chain: polygonAmoy,
    client: thirdwebClient,
});

export async function getAllLandNFTs() {
    const landNfts = await getTheNFTs(landContract);
    console.log(landNfts);

    return landNfts;
}

async function getTheNFTs(contract: Readonly<ContractOptions<[]>>) {
    return (await getNFTs({
        contract: contract,
        count: Number.MAX_SAFE_INTEGER,
        includeOwners: true
    })).filter(n => n.owner)

}



