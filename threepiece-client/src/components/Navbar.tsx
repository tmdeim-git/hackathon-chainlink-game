import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Connect from "../thirdweb/auth/Connect";
import { adminAddress } from "../providers/backend/admin";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";

export function Navbar() {
  const account = useActiveAccount();
  const navigate = useNavigate();
  const wallet = useActiveWallet();
  const { pathname } = useLocation();
  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#333", padding: "0.5rem 1rem" }}
    >
      <Toolbar style={{}}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography variant="h6" component="div">
              Three Piece
            </Typography>
          </Link>
          {account?.address === adminAddress ? (
            <Button
              onClick={() => navigate("/admin")}
              color="primary"
              variant="contained"
              sx={{
                fontSize: "16px",
                margin: "auto",
              }}
            >
              Admin dashboard
            </Button>
          ) : null}
          <div style={{ display: "flex" }}>
            <Connect />
            {wallet && pathname !== "/game" && (
              <button onClick={() => navigate("/game")}>
                Retourner au jeu
              </button>
            )}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
