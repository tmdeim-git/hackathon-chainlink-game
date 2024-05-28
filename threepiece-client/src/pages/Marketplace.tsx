import { useEffect, useState } from "react";
import {
  useActiveAccount,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";
import NftCard from "../components/NftCard";
import { Land } from "../thirdweb/types";
import { Account } from "thirdweb/wallets";
import { store } from "../providers/store";
import { allLandsAtom, useGetPlayerLands } from "../providers/land-provider";
import { useAtomValue } from "jotai";
import {
  allListedLandNftsAtom,
  getUserListedLandsNfts,
  useGetMarketplaceLandsNfts,
  useGetUserListedLandsNfts,
} from "../providers/marketplace-provider";

export default function Marketplace() {
  const account = useActiveAccount();
  const status = useActiveWalletConnectionStatus();

  const markedplaceListedLands = useGetMarketplaceLandsNfts(account?.address); // listed
  const playerListedLands = useGetUserListedLandsNfts(account?.address); // owned listed
  const playerLands = useGetPlayerLands(account?.address); // owned

  if (!account) return <div>Loading...</div>;

  console.log(status);
  const allLands: Land[] = store.get(allLandsAtom);

  console.log(playerListedLands);

  return (
    <div style={{ height: "100%" }}>
      <h1>My NFTs</h1>
      <NftCard lands={playerLands} account={account} type={"owned"} />
      <h1>My Listed NFTs</h1>
      <NftCard
        lands={playerListedLands.map((l) => l.land)}
        account={account}
        type={"listed"}
      />
      <h1>Marketplace</h1>
      <NftCard
        lands={markedplaceListedLands.map((l) => l.land)}
        account={account}
        type={"Marketplace"}
      />
    </div>
  );
}
