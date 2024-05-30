import Chip from "@mui/material/Chip";

export default function MetadataChip({ text }: { text: string }) {
  return (
    <Chip
      label={text}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        color: "white",
        fontSize: "15px",
        borderRadius: "10px",
        padding: "20px 20px",
        ":hover": {
          backgroundColor: "rgba(168, 85, 247, 0.3)",
          cursor: "default",
        },
        border: "1px solid rgba(168, 85, 247, 1)",
      }}
      variant="outlined"
      clickable
    />
  );
}
