import { useState, useEffect } from "react";
import { Group, Rect, Text, Image, Arc, Circle } from "react-konva";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";
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
  const [fightResult, setFightResult] = useState<"won" | "lost">(null);
  const [lootboxResult, setLootboxResult] = useState<string>(null);
  const [isFightHovered, setIsFightHovered] = useState(false);
  const gameTile = useGetGameTilesById(tileId);
  const account = useActiveAccount();
  const userAddress = account?.address;
  const [isBattleLoading, setIsBattleLoading] = useState(false);
  const [isOpeningLootBox, setIsOpeningLootBox] = useState(false);
  const [fightPopup, setFightPopup] = useState<boolean>(false);
  const [lootPopup, setLootPopup] = useState<boolean>(false);
  const [claimed, setClaimed] = useState(false); // TODO: use land contract to set claim
  const [isLootHovered, setIsLootHovered] = useState(false);
  useEffect(() => {
    const mapImage = new window.Image();
    mapImage.src = rain;
    mapImage.onload = () => {
      setImage(mapImage);
    };
  }, []);

  const [image, setImage] = useState<HTMLImageElement | null>(null);

  if (!gameTile) return
  const openOptions = (e: any) => {
    setFightResult(null);
    const stage = e.target.getStage();
    const pointerPosition = stage?.getPointerPosition();
    if (pointerPosition) {
      setFightPopup(true);
      setLootPopup(true);
    }
  };

  const beginBattle = async () => {
    if (isBattleLoading) return;
    setIsBattleLoading(true);
    setTileSelected(null);
    setFightPopup(false);
    document.body.style.cursor = "default";

    const result = await getRandomNumbersWithVrf({
      startRange: 0n,
      endRange: 1n,
      numberOfResultsWanted: 1,
    });
    console.log("TEST", result);

    console.log("FIGHT RESULT:", result[0]);
    if (result[0] === 0n) setFightResult("won");
    else setFightResult("lost");
    setIsBattleLoading(false);
  };

  const openLootbox = async () => {
    if (isOpeningLootBox) return;
    setIsOpeningLootBox(true);
    setTileSelected(null);
    setLootPopup(false);
    document.body.style.cursor = "default";

    const result = await getRandomNumbersWithVrf({
      startRange: 1n,
      endRange: 10n,
      numberOfResultsWanted: 1,
    });
    console.log("FIGHT RESULT:", result[0]);
    setLootboxResult(`${result[0]}x🪵`);
    setClaimed(true);
    setIsOpeningLootBox(false);
  };


  const isRaining = gameTile._land.event === GameEvent.Land.Raining;

  const unowned =
    gameTile?._isUnclaimedTile || gameTile?._land.ownerAddress !== userAddress;
  const popupLength = 35;
  return (
    <Group x={x} y={y}>
      {image && isRaining && (
        <Image image={image} width={width} height={height} />
      )}
      <Rect
        width={width}
        height={height}
        stroke={unowned ? "black" : "green"}
        strokeWidth={isHovered ? 3 : 0.1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          setTileSelected(gameTile);
          openOptions(e);
        }}
      />

      {fightResult === "won" && !gameTile._selected && (
        <Text
          x={width - popupLength}
          y={15}
          text="🏆"
          fontSize={20}
          fill="gold"
        />
      )}

      {fightResult === "lost" && !gameTile._selected && (
        <Text
          x={width - popupLength}
          y={15}
          text="❌"
          fontSize={20}
          fill="red"
        />
      )}

      {lootboxResult && (
        <Text
          x={3}
          y={15}
          text={lootboxResult}
          fontSize={20}
          fontVariant="bold"
          fill="black"
        />
      )}
      {isBattleLoading && (
        <>
          <Circle x={width - 20} y={15} radius={10} fill="black" />
          <Arc
            x={width - 20}
            y={15}
            innerRadius={0}
            outerRadius={8}
            angle={120}
            fill="white"
            rotation={-90}
          />
        </>
      )}

      {isOpeningLootBox && (
        <>
          <Circle x={20} y={15} radius={10} fill="black" />
          <Arc
            x={20}
            y={15}
            innerRadius={0}
            outerRadius={8}
            angle={120}
            fill="white"
            rotation={-90}
          />
        </>
      )}
      {!isBattleLoading &&
        fightPopup &&
        gameTile._selected &&
        gameTile._land.ownerAddress !== userAddress && (
          <Group>
            <Rect
              x={width - popupLength}
              y={0}
              width={popupLength}
              height={popupLength}
              fill={isFightHovered ? "darkred" : "#1a1a1a"}
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
                document.body.style.cursor = "pointer";
              }}
              onMouseLeave={() => {
                setIsFightHovered(false);
                document.body.style.cursor = "default";
              }}
              listening={true}
            />
          </Group>
        )}
      {!isOpeningLootBox &&
        !claimed &&
        gameTile._land.ownerAddress === userAddress && (
          <Group>
            <Rect
              x={width - 2 * popupLength}
              y={0}
              width={popupLength}
              height={popupLength}
              fill={isLootHovered ? "#8B8000" : "#1a1a1a"}
              cornerRadius={15}
              shadowColor="black"
              shadowBlur={5}
              shadowOpacity={0.5}
              shadowOffsetX={2}
              shadowOffsetY={2}
              listening={false}
            />
            <Text
              x={width - 2 * popupLength}
              y={0}
              width={popupLength}
              height={popupLength}
              text="🎁"
              fontStyle=""
              fontSize={14}
              padding={2}
              fill="white"
              align="center"
              verticalAlign="middle"
              onClick={() => {
                openLootbox();
              }}
              onMouseOver={() => {
                setIsLootHovered(true);
                document.body.style.cursor = "pointer";
              }}
              onMouseLeave={() => {
                setIsLootHovered(false);
                document.body.style.cursor = "default";
              }}
              listening={true}
            />
          </Group>
        )}
    </Group>
  );
};

export default GameTileInfo;
