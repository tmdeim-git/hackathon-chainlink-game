import { useState } from "react";
import { Box, Alert, CircularProgress } from "@mui/material";
import { useActiveAccount } from "thirdweb/react";
import { useGetLandsNft } from "../providers/land-provider";
import ResetLandsButton from "../components/ResetLandsButton";
import { resetLands } from "../providers/scripts-provider";
import AddAttributes from "../components/AddAttributes";
import AttributesTable from "../components/AttributesTable";
import DeleteAttributes from "../components/DeleteAttributes";
import UpdateAttributes from "../components/UpdateAttributes";

export function AdminPage() {
  const [resetLoading, setResetLoading] = useState(false);
  const account = useActiveAccount();
  const [error, setError] = useState("");

  // Handle reset lands
  const handleResetLands = async () => {
    setResetLoading(true);
    await resetLands(account);
    setResetLoading(false);
  };

  const allLandNfts = useGetLandsNft();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      {error && (
        <Alert severity="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Alert>
      )}
      {resetLoading ? (
        <CircularProgress color="error" sx={{ marginBottom: "20px" }} />
      ) : (
        <ResetLandsButton onReset={handleResetLands} />
      )}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}
      >
        <UpdateAttributes setError={setError} account={account} />
        <AddAttributes setError={setError} account={account} />
        <DeleteAttributes setError={setError} account={account} />
      </Box>
      <AttributesTable rows={allLandNfts} />
    </Box>
  );
}

export default AdminPage;
