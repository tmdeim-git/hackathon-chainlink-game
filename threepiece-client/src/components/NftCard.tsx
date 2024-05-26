import Button from "@mui/material/Button";
import { getUserLands } from "../providers/land-provider";
import { useActiveAccount } from "thirdweb/react";
import { Land } from "../thirdweb/types";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  cancelListing,
  createLandTrade,
  executeLandTrade,
  getListedNFTsByOwner,
} from "../providers/backend/scripts/marketplace/marketplace-scripts";
import { Account } from "thirdweb/wallets";
import { adminAccount } from "../providers/backend/admin";

export default function NftCard({
  lands,
  wallet,
  type,
}: {
  lands: Land[];
  wallet: Account;
  type: string;
}) {
  return (
    <div style={{ height: "50%", position: "relative" }}>
      <ImageList
        sx={{ width: "auto", height: "auto" }}
        cols={4}
        rowHeight={500}
      >
        {(lands.length != 0 &&
          lands?.map((land) => (
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
                  <>
                    <Button
                      aria-label={`info about ${land.nft.metadata.name}`}
                      variant="contained"
                      onClick={async () =>
                        type === "owned"
                          ? await createLandTrade(wallet, land.nft, 1000n)
                          : type === "listed"
                          ? await cancelListing(wallet, land.nft.id)
                          : await executeLandTrade(adminAccount, land.nft)
                      }
                      key={land.id}
                    >
                      {type === "owned"
                        ? "List"
                        : type === "listed"
                        ? "Cancel Listing"
                        : "Buy NFT"}
                    </Button>
                  </>
                }
              />
            </ImageListItem>
          ))) || (
          <div style={{ height: "300px", width: "100vw", textAlign: "center" }}>
            You don't have any NFTs.
          </div>
        )}
      </ImageList>
    </div>
  );
}
