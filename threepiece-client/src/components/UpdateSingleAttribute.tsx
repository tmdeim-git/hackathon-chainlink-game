import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Autocomplete,
} from "@mui/material";
import { landContract } from "../providers/web3-provider";
import { LandNFT } from "../thirdweb/types";
import { Account } from "thirdweb/wallets";
import { updateAttributeLand } from "../providers/scripts-provider";

const UpdateSingleAttribute = ({
  account,
  nft,
}: {
  account: Account;
  nft: LandNFT;
}) => {
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateAttributeName, setUpdateAttributeName] = useState("");
  const [updateNewValue, setUpdateNewValue] = useState<any>();
  const [updateInputErrors, setUpdateInputErrors] = useState({
    attributeName: false,
    newValue: false,
  });

  const handleUpdate = async () => {
    const isValid = updateAttributeName && updateNewValue;

    if (!isValid) {
      setUpdateInputErrors({
        attributeName: !updateAttributeName,
        newValue: !updateNewValue,
      });
      return;
    }
    setUpdateLoading(true);

    nft.metadata.attributes.find(
      (a) => a.trait_type === updateAttributeName
    ).value = JSON.parse(updateNewValue);
    await updateAttributeLand(
      account,
      landContract,
      nft.metadata.attributes,
      nft.id
    );
    setUpdateLoading(false);
  };

  const handleAttributeNameChange = (e) => {
    setUpdateAttributeName(e.target.textContent);
    // Find the attribute value based on the selected attribute name
    const selectedAttribute = nft.metadata.attributes.find(
      (a) => a.trait_type === e.target.textContent
    );

    if (selectedAttribute) {
      setUpdateNewValue(JSON.stringify(selectedAttribute.value));
    } else {
      setUpdateNewValue(""); // Clear the new value if no attribute is selected
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Typography variant="h6" component="h3" sx={{ margin: "20px" }}>
        {"UPDATE ATTRIBUTE (ID = " + nft.id + ")"}
      </Typography>
      <Autocomplete
        sx={{ width: "95%", margin: "10px" }}
        options={nft.metadata.attributes
          .map((a) => a.trait_type)
          .filter((a) => a !== "id")}
        onChange={(e) => handleAttributeNameChange(e)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Attribute name"
            variant="filled"
            fullWidth
            InputLabelProps={{ shrink: true }}
            placeholder="Enter attribute name"
            value={updateAttributeName}
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
        )}
      />
      <TextField
        label="New value"
        variant="filled"
        fullWidth
        multiline={true}
        InputLabelProps={{ shrink: true }}
        placeholder="Enter new value"
        value={updateNewValue}
        onChange={(e) => setUpdateNewValue(e.target.value)}
        error={updateInputErrors.newValue}
        helperText={updateInputErrors.newValue ? "New value is required" : ""}
        sx={{
          margin: "10px",
          width: "95%",
          backgroundColor: "#333",
          borderRadius: "5px",
          textarea: { color: "white" },
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
          onClick={handleUpdate}
          variant="contained"
          color="primary"
          sx={{ padding: "10px", borderRadius: "5px", margin: "10px" }}
        >
          Update
        </Button>
      )}
    </Box>
  );
};

export default UpdateSingleAttribute;
