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

  const isAdmin = account?.address === adminAddress;

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
            flexDirection: "row",
          }}
        >
          <div style={{ flexDirection: "row", display: "flex" }}>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography variant="h6" component="div">
                Three Piece
              </Typography>
            </Link>
            <div style={{ display: "flex" }}>
              {wallet && pathname !== "/game" && (
                <Button
                  onClick={() => navigate("/game")}
                  color="primary"
                  variant="contained"
                  sx={{
                    fontSize: "16px",
                    margin: "auto",
                    left: "25px",
                  }}
                >
                  Retourner au jeu
                </Button>
              )}
            </div>
          </div>

          <div>
            {isAdmin && pathname !== "/login" && pathname !== "/game" && (
              <Typography
                variant="h6"
                component="div"
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  marginTop: "-15px",
                  fontWeight: "bold",
                  fontFamily: '"Press Start 2P", cursive',
                }}
              >
                Admin Dashboard
              </Typography>
            )}
          </div>
          <div>
            {pathname === "/game" && (
              <Typography
                variant="h6"
                component="div"
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  marginTop: "-15px",
                  fontWeight: "bold",
                  fontFamily: '"Press Start 2P", cursive',
                }}
              >
                Game Screen
              </Typography>
            )}
          </div>
          {isAdmin && pathname !== "/admin" && pathname !== "/login" && (
            <Button
              onClick={() => navigate("/admin")}
              color="primary"
              variant="contained"
              sx={{
                fontSize: "16px",
                margin: "auto",
                right: "625px",
              }}
            >
              Admin dashboard
            </Button>
          )}
        </Box>
        <Connect />
      </Toolbar>
    </AppBar>
  );
}
