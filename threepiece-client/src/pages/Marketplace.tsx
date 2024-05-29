import { useActiveAccount } from "thirdweb/react";
import NftCard from "../components/NftCard";
import { useGetPlayerLands } from "../providers/land-provider";
import {
  useGetMarketplaceLandsNfts,
  useGetUserListedLandsNfts,
} from "../providers/marketplace-provider";

export default function Marketplace() {
  const account = useActiveAccount();

  const markedplaceListedLands = useGetMarketplaceLandsNfts(account?.address); // listed
  const playerListedLands = useGetUserListedLandsNfts(account?.address); // owned listed
  const playerLands = useGetPlayerLands(account?.address); // owned

  if (!account) return <div>Loading...</div>;

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
