import { useEffect, useState } from "react";
import {
  useActiveAccount,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";
import NftCard from "../components/NftCard";
import {
  getListedByIndex,
  getListedNFTsByOwner,
} from "../providers/backend/scripts/marketplace/marketplace-scripts";
import { allLands, getUserLands } from "../providers/land-provider";
import { Land } from "../thirdweb/types";
import { Account } from "thirdweb/wallets";

export default function Marketplace() {
  const account = useActiveAccount();
  const status = useActiveWalletConnectionStatus();
  console.log(status);
  const [lands, setLands] = useState<Land[]>([]);
  const [listedNFTsOwner, setListedNFTsOwner] = useState<Land[]>([]);
  const [allListedLands, setAllListedLands] = useState<Land[]>([]);

  async function userLands(account: Account) {
    const lands = await getUserLands(account?.address);
    setLands(lands);
  }

  async function listedNFTsByOwner(account: Account) {
    const landsListed = await getListedNFTsByOwner(account?.address);
    allLands.filter((land) => {
      landsListed.forEach((listedLand) => {
        if (
          BigInt(land.nft.id) === listedLand.item &&
          account.address === listedLand.poster
        ) {
          setListedNFTsOwner((prev) => [...prev, land]);
        }
      });
    });
  }

  async function getAllListedLands() {
    allLands.filter(async (land) => {
      const totalListed = await getListedByIndex(land.nft.id);
      if (
        totalListed[0] !== "0x0000000000000000000000000000000000000000" &&
        totalListed[0] !== account.address
      ) {
        setAllListedLands((prev) => [...prev, land]);
      }
    });
  }

  useEffect(() => {
    if (account) {
      userLands(account);
      listedNFTsByOwner(account);
      getAllListedLands();
    }
  }, [account]);
  console.log(lands, listedNFTsOwner, allListedLands);
  return (
    <div style={{ height: "100%" }}>
      <h1>My NFTs</h1>
      <NftCard lands={lands} wallet={account} type={"owned"}/>
      <h1>My Listed NFTs</h1>
      <NftCard lands={listedNFTsOwner} wallet={account} type={"listed"} />
      <h1>Marketplace</h1>
      <NftCard lands={allListedLands} wallet={account} type={"Marketplace"} />
    </div>
  );
}
