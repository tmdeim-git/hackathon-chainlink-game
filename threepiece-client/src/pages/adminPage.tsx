import { useState } from "react";
import { Box, Alert } from "@mui/material";
import { useActiveAccount } from "thirdweb/react";
import { useGetLandsNft } from "../providers/land-provider";
import ResetLandsButton from "../components/ResetLandsButton";
import AddAttributes from "../components/AddAttributes";
import AttributesTable from "../components/AttributesTable";
import DeleteAttributes from "../components/DeleteAttributes";
import UpdateAttributes from "../components/UpdateAttributes";
import LoadingWithMusic from "../components/LoadingWithMusic";

export function AdminPage() {
  const [resetLoading, setResetLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const account = useActiveAccount();
  const [error, setError] = useState("");

  const anyLoading =
    resetLoading || addLoading || updateLoading || deleteLoading;
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
      <LoadingWithMusic isLoading={anyLoading} />
      <ResetLandsButton
        account={account}
        loading={resetLoading}
        setLoading={setResetLoading}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}
      >
        <UpdateAttributes
          setError={setError}
          account={account}
          loading={updateLoading}
          setLoading={setUpdateLoading}
        />
        <AddAttributes
          setError={setError}
          account={account}
          loading={addLoading}
          setLoading={setAddLoading}
        />
        <DeleteAttributes
          setError={setError}
          account={account}
          loading={deleteLoading}
          setLoading={setDeleteLoading}
        />
      </Box>
      <AttributesTable rows={allLandNfts} />
    </Box>
  );
}

export default AdminPage;
