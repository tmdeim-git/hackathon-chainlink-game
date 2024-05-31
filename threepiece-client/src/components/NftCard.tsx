import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MetadataChip from "./MetadataChip";
import { GameTile } from "../game/GameTile";
import Stack from "@mui/material/Stack";
import {
  allPlayersNftsAtom,
  useGetPlayerByAddress,
} from "../providers/player-provider";
import { store } from "../providers/store";
import { DirectListing } from "thirdweb/extensions/marketplace";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { listNftById } from "../providers/backend/scripts/marketplace/marketplace-scripts";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Override the text color for the input element
          "& input": {
            color: "white", // Set text color to white
          },
          // Optional: Change the label and border color if needed
          "& label": {
            color: "rgba(255, 255, 255, 0.7)", // Label color in white with some transparency
          },
          "& label.Mui-focused": {
            color: "white", // Label color when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Border color
            },
            "&:hover fieldset": {
              borderColor: "white", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Border color when focused
            },
            "& .MuiInputAdornment-root p": {
              color: "white",
            },
          },
        },
      },
    },
  },
});

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

export default function NftCard({
  selectedTile,
  selectedListing,
}: {
  selectedTile: GameTile;
  selectedListing: DirectListing;
}) {
  const player = useGetPlayerByAddress(selectedTile._land.ownerAddress);
  const account = useActiveAccount();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Validate the input to ensure it is a number
    if (newValue && !/^[\d.-]+$/g.test(newValue)) {
      setError("Please enter a valid number");
    } else {
      setError(null);
    }
  };
  return (
    <Card
      sx={{
        minWidth: 400,
        borderRadius: "20px",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(27, 33, 41, 1)",
        color: "white",
      }}
    >
      <div
        style={{
          height: "90%",
        }}
      >
        <CardContent
          sx={{
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{ height: "50%", marginBottom: "5%" }}>
            <img
              style={{
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              alt={selectedTile._land.nft.metadata.name}
              src={
                "https://ipfs.io/ipfs/" +
                selectedTile._land.nft.metadata.image.split("ipfs://")[1]
              }
            />
          </div>
          <Typography
            sx={{ fontSize: 35, color: "white", fontWeight: "bold" }}
            gutterBottom
          >
            {selectedTile._land.nft.metadata.name}
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              fontWeight: "",
            }}
            color={"text.secondary"}
            gutterBottom
          >
            {selectedTile._land.nft.metadata.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "16px",
            color: "white",
          }}
        >
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              onChange={handleChange}
              error={!!error}
              value={value}
              helperText={error || "Only numeric values are allowed"}
              FormHelperTextProps={{
                style: error
                  ? { color: "red", fontSize: "14px", margin: "3px 0" }
                  : { color: "white", fontSize: "14px", margin: "3px 0" }, // Custom style for the helper text
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    }}
                    position="end"
                  >
                    LINK
                  </InputAdornment>
                ),
              }}
            />
          </ThemeProvider>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "rgba(168, 85, 247, 1)",
              color: "white",
              padding: "15px 20px",
              "&:hover": {
                backgroundColor: "rgba(168, 85, 247, 0.3)",
                color: "white",
              },
            }}
            onClick={async () => {
              await listNftById({
                id: selectedTile._land.nft.id,
                account: account,
                price: Number(value),
              });
            }}
          >
            List
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
