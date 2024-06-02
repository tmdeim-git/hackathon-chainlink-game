import React from "react";
import { Chip, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

interface MetadataChipChipProps {
  label: string;
  percentage: number; // Expect a number from 0 to 100
}

const StyledChip = styled(Chip)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(168, 85, 247, 0.3)",
    width: "0%", // Default width before dynamic calculation
    transition: "width 0.3s ease",
  },
}));

const MetadataChip: React.FC<MetadataChipChipProps> = ({
  label,
  percentage,
}) => {
  return (
    <Tooltip
      title={`${percentage}% of lands have this ressource`}
      placement="top"
    >
      <StyledChip
        label={label}
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
          "&:before": {
            width: "var(--percentage-width)" as any, // Type assertion to allow the CSS variable
          },
          "--percentage-width": `${percentage}%`,
        }}
      />
    </Tooltip>
  );
};

export default MetadataChip;

// export default function MetadataChip({ text }: { text: string }) {
//   return (
//     <Chip
//       label={text}
//       sx={{
//         backgroundColor: "rgba(0, 0, 0, 1)",
//         color: "white",
//         fontSize: "15px",
//         borderRadius: "10px",
//         padding: "20px 20px",
//         ":hover": {
//           backgroundColor: "rgba(168, 85, 247, 0.3)",
//           cursor: "default",
//         },
//         border: "1px solid rgba(168, 85, 247, 1)",
//       }}
//       variant="outlined"
//       clickable
//     />
//   );
// }
