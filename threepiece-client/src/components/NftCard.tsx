import Button from "@mui/material/Button";
import { Land } from "../thirdweb/types";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  cancelListing,
  createLandTrade,
  executeLandTrade,
} from "../providers/backend/scripts/marketplace/marketplace-scripts";
import { Account } from "thirdweb/wallets";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";

export default function NftCard({
  lands,
  account,
  type,
}: {
  lands: Land[];
  account: Account;
  type: string;
}) {
  const [open, setOpen] = useState(false);

  const [land, setLand] = useState<Land>(lands[2]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                          ? await createLandTrade(account, land.nft, 1000n)
                          : type === "listed"
                          ? await cancelListing(account, land.nft.id)
                          : await executeLandTrade(account, land.nft)
                      }
                      // onClick={
                      //   type === "owned"
                      //     ? () => {
                      //       setLand(land);
                      //       handleClickOpen();
                      //     }
                      //     : () => { }
                      // }
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
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const price = formJson.price;
              handleClose();
            },
          }}
        >
          <DialogTitle>Buy NFT {land?.nft.metadata.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To List your NFT, you need to enter a price and confirm the
              transaction in your wallet.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="price"
              label="Price (in LINK)"
              type="price"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              onClick={async () => {
                await createLandTrade(account, land.nft, 1000n);
              }}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </ImageList>
    </div>
  );
}
