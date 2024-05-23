import React, { useState } from "react";
import { Box, Typography, Button, TextField, Alert } from "@mui/material";
import { landContract } from "../providers/web3-provider";
import { resetLands } from "../providers/scripts-provider";

export function AdminPage() {
  const [resetLoading, setResetLoading] = useState(false);

  // State variables for each section
  const [updateContractAddress, setUpdateContractAddress] = useState("");
  const [updateAttributeName, setUpdateAttributeName] = useState("");
  const [updateNewValue, setUpdateNewValue] = useState("");

  const [addContractAddress, setAddContractAddress] = useState("");
  const [addAttributeName, setAddAttributeName] = useState("");

  const [deleteContractAddress, setDeleteContractAddress] = useState("");
  const [deleteAttributeName, setDeleteAttributeName] = useState("");

  // Handle reset lands
  const handleResetLands = async () => {
    setResetLoading(true);
    await resetLands();
    setResetLoading(false);
  };

  // State for error messages and input errors
  const [error, setError] = useState("");
  const [updateInputErrors, setUpdateInputErrors] = useState({
    attributeName: false,
    newValue: false,
  });
  const [addInputError, setAddInputError] = useState(false);
  const [deleteInputError, setDeleteInputError] = useState(false);

  // Handler functions for update section
  const handleUpdateContractAddressChange = (event) => {
    setUpdateContractAddress(event.target.value);
  };

  const handleUpdateAttributeNameChange = (event) => {
    setUpdateAttributeName(event.target.value);
    setUpdateInputErrors({ ...updateInputErrors, attributeName: false });
  };

  const handleUpdateNewValueChange = (event) => {
    setUpdateNewValue(event.target.value);
    setUpdateInputErrors({ ...updateInputErrors, newValue: false });
  };

  // Handler functions for add section
  const handleAddContractAddressChange = (event) => {
    setAddContractAddress(event.target.value);
  };

  const handleAddAttributeNameChange = (event) => {
    setAddAttributeName(event.target.value);
    setAddInputError(false);
  };

  // Handler functions for delete section
  const handleDeleteContractAddressChange = (event) => {
    setDeleteContractAddress(event.target.value);
  };

  const handleDeleteAttributeNameChange = (event) => {
    setDeleteAttributeName(event.target.value);
    setDeleteInputError(false);
  };

  // Button click handlers with validation
  const handleBatchUpdate = (e) => {
    e.target.disabled = true;
    console.log("String test", e.target.disabled);
    const isValid = updateAttributeName && updateNewValue;
    if (!isValid) {
      setError(
        "All fields except Contract Address must be filled for Batch Update."
      );
      setUpdateInputErrors({
        attributeName: !updateAttributeName,
        newValue: !updateNewValue,
      });
    } else {
      setError("");
    }
    console.log("BATCH UPDATE ADD BUTTON CLICKED");
    console.log(
      "Contract Address:",
      updateContractAddress || landContract.address
    );
  };

  const handleBatchAdd = () => {
    if (!addAttributeName) {
      setError(
        "All fields except Contract Address must be filled for Batch Add."
      );
      setAddInputError(true);
    } else {
      setError("");
    }
    console.log("BATCH ADD ATTRIBUTE ADD BUTTON CLICKED");
    console.log(
      "Contract Address:",
      addContractAddress || landContract.address
    );
  };

  const handleBatchDelete = () => {
    if (!deleteAttributeName) {
      setError(
        "All fields except Contract Address must be filled for Batch Delete."
      );
      setDeleteInputError(true);
    } else {
      setError("");
    }
    console.log("BATCH DELETE ATTRIBUTE DELETE BUTTON CLICKED");
    console.log(
      "Contract Address:",
      deleteContractAddress || landContract.address
    );
  };

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
        "loading"
      ) : (
        <Button
          onClick={handleResetLands}
          variant="contained"
          color="error"
          sx={{ marginBottom: "20px", fontSize: "16px", padding: "10px 20px" }}
        >
          RESET LANDS
        </Button>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}
      >
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
            onChange={handleUpdateContractAddressChange}
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
            onChange={handleUpdateAttributeNameChange}
            error={updateInputErrors.attributeName}
            helperText={
              updateInputErrors.attributeName
                ? "Attribute name is required"
                : ""
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
            onChange={handleUpdateNewValueChange}
            error={updateInputErrors.newValue}
            helperText={
              updateInputErrors.newValue ? "New value is required" : ""
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
          <Button
            onClick={handleBatchUpdate}
            variant="contained"
            color="primary"
            sx={{ padding: "10px 20px" }}
          >
            Update
          </Button>
        </Box>
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
            onChange={handleAddContractAddressChange}
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
            onChange={handleAddAttributeNameChange}
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
          <Button
            onClick={handleBatchAdd}
            variant="contained"
            color="primary"
            sx={{ padding: "10px 20px" }}
          >
            Add
          </Button>
        </Box>
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
            onChange={handleDeleteContractAddressChange}
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
            onChange={handleDeleteAttributeNameChange}
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
          <Button
            onClick={handleBatchDelete}
            variant="contained"
            color="error"
            sx={{ padding: "10px 20px" }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
