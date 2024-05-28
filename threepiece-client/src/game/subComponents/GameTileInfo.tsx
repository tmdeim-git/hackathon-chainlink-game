import React, { useState } from 'react';
import { Group, Rect, Text, Stage, Layer } from 'react-konva';
import { GameTile } from '../GameTile';
import { useGetGameTilesById } from '../client';
import { useActiveWallet } from 'thirdweb/react';

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  setTileSelected: (tile: GameTile) => void;
  tileId: number;
};

const GameTileInfo: React.FC<Props> = (props: Props) => {
  const { width, height, tileId } = props;
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
      setPopup({ x: props.x / width - 2, y: props.y / height + 10 });
    }
  };

  const closeBattle = () => {
    setPopup(null);
    document.body.style.cursor = 'default';
  };

  const unowned =
    gameTile?._isUnclaimedTile || gameTile?._land.ownerAddress !== walletAddress;

  return (
    <Group x={props.x} y={props.y}>
      <Rect
        width={width}
        height={height}
        stroke={unowned ? 'black' : 'green'}
        strokeWidth={isHovered ? 3 : 0.1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          props.setTileSelected(gameTile);
          openBattle(e);
        }}
      />
      {popup && (
        <Group>
          <Rect
            x={popup.x}
            y={popup.y}
            width={width}
            height={30}
            fill={isFightHovered ? 'red' : 'darkred'}
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
            text="FIGHT!"
            fontSize={14}
            fill="white"
            align="center"
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
