import { sendAndConfirmTransaction } from "thirdweb";
import {
  activeTrades,
  cancelTrade,
  executeTrade,
  getAll,
  getTradesByOwner,
  openTrade,
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

export async function getListedNFTsByOwner(owner: string) {
  const trades = await getTradesByOwner({
    owner: owner,
    contract: marketplaceLandContract,
  });

  return trades;
}

export async function cancelListing(account: Account, tradeId: bigint) {
  const tx = cancelTrade({
    item: tradeId,
    contract: marketplaceLandContract,
  });

  const result = await sendAndConfirmTransaction({
    transaction: tx,
    account: account,
  });

  return result;
}


export async function getListedByIndex(index: bigint) {
  const listedTrades = await activeTrades(
    {
      arg_0: BigInt(index),
      contract: marketplaceLandContract,
    }
  )

  return listedTrades;
}

export async function executeLandTrade(
  account: Account,
  nft: LandNFT,
) {
  const tx = executeTrade({
    item: nft.id,
    contract: marketplaceLandContract,
  });

  const result = await sendAndConfirmTransaction({
    transaction: tx,
    account: account,
  });

  return result;
}