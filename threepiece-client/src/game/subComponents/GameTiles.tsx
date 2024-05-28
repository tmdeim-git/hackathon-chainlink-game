import { Group } from "react-konva";
import { GameTile } from "../GameTile";
import GameTileInfo from "./GameTileInfo";
import { useGetLandIds } from "../../providers/land-provider";

type Props = {
  width: number;
  height: number;
  lines: number;
  cols: number;
  setTileSelected: (tile: GameTile) => void;
};
const GameTiles: React.FC<Props> = (props: Props) => {
  const { width, height, setTileSelected, lines, cols } = props;
  const landIds = useGetLandIds();
  const spacesBetweenLines = height / lines;
  const spacesBetweenColumns = width / cols;
  return (
    <Group>
      {landIds?.map((id, index) => (
        <GameTileInfo
          key={id}
          tileId={id}
          width={spacesBetweenColumns}
          height={spacesBetweenLines}
          x={(index % cols) * spacesBetweenColumns}
          y={Math.floor(index / cols) * spacesBetweenLines}
          setTileSelected={setTileSelected}
        />
      ))}
    </Group>
  );
};
export default GameTiles;
