import { Group } from "react-konva";
import { GameTile } from "../GameTile";
import GameTileInfo from "./GameTileInfo";
import { useGetLandIds } from "../../providers/land-provider";

type Props = {
  width: number;
  height: number;
  lines: number;
  cols: number;
  tileSelected: (tile: GameTile) => void;
};
const GameTiles: React.FC<Props> = (props: Props) => {
  const { width, height, tileSelected, lines, cols } = props;
  const landIds = useGetLandIds();
  const spacesBetweenLines = height / lines;
  const spacesBetweenColumns = width / cols;
  console.log("landIds", landIds);
  return (
    <Group>
      {landIds.map((id, index) => (
        <GameTileInfo
          key={id}
          tileId={id}
          width={spacesBetweenColumns}
          height={spacesBetweenLines}
          x={(index % cols) * spacesBetweenColumns}
          y={Math.floor(index / cols) * spacesBetweenLines}
          tileSelected={tileSelected}
        />
      ))}
    </Group>
  );
};
export default GameTiles;
