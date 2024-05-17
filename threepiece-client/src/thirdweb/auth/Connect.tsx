import { ConnectButton } from "thirdweb/react";
import { testChain, client, wallets } from "../provider";
import { startEvent } from "../events";
import { resetLandNfts } from "../../scripts/lands/land-scripts";

function Connect() {

  return (
    <ConnectButton
      client={client}
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