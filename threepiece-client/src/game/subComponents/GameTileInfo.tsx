import { Group, Rect, Image } from "react-konva";
import { GameTile } from "../GameTile";
import { useGetGameTilesById } from "../client";
import { useEffect, useState } from "react";
import { useActiveWallet } from "thirdweb/react";
import rain from "../../assets/rain.gif";
import { GameEvent } from "../../thirdweb/types";

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  tileSelected: (tile: GameTile) => void;
  tileId: number;
};

const GameTileInfo: React.FC<Props> = (props: Props) => {
  const { width, height, x, y, tileId, tileSelected } = props;
  const [isHovered, setIsHovered] = useState(false);
  const gameTile = useGetGameTilesById(tileId);
  const wallet = useActiveWallet();
  const walletAddress = wallet?.getAccount().address;

  const strokeColor =
    gameTile?._isUnclaimedTile || gameTile?._land.ownerAddress !== walletAddress
      ? "black"
      : "green";

  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const isRaining = gameTile._land.event === GameEvent.Land.Raining;

  useEffect(() => {
    const mapImage = new window.Image();
    mapImage.src = rain;
    mapImage.onload = () => {
      setImage(mapImage);
    };
  }, []);

  return (
    <Group x={x} y={y}>
      {image && isRaining && (
        <Image image={image} width={width} height={height} />
      )}
      <Rect
        width={width}
        height={height}
        stroke={strokeColor}
        strokeWidth={isHovered ? 3 : 0.1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => tileSelected(gameTile)}
      />
    </Group>
  );
};

export default GameTileInfo;
