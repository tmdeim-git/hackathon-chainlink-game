import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const LoadingWithMusic = ({ isLoading }) => {
  useEffect(() => {
    const audio = new Audio("../src/assets/Jeopardy Theme.mp3");
    audio.loop = true;
    if (isLoading) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isLoading]);

  return isLoading ? <CircularProgress color="primary" /> : null;
};

export default LoadingWithMusic;
