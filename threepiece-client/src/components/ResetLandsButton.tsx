import { Button } from "@mui/material";

const ResetLandsButton = ({ onReset }) => (
  <Button
    onClick={onReset}
    variant="contained"
    color="error"
    sx={{ marginBottom: "20px", fontSize: "16px", padding: "10px 20px" }}
  >
    RESET LANDS
  </Button>
);

export default ResetLandsButton;
