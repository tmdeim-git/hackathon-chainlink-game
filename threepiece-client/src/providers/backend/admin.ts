import { thirdwebClient } from "../web3-provider";

import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { sepolia } from "thirdweb/chains";
import { privateKeyToAccount } from "thirdweb/wallets";

// AVOID USING THE ADMIN ACCOUNT/SDK SOMEWHERE ELSE THAN SCRIPTS
export const adminAccount = privateKeyToAccount({
  client: thirdwebClient,
  privateKey: import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY,
});
export const adminSdk = ThirdwebSDK.fromPrivateKey(
  import.meta.env.VITE_METAMASK_ADMIN_PRIVATE_KEY,
  sepolia.rpc,
  thirdwebClient
);

export const adminAddress = adminAccount.address;
