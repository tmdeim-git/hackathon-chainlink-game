import { ConnectButton } from "thirdweb/react";
import { client, getUserLands, wallets } from "../provider";
import { Owner } from "../types";
import { sepolia } from "thirdweb/chains";

function Connect() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectButton={{ label: "Play" }}
      onConnect={async (wallet) => {
        const address = wallet.getAccount().address;
        wallet.switchChain(sepolia);
        const owner: Owner = { address };
        await getUserLands(owner);
        console.log("TODO: Redirect to game...")
      }} />
  );
}

export default Connect;