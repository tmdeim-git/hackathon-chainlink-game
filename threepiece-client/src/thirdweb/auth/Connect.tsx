import { ConnectButton } from "thirdweb/react";
import { allLands, client, wallets } from "../provider";
import { sepolia } from "thirdweb/chains";
import { startEvent } from "../events";
import { batchAddMetadata, batchRemoveMetadata, batchUpdateMetadata, mintAndClaimLands, updateMetadata } from "../../scripts/scripts";

function Connect() {

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        startEvent();
        const address = wallet.getAccount().address;
        wallet.switchChain(sepolia);
        console.log("TODO: Redirect to game...")
      }} />
  );
}

export default Connect;