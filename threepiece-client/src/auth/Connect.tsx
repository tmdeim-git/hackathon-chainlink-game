import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
  createWallet("walletConnect"),
];



const client = createThirdwebClient({
  clientId: import.meta.env.VITE_CLIENT_ID,
});


function Connect() {
  return (
    <div>
      <ConnectButton client={client} wallets={wallets} />
    </div>
  );
}

export default Connect;