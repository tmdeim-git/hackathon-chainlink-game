import React from "react";
import { GameTile } from "./GameTile";
import { Layer, Stage } from "react-konva";
import GridTemplate from "./subComponents/GridTemplate";
import ImageGame from "./subComponents/ImageGame";
import GameTiles from "./subComponents/GameTiles";

type Props = {
  setTileSelected: (tile: GameTile) => void;
};

const GameScreenBoycottage: React.FC<Props> = (props: Props) => {
  const { setTileSelected } = props;
  const canvasSize: number = 0.55;
  const canvasAspectRation = 11 / 15.0;
  const width = window.innerWidth * canvasSize;
  const height = window.innerWidth * canvasSize * canvasAspectRation;

  const lines = 11;
  const cols = 15;
  return (
    <Stage width={width} height={height}>
      <Layer name="Background">
        <ImageGame width={width} height={height} />
      </Layer>
      <Layer name="Grid">
        <GridTemplate width={width} height={height} lines={lines} cols={cols} />
      </Layer>

      <Layer name="Game Tiles">
        <GameTiles
          width={width}
          height={height}
          lines={lines}
          cols={cols}
          setTileSelected={setTileSelected}
        />
      </Layer>
    </Stage>
  );
};

export default GameScreenBoycottage;
