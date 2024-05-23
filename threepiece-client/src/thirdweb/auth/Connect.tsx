import {
  ConnectButton,
  useActiveWallet,
  useConnect,
  useDisconnect,
  useSetActiveWallet,
  useSetActiveWalletConnectionStatus
} from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { testChain, thirdwebClient } from "../../providers/web3-provider";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
  createWallet("walletConnect")
];

function Connect() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <ConnectButton
      client={thirdwebClient}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        wallet.switchChain(testChain);
        const setWallet = useSetActiveWallet();
        setWallet(wallet);
        if (pathname === "/login") navigate("/game");
      }}
    />
  );
}

export default Connect;
