import Button from "@mui/material/Button";
import { getUserLands } from "../providers/land-provider";
import { useActiveAccount } from "thirdweb/react";
import { Land } from "../thirdweb/types";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  createLandTrade,
  getListedNFTsByOwner,
} from "../providers/backend/scripts/marketplace/marketplace-scripts";

export default function NftCard() {
  const wallet = useActiveAccount();
  const [lands, setLands] = useState<Land[]>([]);
  getUserLands(wallet?.address).then((lands) => {
    setLands(lands);
  });
  getListedNFTsByOwner().then((lands) => {
    console.log(lands);
  });
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <h1>My NFTs</h1>
      <ImageList
        sx={{ width: "auto", height: "auto" }}
        cols={4}
        rowHeight={500}
      >
        {lands?.map((land) => (
          <ImageListItem key={land.id}>
            <img
              srcSet="https://ipfs.io/ipfs/QmcJoG6Sgh3Mhv94tXANDrjom7JVv3adpW5igX9VbaHyYN"
              src="https://ipfs.io/ipfs/QmcJoG6Sgh3Mhv94tXANDrjom7JVv3adpW5igX9VbaHyYN"
              alt={land.nft.metadata.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={land.nft.metadata.name}
              subtitle={land.nft.metadata.description}
              key={land.id}
              actionIcon={
                <Button
                  aria-label={`info about ${land.nft.metadata.name}`}
                  variant="contained"
                  onClick={async () =>
                    await createLandTrade(wallet, land.nft, 1000n)
                  }
                  key={land.id}
                >
                  List NFT
                </Button>
              }
            />
          </ImageListItem>
        )) || <div>You don't have any NFTs.</div>}
      </ImageList>
      <h1>My Listed NFTs</h1>
    </div>
  );
}
