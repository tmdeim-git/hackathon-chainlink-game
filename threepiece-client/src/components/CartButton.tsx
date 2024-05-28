// CartButton.tsx (assuming you're using TypeScript)
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

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

interface CartButtonProps {
  style?: React.CSSProperties;
}

const CartButton: React.FC<CartButtonProps> = ({ style }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/marketplace");
  };

  return (
    <Tooltip title="Marketplace" arrow>
      <AnimatedIconButton onClick={handleClick} color="primary" style={style}>
        <ShoppingCartIcon />
      </AnimatedIconButton>
    </Tooltip>
  );
};

export default CartButton;
