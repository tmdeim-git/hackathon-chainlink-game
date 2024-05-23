import React, { useEffect, useState } from "react";
import { LinearProgress, Box, Typography, Button } from "@mui/material";
import { Resource } from "../thirdweb/types";

const CountdownLoadingBar = ({ endTime }) => {
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const totalDuration = endTime.getTime() - new Date().getTime();

    let interval;

    const updateProgress = () => {
      const now = new Date();
      const remainingDuration = endTime.getTime() - now.getTime();

      if (remainingDuration <= 0) {
        setProgress(100);
        setRemainingTime("0s");
        clearInterval(interval);
        console.log("Production done");
      } else {
        const percentage =
          ((totalDuration - remainingDuration) / totalDuration) * 100;
        setProgress(percentage);

        // Calculate the remaining time in a human-readable format
        const seconds = Math.floor((remainingDuration / 1000) % 60);
        const minutes = Math.floor((remainingDuration / (1000 * 60)) % 60);
        const hours = Math.floor((remainingDuration / (1000 * 60 * 60)) % 24);
        const days = Math.floor(remainingDuration / (1000 * 60 * 60 * 24));

        const remainingTimeString = `${days > 0 ? `${days}d ` : ""}${
          hours > 0 ? `${hours}h ` : ""
        }${minutes > 0 ? `${minutes}m ` : ""}${seconds}s`;
        setRemainingTime(remainingTimeString);
      }
    };

    updateProgress();
    interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" gutterBottom>
        {remainingTime}
      </Typography>
      <Box width="100%">
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
};

const ResourceProduction = ({ resource }: { resource: Resource }) => {
  const end = () =>
    new Date(Date.now() + resource.productionTimeSeconds * 1000);
  const [endTime, setEndTime] = useState(end());
  const [producting, setProducting] = useState(
    resource.productionEndDate === null
  );
  const [key, setKey] = useState(0);
  const liveTime = useLiveTime();

  const resetCountdown = () => {
    setProducting(false);
  };

  const startCountdown = () => {
    setProducting(true);
    setKey((prevKey) => prevKey + 1); // Change the key to trigger remount
  };

  return (
    <div>
      {!producting && (
        <button
          onClick={() => startCountdown()}
          className="resource-element-button"
        >
          <div>start</div>
          <div>production</div>
        </button>
      )}
      {producting && (
        <div className="App" style={{ padding: "20px" }}>
          {endTime.getTime() - liveTime.getTime() > 0 ? (
            <CountdownLoadingBar key={key} endTime={endTime} />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={resetCountdown}
            >
              Claim!
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

const useLiveTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

export default ResourceProduction;
