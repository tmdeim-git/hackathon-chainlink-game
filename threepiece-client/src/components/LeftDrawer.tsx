import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { GameTile } from "../game/GameTile";
import MetadataCard from "./MetadataCard";
import Skeleton from "@mui/material/Skeleton";
import { useGetActiveListings } from "../providers/marketplace-provider";
import NftCard from "./NftCard";
import { useActiveAccount } from "thirdweb/react";
import { ResourceType } from "../thirdweb/types";
import { refreshNfts } from "../providers/store";

export default function LeftDrawer({
  selectedTile,
}: {
  selectedTile: GameTile;
}) {
  const allListings = useGetActiveListings();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const account = useActiveAccount();

  if (!selectedTile) return null;
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (newOpen) {
      setLoading(true);
    }
    if (!newOpen) {
      // refreshNfts();
    }
  };

  const listingId = () => {
    return allListings.find(
      (listing) => listing.tokenId === selectedTile._land.nft.id
    )?.id;
  };

  const selectedListing = allListings.find(
    (listing) => listing.tokenId === selectedTile._land.nft.id
  );

  const buyListing = (
    <Box
      sx={{
        width: 450,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      role="presentation"
    >
      {loading && (
        <Skeleton
          sx={{
            height: "60%",
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgba(27, 33, 41, 1)",
          }}
          animation="wave"
          variant="rectangular"
        />
      )}
      <iframe
        src={"https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x8a3E738913D14FD1C2CC2595497D3C0fa86f818f&chain=%7B%22name%22%3A%22Polygon+zkEVM+Cardona+Testnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F2442.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22zkevm-testnet-cardona%22%2C%22chainId%22%3A2442%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22polygon-zkevm-cardona-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmNmJZkQgx9RcFLS3rvxQTVYcPfyAFPr667keHTUxB9PDv%22%2C%22width%22%3A122%2C%22height%22%3A135%2C%22format%22%3A%22png%22%7D%7D&clientId=9e50d55ae91ef7980d6d42fb46e30278&directListingId=" + listingId() + "&theme=dark&primaryColor=purple"}
        width="600px"
        height="600px"
        style={{
          maxWidth: "90%",
          border: "none",
          borderRadius: "0px",
          display: loading ? "none" : "block",
        }}
        id="marketplace-iframe"
        onLoad={() => {
          setLoading(false);
          console.log("loaded");
        }}
      ></iframe>

      {!loading ? (
        <MetadataCard selectedTile={selectedTile} />
      ) : (
        <Skeleton
          sx={{
            height: "30%",
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          animation="wave"
          variant="rectangular"
        />
      )}
    </Box>
  );

  const newListing = (
    <Box
      sx={{
        width: 450,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      role="presentation"
    >
      <NftCard
        selectedTile={selectedTile}
        selectedListing={selectedListing}
        state="list"
      />
      <MetadataCard selectedTile={selectedTile} />
    </Box>
  );

  const cancelListing = (
    <Box
      sx={{
        width: 450,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      role="presentation"
    >
      <NftCard
        selectedTile={selectedTile}
        selectedListing={selectedListing}
        state={"cancel"}
      />
      <MetadataCard selectedTile={selectedTile} />
    </Box>
  );

  const viewListing = (
    <Box
      sx={{
        width: 450,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      role="presentation"
    >
      <NftCard
        selectedTile={selectedTile}
        selectedListing={selectedListing}
        state={"view"}
      />
      <MetadataCard selectedTile={selectedTile} />
    </Box>
  );

  return (
    <div>
      {
        <>
          {account.address === selectedTile._land.ownerAddress &&
            listingId() == null ? (
            <Button variant="contained" onClick={toggleDrawer(true)}>
              List on Marketplace
            </Button>
          ) : listingId() != null &&
            account.address !== selectedTile._land.ownerAddress ? (
            <Button variant="contained" onClick={toggleDrawer(true)}>
              Buy This Land
            </Button>
          ) : account.address === selectedTile._land.ownerAddress &&
            listingId() != null ? (
            <Button variant="contained" onClick={toggleDrawer(true)}>
              Cancel Listing
            </Button>
          ) : (
            <Button variant="contained" onClick={toggleDrawer(true)}>
              View NFT
            </Button>
          )}
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {account.address === selectedTile._land.ownerAddress &&
              listingId() == null ? (
              newListing
            ) : listingId() != null &&
              account.address !== selectedTile._land.ownerAddress ? (
              buyListing
            ) : account.address === selectedTile._land.ownerAddress &&
              listingId() != null ? (
              cancelListing
            ) : (
              viewListing
            )}
          </Drawer>
        </>
      }
    </div>
  );
}
