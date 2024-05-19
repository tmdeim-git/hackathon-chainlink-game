import { ConnectButton } from "thirdweb/react";
import { testChain, thirdwebClient } from "../../providers/web3-provider";
import { startEvent } from "../events";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { allLandNfts } from "../../providers/land-provider";
import { useSetAtom } from "jotai";
import { authWalletAtom } from "../../App";

export const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
  createWallet("walletConnect"),
];

allLandNfts
function Connect() {
  const setConnectedWallet = useSetAtom(authWalletAtom);
  return (
    <ConnectButton
      client={thirdwebClient}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        setConnectedWallet(wallet);
        startEvent();
        wallet.switchChain(testChain);
        console.log("TODO: Redirect to game...")
      }} />
  );
}

export default Connect;
