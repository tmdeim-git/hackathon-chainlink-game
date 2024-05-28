import { Group, Rect } from "react-konva";
import { GameTile } from "../GameTile";
import { useGetGameTilesById } from "../client";
import { useState } from "react";
import { useActiveWallet } from "thirdweb/react";

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  tileSelected: (tile: GameTile) => void;
  tileId: number;
};
const GameTileInfo: React.FC<Props> = (props: Props) => {
  const { width, height, tileId } = props;
  const [isHovered, setIsHovered] = useState(false);
  const gameTile = useGetGameTilesById(tileId);
  const wallet = useActiveWallet();
  const walletAddress = wallet?.getAccount().address;

  const strokeColor =
    gameTile?._isUnclaimedTile || gameTile?._land.ownerAddress !== walletAddress
      ? "black"
      : "green";
  return (
    <Group x={props.x} y={props.y}>
      <Rect
        width={width}
        height={height}
        stroke={strokeColor}
        strokeWidth={isHovered ? 3 : 0.1}
        onmouseenter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => props.tileSelected(gameTile)}
      />
    </Group>
  );
};
export default GameTileInfo;
