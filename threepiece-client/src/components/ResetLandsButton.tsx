import { Button, CircularProgress } from "@mui/material";

const ResetLandsButton = ({ onReset, loading, setLoading }) => {
  const handleClick = async () => {
    setLoading(true);
    await onReset();
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
