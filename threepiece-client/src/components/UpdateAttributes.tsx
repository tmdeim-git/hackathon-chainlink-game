import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { getContract } from "thirdweb";
import { batchUpdateAttributeLand } from "../providers/scripts-provider";
import {
  landContract,
  testChain,
  thirdwebClient,
} from "../providers/web3-provider";

const UpdateAttributes = ({ setError, account }) => {
  const [updateLoading, setUpdateLoading] = useState(true);
  const [updateContractAddress, setUpdateContractAddress] = useState("");
  const [updateAttributeName, setUpdateAttributeName] = useState("");
  const [updateNewValue, setUpdateNewValue] = useState("");
  const [updateInputErrors, setUpdateInputErrors] = useState({
    attributeName: false,
    newValue: false,
  });

  const handleBatchUpdate = async () => {
    const isValid = updateAttributeName && updateNewValue;
    if (!isValid) {
      setError(
        "All fields except Contract Address must be filled for Batch Update."
      );
      setUpdateInputErrors({
        attributeName: !updateAttributeName,
        newValue: !updateNewValue,
      });
      return;
    }
    setError("");
    setUpdateLoading(true);
    const contract = updateContractAddress
      ? getContract({
          client: thirdwebClient,
          chain: testChain,
          address: updateContractAddress,
        })
      : landContract;

    const newAttributes = {
      trait_type: updateAttributeName,
      value: updateNewValue,
    };
    await batchUpdateAttributeLand(account, contract, newAttributes);
    setUpdateLoading(false);
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
        BATCH UPDATE ATTRIBUTE
      </Typography>
      <TextField
        label="Contract address"
        placeholder={landContract.address}
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={updateContractAddress}
        onChange={(e) => setUpdateContractAddress(e.target.value)}
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
        value={updateAttributeName}
        onChange={(e) => setUpdateAttributeName(e.target.value)}
        error={updateInputErrors.attributeName}
        helperText={
          updateInputErrors.attributeName ? "Attribute name is required" : ""
        }
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
        label="New value"
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        placeholder="Enter new value"
        value={updateNewValue}
        onChange={(e) => setUpdateNewValue(e.target.value)}
        error={updateInputErrors.newValue}
        helperText={updateInputErrors.newValue ? "New value is required" : ""}
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
      {updateLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <Button
          onClick={handleBatchUpdate}
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
        >
          Update
        </Button>
      )}
    </Box>
  );
};

export default UpdateAttributes;
