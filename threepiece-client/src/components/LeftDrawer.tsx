import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { GameTile } from "../game/GameTile";
import MetadataCard from "./MetadataCard";
import Skeleton from "@mui/material/Skeleton";
import { useGetActiveListings } from "../providers/marketplace-provider";

export default function LeftDrawer({
  selectedTile,
}: {
  selectedTile: GameTile;
}) {
  const allListings = useGetActiveListings();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (newOpen) {
      setLoading(true);
    }
  };

  const listingId = () => {
    return allListings.find(
      (listing) => listing.tokenId === selectedTile._land.nft.id
    )?.id;
  };

  const DrawerList = (
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
        src={`https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x1F9A8816e9C0A53836708f0675cA0eD8B33a6a36&chain=%7B%22name%22%3A%22Polygon+zkEVM+Cardona+Testnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F2442.rpc.thirdweb.com%2F${
          import.meta.env.VITE_THIRDWEB_CLIENT_ID
        }%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22zkevm-testnet-cardona%22%2C%22chainId%22%3A2442%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22polygon-zkevm-cardona-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmNmJZkQgx9RcFLS3rvxQTVYcPfyAFPr667keHTUxB9PDv%22%2C%22width%22%3A122%2C%22height%22%3A135%2C%22format%22%3A%22png%22%7D%7D&clientId=${
          import.meta.env.VITE_THIRDWEB_CLIENT_ID
        }&directListingId=${listingId()}&theme=dark&primaryColor=purple`}
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

  return (
    <div>
      {listingId() != null && (
        <>
          <Button variant="contained" onClick={toggleDrawer(true)}>
            Buy This Land
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </>
      )}
    </div>
  );
}
