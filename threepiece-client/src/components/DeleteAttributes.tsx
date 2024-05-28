import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { getContract } from "thirdweb";
import { batchDeleteAttributes } from "../providers/scripts-provider";
import {
  landContract,
  testChain,
  thirdwebClient,
} from "../providers/web3-provider";

const DeleteAttributes = ({ setError, account }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteContractAddress, setDeleteContractAddress] = useState("");
  const [deleteAttributeName, setDeleteAttributeName] = useState("");
  const [deleteInputError, setDeleteInputError] = useState(false);

  const handleBatchDelete = async () => {
    if (!deleteAttributeName) {
      setError(
        "All fields except Contract Address must be filled for Batch Delete."
      );
      setDeleteInputError(true);
      return;
    }
    setError("");
    setDeleteLoading(true);
    const contract = deleteContractAddress
      ? getContract({
          client: thirdwebClient,
          chain: testChain,
          address: deleteContractAddress,
        })
      : landContract;

    await batchDeleteAttributes(deleteAttributeName, account, contract);
    setDeleteLoading(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "10px",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ marginBottom: "20px" }}>
        BATCH DELETE ATTRIBUTE
      </Typography>
      <TextField
        label="Contract address"
        placeholder={landContract.address}
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={deleteContractAddress}
        onChange={(e) => setDeleteContractAddress(e.target.value)}
        sx={{
          marginBottom: "10px",
          backgroundColor: "#333",
          borderRadius: "5px",
          input: { color: "white" },
          ".MuiFilledInput-root": { backgroundColor: "#333" },
          ".MuiFilledInput-root::before": { borderBottom: "none" },
          ".MuiFilledInput-root:hover::before": { borderBottom: "none" },
          ".MuiFilledInput-root.Mui-focused::before": {
            borderBottom: "none",
          },
        }}
      />
      <TextField
        label="Attribute name"
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        placeholder="Enter attribute name"
        value={deleteAttributeName}
        onChange={(e) => setDeleteAttributeName(e.target.value)}
        error={deleteInputError}
        helperText={deleteInputError ? "Attribute name is required" : ""}
        sx={{
          marginBottom: "10px",
          backgroundColor: "#333",
          borderRadius: "5px",
          input: { color: "white" },
          ".MuiFilledInput-root": { backgroundColor: "#333" },
          ".MuiFilledInput-root::before": { borderBottom: "none" },
          ".MuiFilledInput-root:hover::before": { borderBottom: "none" },
          ".MuiFilledInput-root.Mui-focused::before": {
            borderBottom: "none",
          },
        }}
      />
      {deleteLoading ? (
        <CircularProgress color="error" />
      ) : (
        <Button
          onClick={handleBatchDelete}
          variant="contained"
          color="error"
          sx={{ padding: "10px 20px" }}
        >
          Delete
        </Button>
      )}
    </Box>
  );
};

export default DeleteAttributes;
