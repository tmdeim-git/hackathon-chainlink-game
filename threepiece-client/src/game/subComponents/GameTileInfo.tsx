import { useState, useEffect } from "react";
import { Group, Rect, Text, Image } from "react-konva";
import { useActiveWallet } from "thirdweb/react";
import rain from "../../assets/rain.gif";
import { GameEvent } from "../../thirdweb/types";
import { GameTile } from "../GameTile";
import { useGetGameTilesById } from "../client";

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  setTileSelected: (tile: GameTile) => void;
  tileId: number;
};

const GameTileInfo: React.FC<Props> = (props: Props) => {
  const { width, height, x, y, tileId, setTileSelected } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isFightHovered, setIsFightHovered] = useState(false);
  const gameTile = useGetGameTilesById(tileId);
  const wallet = useActiveWallet();
  const walletAddress = wallet?.getAccount().address;

  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null);

  const openBattle = (e: any) => {
    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    if (pointerPosition) {
      setPopup({ x: props.x / width, y: props.y / height });
    }
  };

  const closeBattle = () => {
    setPopup(null);
    document.body.style.cursor = 'default';
  };

  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const isRaining = gameTile._land.event === GameEvent.Land.Raining;

  useEffect(() => {
    const mapImage = new window.Image();
    mapImage.src = rain;
    mapImage.onload = () => {
      setImage(mapImage);
    };
  }, []);

  const unowned =
    gameTile?._isUnclaimedTile || gameTile?._land.ownerAddress !== walletAddress;

  return (
    <Group x={x} y={y}>
      {image && isRaining && (
        <Image image={image} width={width} height={height} />
      )}
      <Rect
        width={width}
        height={height}
        stroke={unowned ? 'black' : 'green'}
        strokeWidth={isHovered ? 3 : 0.1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          setTileSelected(gameTile);
          openBattle(e);
        }}
      />
      {popup && gameTile._selected && (
        <Group>
          <Rect
            x={popup.x}
            y={popup.y}
            width={45}
            height={30}
            fill={isFightHovered ? 'darkred' : '#1a1a1a'}
            cornerRadius={15}
            shadowColor="black"
            shadowBlur={5}
            shadowOpacity={0.5}
            shadowOffsetX={2}
            shadowOffsetY={2}
            listening={false}
          />
          <Text
            x={popup.x}
            y={popup.y}
            width={width}
            height={30}
            text="🗡️"
            fontSize={14}
            fill="white"
            padding={14}
            verticalAlign="middle"
            onClick={() => {
              closeBattle();
            }}
            onMouseOver={() => {
              setIsFightHovered(true);
              document.body.style.cursor = 'pointer';
            }}
            onMouseLeave={() => {
              setIsFightHovered(false);
              document.body.style.cursor = 'default';
            }}
            listening={true}
          />
        </Group>
      )}

    </Group >
  );
};

export default GameTileInfo;
