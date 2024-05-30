import { Button, CircularProgress } from "@mui/material";
import { initialListAllLands } from "../providers/backend/scripts/marketplace/marketplace-scripts";

const ListAllNftsButton = ({ loading, setLoading }) => {
  const handleClick = async () => {
    setLoading(true);
    await initialListAllLands();
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
      {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        "LIST ALL NFTS"
      )}
    </Button>
  );
};

export default ListAllNftsButton;
