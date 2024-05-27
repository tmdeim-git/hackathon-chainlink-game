import { getContract, sendAndConfirmTransaction } from "thirdweb";
import {
  activeTrades,
  approveCurrencyToken,
  cancelTrade,
  executeTrade,
  getTradesByOwner,
  openTrade,
} from "../../../../thirdweb/generated-contracts/marketplace";
import { Account } from "thirdweb/wallets";
import { LandNFT } from "../../../../thirdweb/types";
import {
  landContract,
  marketplaceLandContract,
  testChain,
} from "../../../web3-provider";
import { approve as approveNFT } from "../../../../thirdweb/generated-contracts/nft-drop";
import { approve as approveCurrency } from "thirdweb/extensions/erc20";

export async function createLandTrade(
  account: Account,
  nft: LandNFT,
  price: bigint
) {
  console.log(account, nft, price);
  const approved = approveNFT({
    to: marketplaceLandContract.address,
    tokenId: nft.id,
    contract: landContract,
  });

  const approvedResult = await sendAndConfirmTransaction({
    transaction: approved,
    account: account,
  });

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
  const listedTrades = await activeTrades({
    arg_0: BigInt(index),
    contract: marketplaceLandContract,
  });

  return listedTrades;
}

export async function executeLandTrade(account: Account, nft: LandNFT) {
  const trade = await activeTrades({
    arg_0: BigInt(nft.id),
    contract: marketplaceLandContract,
  });

  const approved = approveCurrency({
    spender: marketplaceLandContract.address,
    amount: Number(trade[2]),
    contract: getContract({
      address: "0x5576815a38A3706f37bf815b261cCc7cCA77e975",
      chain: testChain,
      client: marketplaceLandContract.client,
    }),
  });

  console.log(approved);

  const approvedResult = await sendAndConfirmTransaction({
    transaction: approved,
    account: account,
  });

  console.log(approvedResult);

  const tx = executeTrade({
    item: nft.id,
    contract: marketplaceLandContract,
  });

  console.log(tx);

  const result = await sendAndConfirmTransaction({
    transaction: tx,
    account: account,
  });

  console.log(result);

  return result;
}
