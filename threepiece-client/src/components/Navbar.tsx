import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Connect from "../thirdweb/auth/Connect";
import { adminAddress } from "../providers/backend/admin";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";
import CartButton from "./CartButton";
import HomeButton from "./HomeButton";
import BackToGameButton from "./BackToGame";

import {
  changePlayerNameNft,
  useGetPlayerByAddress,
} from "../providers/player-provider";
import GoToAdminPageButton from "./GoToAdminPage";
import EditButton from "./EditButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { pathname } = useLocation();

  const player = useGetPlayerByAddress(account?.address || "");
  const playerName = player?.nft.metadata.name;
  const playerLevel = player?.nft.metadata.attributes[0].value;

  const isAdmin = account?.address === adminAddress;

  const handleOpen = (name: string) => {
    setNewName(name);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAccept = async () => {
    await changePlayerNameNft(account.address, newName);
    console.log("New name accepted:", newName);
    handleClose();
  };

  let pageTitle = "";
  if (pathname === "/admin") {
    pageTitle = "Admin Dashboard";
  } else if (pathname === "/game") {
    pageTitle = "Game Screen";
  } else if (pathname === "/marketplace") {
    pageTitle = "Item Store";
  }

  return (
    <AppBar style={{ position: "relative", backgroundColor: "#333" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <HomeButton
            style={{ marginRight: "16px", verticalAlign: "middle" }}
          />
          {wallet && pathname !== "/game" && <BackToGameButton />}
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontWeight: "bold",
              fontFamily: '"Press Start 2P", cursive',
              fontSize: "26px",
              lineHeight: "0.6",
            }}
          >
            {pageTitle}
          </Typography>
          {player && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <p>{`Welcome ${playerName} [Level ${playerLevel}]`}</p>
              <EditButton onOpen={handleOpen} style={{ marginLeft: "8px" }} />
            </div>
          )}
          {isAdmin && pathname !== "/admin" && (
            <GoToAdminPageButton
              style={{ fontSize: "24px", verticalAlign: "middle" }}
            />
          )}
          {wallet && pathname !== "/marketplace" && (
            <CartButton style={{ marginRight: "10px" }} />
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                color="black"
              >
                Change Name
              </Typography>
              <TextField
                label="New name:"
                fullWidth
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                sx={{ mt: 2 }}
              />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button
                  onClick={handleAccept}
                  color="primary"
                  variant="contained"
                >
                  Accept
                </Button>
              </Box>
            </Box>
          </Modal>
          <Connect />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
