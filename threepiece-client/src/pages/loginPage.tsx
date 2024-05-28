import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import "../style/loginPage.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#333333",
  color: "white",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  maxWidth: "600px",
  margin: "20px auto",
}));

export function LoginPage() {
  return (
    <div className="login-page">
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Three Piece
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </StyledPaper>
    </div>
  );
}
