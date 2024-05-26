import React from "react";
import { GameTile } from "./GameTile";
import { Layer, Stage } from "react-konva";
import GridTemplate from "./subComponents/GridTemplate";
import ImageGame from "./subComponents/ImageGame";
import GameTiles from "./subComponents/GameTiles";

type Props = {
  tileSelected: (tile: GameTile) => void;
};

const GameScreenBoy: React.FC<Props> = (props: Props) => {
  const { tileSelected } = props;

  const width = 641;
  const height = 470;
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
          tileSelected={tileSelected}
        />
      </Layer>
    </Stage>
  );
};

export default GameScreenBoy;
