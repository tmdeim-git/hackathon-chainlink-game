import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";
import { IconButton, Tooltip } from "@mui/material";
import { useGetPlayerByAddress } from "../providers/player-provider";
import { useActiveAccount } from "thirdweb/react";

const AnimatedIconButton = styled(IconButton)({
  "&:hover": {
    animation: "shake 0.5s",
    animationIterationCount: 1,
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.2)",
  },
  "@keyframes shake": {
    "0%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-5px)" },
    "50%": { transform: "translateX(5px)" },
    "75%": { transform: "translateX(-5px)" },
    "100%": { transform: "translateX(0)" },
  },
});

interface EditButtonProps {
  style?: React.CSSProperties;
  onOpen: (name: string) => void;
}

const EditButton: React.FC<EditButtonProps> = ({ style, onOpen }) => {
  const account = useActiveAccount();
  const player = useGetPlayerByAddress(account?.address || "");
  const playerName = player?.nft.metadata.name;

  const handleOpen = () => {
    onOpen(playerName || "");
  };

  return (
    <Tooltip title="Edit Player Name" arrow>
      <AnimatedIconButton onClick={handleOpen} color="primary" style={style}>
        <EditIcon style={{ fontSize: "24px" }} />
      </AnimatedIconButton>
    </Tooltip>
  );
};

export default EditButton;
