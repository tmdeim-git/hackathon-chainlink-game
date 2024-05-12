import { ConnectButton } from "thirdweb/react";
import { client, wallets } from "../client";

function Connect() {
  return (
    <ConnectButton client={client} wallets={wallets} connectButton={{ label: "Play" }} />
  );
}

export default Connect;