import styled from "@emotion/styled";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

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

interface AdminButtonProps {
  style?: React.CSSProperties;
}

const GoToAdminPageButton: React.FC<AdminButtonProps> = ({ style }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <Tooltip title="Admin dashboard" arrow>
      <AnimatedIconButton onClick={handleClick} color="primary" style={style}>
        <AdminPanelSettingsIcon />
      </AnimatedIconButton>
    </Tooltip>
  );
};

export default GoToAdminPageButton;
