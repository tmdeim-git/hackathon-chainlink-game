import { ConnectButton } from "thirdweb/react";
import { client, getUserLands, lands, wallets } from "../provider";
import { sepolia } from "thirdweb/chains";
import { startEvent } from "../events";
import { mintAndClaimLands, updateMetadata, update } from "../../scripts/lands";

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
        await getUserLands(address);
        console.log("TODO: Redirect to game...")
      }} />
  );
}

export default Connect;