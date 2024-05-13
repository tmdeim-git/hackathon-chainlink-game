import { ConnectButton } from "thirdweb/react";
import { client, getUserLands, wallets } from "../provider";
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
        await getUserLands(address);
        console.log("TODO: Redirect to game...")
      }} />
  );
}

export default Connect;