import { ConnectButton } from "thirdweb/react";
import { thirdwebClient } from "../../providers/web3-provider";
import { testChain } from "../../providers/web3-provider";
import { startEvent } from "../events";
import { createNftdropContract, resetLandNfts } from "../../scripts/lands/land-scripts";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { allLandNfts } from "../../providers/land-provider";

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
  return (
    <ConnectButton
      client={thirdwebClient}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        startEvent();
        const address = wallet.getAccount().address;
        wallet.switchChain(testChain);
        console.log("TODO: Redirect to game...")
      }} />
  );
}

export default Connect;