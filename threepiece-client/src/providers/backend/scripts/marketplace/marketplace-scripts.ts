import { sendAndConfirmTransaction } from "thirdweb";
import {
  openTrade,
  trades,
} from "../../../../thirdweb/generated-contracts/marketplace";
import { Account } from "thirdweb/wallets";
import { LandNFT } from "../../../../thirdweb/types";
import { marketplaceLandContract } from "../../../web3-provider";

export async function createLandTrade(
  account: Account,
  nft: LandNFT,
  price: bigint
) {
  console.log(account, nft, price);
  const tx = openTrade({
    item: nft.id,
    price: price,
    contract: marketplaceLandContract,
  });

  const result = await sendAndConfirmTransaction({
    transaction: tx,
    account: account,
  });

  return result;
}

export async function getListedNFTsByOwner() {
  return await trades({
    contract: marketplaceLandContract,
    arg_0: 1n,
  });
}
