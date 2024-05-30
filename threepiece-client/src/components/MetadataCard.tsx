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

export default function MetadataCard({
  selectedTile,
}: {
  selectedTile: GameTile;
}) {
  const player = useGetPlayerByAddress(selectedTile._land.ownerAddress);
  return (
    <Card
      sx={{
        minWidth: 400,
        borderRadius: "20px",
        height: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 1)",
        color: "white",
      }}
    >
      <CardContent
        sx={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography sx={{ fontSize: 20, color: "white" }} gutterBottom>
          Available ressources
        </Typography>
        <Stack direction="row" spacing={2}>
          {selectedTile._land.resources.map((r, key) => {
            return <MetadataChip key={key} text={`${r.resourceType}`} />;
          })}
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "16px",
          color: "white",
        }}
      >
        <Typography
          sx={{ fontSize: 14, color: "white" }}
          color="text.secondary"
          gutterBottom
        >
          {"Owner : " + player.nft.metadata.name}
          <a
            href={`https://cardona-zkevm.polygonscan.com/address/${player.ownerAddress}`}
            target="_blank"
          >
            {" (" +
              player.ownerAddress.slice(0, 6) +
              "..." +
              player.ownerAddress.slice(-4) +
              ")"}
          </a>
        </Typography>
      </CardActions>
    </Card>
  );
}
