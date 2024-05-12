import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { inAppWallet, createWallet } from "thirdweb/wallets";

export const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("com.trustwallet.app"),
    createWallet("app.phantom"),
    createWallet("walletConnect"),
];

export const client = createThirdwebClient({
    clientId: import.meta.env.VITE_CLIENT_ID,
});

export const contract = getContract({
    address: import.meta.env.VITE_CONTRACT,
    chain: sepolia,
    client: client
});