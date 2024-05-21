import { ConnectButton, useActiveWallet } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { testChain, thirdwebClient } from "../../providers/web3-provider";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("com.trustwallet.app"),
    createWallet("app.phantom"),
    createWallet("walletConnect"),
];

function Connect() {
    const connected = useActiveWallet() != null;
    const navigate = useNavigate();

    // on disconnect
    useEffect(() => {
        if (!connected) {
            navigate('/login');
        }
    }, [connected]);

    return (
        <ConnectButton
            client={thirdwebClient}
            wallets={wallets}
            connectButton={{ label: "Play" }}
            onConnect={async (wallet) => {
                wallet.switchChain(testChain);
            }}
        />
    );
}

export default Connect;