import { GameTile } from "./GameTile";
import "../style/selectedResourceRect.css";
import ResourceProduction from "../components/CountdownLoadingBar";
import { useActiveAccount } from "thirdweb/react";
import UpdateSingleAttribute from "../components/UpdateSingleAttribute";
import { Tabs, Tab, CircularProgress, Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getCumulativeDurationByLand,
  getIsLandStaked,
  stakeLand,
  unStakeLand,
  useGetLands,
} from "../providers/land-provider";
import { ResourceType } from "../thirdweb/types";
import LeftDrawer from "../components/LeftDrawer";

const CustomButton = styled(Button)(({ }) => ({
  backgroundColor: "#222222",
  color: "white",
  borderRadius: "20px",
  fontSize: "16px",
  padding: "10px 20px",
  marginBottom: "20px",
  "&:hover": {
    backgroundColor: "#444444",
  },
}));

const SelectedResourceRect = ({ selectedTile }: { selectedTile: GameTile }) => {
  const account = useActiveAccount();
  const lands = useGetLands();
  const [time, setTime] = useState(0);
  const [loadingStart, setLoadingStart] = useState(false);
  const [loadingStop, setLoadingStop] = useState(false);
  const [prodStart, setProdStarted] = useState(false);

  useEffect(() => {
    let ignore = false;
    const getTime = async () => {
      if (ignore) return;
      const isLandStaked = await getIsLandStaked(selectedTile._land.nft.id);
      if (!isLandStaked) return setTime(0);
      const time = await getCumulativeDurationByLand(selectedTile._land.nft.id);
      setTime(Number(time));
    };
    getTime();
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime === 0 ? prevTime : prevTime + 1));
    }, 1000);

    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, [selectedTile, prodStart]);
  let counter: Record<ResourceType, number>;
  counter = {
    sand: 0,
    seawater: 0,
    water: 0,
    wood: 0,
    soil: 0,
    ore: 0,
    snow: 0,
  };

  let totalResources = 0;
  for (const land of lands) {
    totalResources += land.resources.length;
    for (const resource of land.resources) {
      counter[resource.resourceType] += 1;
    }
  }

  const getTileId = (): number => selectedTile?._land.id || null;

  const getResourceType = (): any =>
    selectedTile?._land.resources.map((r) => (
      <option value={r.resourceType} key={r.resourceType}>
        {r.resourceType}
      </option>
    ));

  const getResources = () =>
    selectedTile?._land.resources.map((r, key) => {
      const percentage = (
        (counter[r.resourceType] / totalResources) *
        100
      ).toFixed(2);
      return (
        <div className="resource-element" key={key}>
          <h3 className="resource-element-title">
            {r.resourceType} ({percentage}%)
          </h3>
          <div> time: {r.productionTimeSeconds / 60} min</div>
          <div>amount: {r.Amount}</div>
          <ResourceProduction resource={r} land={selectedTile?._land} />
        </div>
      );
    });

  const getOwner = (): string =>
    selectedTile
      ? selectedTile?._isUnclaimedTile
        ? "Nobody"
        : selectedTile._land.ownerAddress
      : "";

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleButtonProdPress = async () => {
    setLoadingStop(true);
    await stakeLand(selectedTile._land.nft.id);
    setProdStarted(true)
    setLoadingStop(false);
  };

  const handleButtonStopProdPress = async () => {
    setLoadingStop(true);
    await unStakeLand(selectedTile._land.nft.id, time);
    setProdStarted(false)
    setLoadingStop(false);
  };

  return (
    <div className="tile-info-rect">
      <Tabs
        className="tile-info-title"
        value={tabValue}
        onChange={handleChange}
        aria-label="tile-info-tabs"
        variant="fullWidth"
      >
        <Tab label="Tile Info" />
        {account && <Tab label="Admin" />}
      </Tabs>
      <div>
        {tabValue === 0 && (
          <div className="tile-info">
            <div style={{ paddingTop: 10 }}>Tile ID: {getTileId()}</div>
            {!selectedTile?._isUnclaimedTile ? (
              <div>Owned By: {getOwner()}</div>
            ) : (
              <LeftDrawer selectedTile={selectedTile} />
            )}
            <h3 className="resources-title">Resources:</h3>
            <div className="resource-table">{getResources()}</div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                paddingTop: "20px",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {
                selectedTile && time === 0 && !prodStart && (
                  <CustomButton
                    onClick={handleButtonProdPress}
                    variant="contained"
                    disabled={loadingStart}
                  >
                    {loadingStart ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Start production for all resources"
                    )}
                  </CustomButton>
                )
              }
              {
                time > 0 && (
                  <>
                    <span
                      style={{ marginBottom: "10px" }}
                    >{`Time since production: ${time} sec`}</span>
                    <CustomButton
                      onClick={handleButtonStopProdPress}
                      variant="contained"
                      disabled={loadingStop}
                    >
                      {loadingStop ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Stop all resources from producing"
                      )}
                    </CustomButton>
                  </>
                )
              }
            </div >
          </div >
        )}
        {
          tabValue === 1 && (
            <div>
              {!selectedTile && <div>You must select a tile first</div>}
              {selectedTile && (
                <div>
                  <UpdateSingleAttribute
                    account={account}
                    nft={selectedTile._land.nft}
                    key={selectedTile._land.nft.id}
                  />
                </div>
              )}
            </div>
          )
        }
      </div >
    </div >
  );
};

export default SelectedResourceRect;
