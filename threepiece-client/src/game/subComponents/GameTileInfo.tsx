import { useState, useEffect } from "react";
import { Group, Rect, Text, Image, Arc, Circle } from "react-konva";
import { useActiveWallet } from "thirdweb/react";
import rain from "../../assets/rain.gif";
import { GameEvent } from "../../thirdweb/types";
import { GameTile } from "../GameTile";
import { useGetGameTilesById } from "../client";
import { getRandomNumbersWithVrf } from "../../providers/backend/scripts/vrf-scripts";

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
  const [result, setResult] = useState<"won" | "lost">(null)
  const [isFightHovered, setIsFightHovered] = useState(false);
  const gameTile = useGetGameTilesById(tileId);
  const wallet = useActiveWallet();
  const walletAddress = wallet?.getAccount().address;
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const [popup, setPopup] = useState<boolean>(false);

  const openBattlePrompt = (e: any) => {
    setResult(null)
    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    if (pointerPosition) {
      setPopup(true);
    }
  };

  const beginBattle = async () => {
    if (isLoading)
      return
    setIsLoading(true);
    setTileSelected(null)
    setPopup(false);
    document.body.style.cursor = 'default';

    const result = await getRandomNumbersWithVrf({
      startRange: 0n,
      endRange: 1n,
      numberOfResultsWanted: 1
    })
    console.log("FIGHT RESULT:", result[0])
    if (result[0] === 0n)
      setResult("won");
    else
      setResult("lost")
    setIsLoading(false);
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
  const popupLength = 35;
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
          openBattlePrompt(e);
        }}
      />
      {result === 'lost' && !gameTile?._selected && (
        <Text
          x={10}
          y={15}
          text="❌"
          fontSize={20}
          fill="red"
        />
      )}

      {result === 'won' && !gameTile?._selected && (
        <Text
          x={10}
          y={15}
          text="🏆"
          fontSize={20}
          fill="gold"
        />
      )}
      {isLoading && (
        <>
          <Circle
            x={30}
            y={15}
            radius={10}
            fill="black"
          />
          <Arc
            x={30}
            y={15}
            innerRadius={0}
            outerRadius={8}
            angle={120}
            fill="white"
            rotation={-90}
          />
        </>
      )}
      {!isLoading && popup && gameTile._selected && (
        <Group>
          <Rect
            x={width - popupLength}
            y={0}
            width={popupLength}
            height={popupLength}
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
            x={width - popupLength}
            y={0}
            width={popupLength}
            height={popupLength}
            text="🗡️"
            fontSize={14}
            padding={2}
            fill="white"
            align="center"
            verticalAlign="middle"
            onClick={() => {
              beginBattle();
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
