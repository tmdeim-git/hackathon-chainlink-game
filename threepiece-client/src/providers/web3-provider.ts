import { Chain, ContractOptions, createThirdwebClient, defineChain, getContract } from "thirdweb";
import { privateKeyToAccount } from "thirdweb/wallets";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { getNFTs } from "thirdweb/extensions/erc721";

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

export const adminSdk = ThirdwebSDK.fromPrivateKey(import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY, testChain.rpc, thirdwebClient);

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

export async function getAllLandNFTs() {
    const landNfts = await getMyNFTs(landContract);
    console.log(landNfts);

    return landNfts;
}

async function getMyNFTs(contract: Readonly<ContractOptions<[]>>) {
    // const supply = await totalSupply({
    //     contract: landContract
    // })

    // const nftsPromises = [];
    // 
    // for (let i = 0n; i < supply; i++) {
    //     console.log(i);
    // 
    //     console.log(tokenURI({
    //         contract: landContract,
    //         tokenId: i
    //     }));
    // 
    //     nftsPromises.push(getNFT({
    //         contract: landContract,
    //         tokenId: i,
    //         includeOwner: true
    //     }));
    // }
    // 
    // 
    // 
    // const nfts = await executePromisesWithDelay(nftsPromises, 0);
    // 
    // console.log(nfts);
    // 
    // return nfts;
    return (await getNFTs({
        contract: landContract,
        count: 5000,
        includeOwners: true
    })).filter(n => n.owner)

}

async function executePromisesWithDelay(promises, timeout) {
    const delayedResults = [];
    for (let i = 0; i < promises.length; i++) {
        // Wait for the delay before executing the next promise
        await delay(i * timeout);
        try {
            // Execute the promise and push the result into the delayedResults array
            const result = await promises[i];
            console.log(result);

            delayedResults.push(result);
        } catch (error) {
            // If a promise rejects, push undefined into the delayedResults array

            delayedResults.push(undefined);
        }
    }
    return delayedResults;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




