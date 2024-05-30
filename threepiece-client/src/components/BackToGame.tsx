import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
const AnimatedIconButton = styled(IconButton)({
  "&:hover": {
    animation: "shake 0.5s",
    animationIterationCount: 1,
  },
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.2)",
  },
  "@keyframes shake": {
    "0%": { transform: "translateX(0)" },
    "25%": { transform: "translateX(-5px)" },
    "50%": { transform: "translateX(5px)" },
    "75%": { transform: "translateX(-5px)" },
    "100%": { transform: "translateX(0)" },
  },
});

interface MapButtonProps {
  style?: React.CSSProperties;
}

const BackToGameButton: React.FC<MapButtonProps> = ({ style }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game");
  };

  return (
    <Tooltip title="Return to game" arrow>
      <AnimatedIconButton onClick={handleClick} color="primary" style={style}>
        <MapIcon />
      </AnimatedIconButton>
    </Tooltip>
  );
};

export default BackToGameButton;
