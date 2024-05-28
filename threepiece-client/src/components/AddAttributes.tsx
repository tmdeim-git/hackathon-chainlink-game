import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { getContract } from "thirdweb";
import { batchAddAttributes } from "../providers/scripts-provider";
import {
  landContract,
  testChain,
  thirdwebClient,
} from "../providers/web3-provider";

const AddAttributes = ({ setError, account }) => {
  const [addLoading, setAddLoading] = useState(true);
  const [addContractAddress, setAddContractAddress] = useState("");
  const [addAttributeName, setAddAttributeName] = useState("");
  const [addDefaultAttributeValue, setDefaultAttributeValue] = useState("");
  const [addInputError, setAddInputError] = useState(false);

  const handleBatchAdd = async () => {
    if (!addAttributeName) {
      setError(
        "All fields except Contract Address must be filled for Batch Add."
      );
      setAddInputError(true);
      return;
    }
    setError("");
    setAddLoading(true);
    const contract = addContractAddress
      ? getContract({
          client: thirdwebClient,
          chain: testChain,
          address: addContractAddress,
        })
      : landContract;
    const newAttributes = {
      trait_type: addAttributeName,
      value: addDefaultAttributeValue,
    };
    await batchAddAttributes(newAttributes, account, contract);
    setAddLoading(false);
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
        BATCH ADD ATTRIBUTE
      </Typography>
      <TextField
        label="Contract address"
        placeholder={landContract.address}
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={addContractAddress}
        onChange={(e) => setAddContractAddress(e.target.value)}
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
        label="New attribute name"
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        placeholder="Enter new attribute name"
        value={addAttributeName}
        onChange={(e) => setAddAttributeName(e.target.value)}
        error={addInputError}
        helperText={addInputError ? "Attribute name is required" : ""}
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
        label="Default value"
        placeholder="Enter default value"
        variant="filled"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={addDefaultAttributeValue}
        onChange={(e) => setDefaultAttributeValue(e.target.value)}
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
      {addLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <Button
          onClick={handleBatchAdd}
          variant="contained"
          color="primary"
          sx={{ padding: "10px 20px" }}
        >
          Add
        </Button>
      )}
    </Box>
  );
};

export default AddAttributes;
