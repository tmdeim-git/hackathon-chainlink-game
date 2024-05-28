import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Connect from "../thirdweb/auth/Connect";
import { adminAddress } from "../providers/backend/admin";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CartButton from "./CartButton";
import HomeButton from "./HomeButton";

export function Navbar() {
  const account = useActiveAccount();
  const navigate = useNavigate();
  const wallet = useActiveWallet();
  const { pathname } = useLocation();

  const isAdmin = account?.address === adminAddress;

  let pageTitle = "";
  if (pathname === "/admin") {
    pageTitle = "Admin Dashboard";
  } else if (pathname === "/game") {
    pageTitle = "Game Screen";
  } else if (pathname === "/marketplace") {
    pageTitle = "Marketplace";
  }

  return (
    <AppBar style={{ backgroundColor: "#333" }}>
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
          {wallet && pathname !== "/game" && (
            <Button
              onClick={() => navigate("/game")}
              color="primary"
              variant="contained"
              sx={{ fontSize: "16px", marginLeft: "16px" }}
            >
              Retourner au jeu
            </Button>
          )}
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
          {isAdmin && pathname !== "/admin" && (
            <Button
              onClick={() => navigate("/admin")}
              color="primary"
              variant="contained"
              sx={{ fontSize: "16px", marginRight: "10px" }}
            >
              <AdminPanelSettingsIcon
                style={{ fontSize: "24px", verticalAlign: "middle" }}
              />
            </Button>
          )}
          {pathname !== "/marketplace" && (
            <CartButton style={{ marginRight: "10px" }} />
          )}
          <Connect />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
