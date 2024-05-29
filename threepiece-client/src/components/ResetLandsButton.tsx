import { Button, CircularProgress } from "@mui/material";
import { resetLands } from "../providers/scripts-provider";

const ResetLandsButton = ({ account, loading, setLoading }) => {
  const handleClick = async () => {
    setLoading(true);
    await resetLands(account);
    setLoading(false);
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="error"
      disabled={loading}
      sx={{ marginBottom: "20px", fontSize: "16px", padding: "10px 20px" }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : "RESET LANDS"}
    </Button>
  );
};

export default ResetLandsButton;
