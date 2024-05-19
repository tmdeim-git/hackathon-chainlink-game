import { ConnectButton } from "thirdweb/react";
import { authWalletAtom, client, wallets } from "../provider";
import { sepolia } from "thirdweb/chains";
import { startEvent } from "../events";
import { useSetAtom } from "jotai";

function Connect() {
  const setConnectedWallet = useSetAtom(authWalletAtom);
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        setConnectedWallet(wallet);
        startEvent();
        wallet.switchChain(sepolia);
        console.log("TODO: Redirect to game...");
      }}
    />
  );
}

export default Connect;
