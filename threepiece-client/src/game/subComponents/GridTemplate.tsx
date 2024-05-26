import { Group, Line } from "react-konva";

type Props = {
  width: number;
  height: number;
  lines: number;
  cols: number;
};
const GridTemplate: React.FC<Props> = (props: Props) => {
  const { width, height, lines, cols } = props;
  const linesArray = Array.from({ length: lines }, (_, i) => i + 1);
  const columnsArray = Array.from({ length: cols }, (_, i) => i + 1);
  const spacesBetweenLines = height / lines;
  const spacesBetweenColumns = width / cols;
  return (
    <Group>
      {linesArray.map((line) => (
        <Line
          key={line}
          points={[
            0,
            line * spacesBetweenLines,
            width,
            line * spacesBetweenLines,
          ]}
          stroke="black"
          strokeWidth={1}
        />
      ))}
      {columnsArray.map((column) => (
        <Line
          key={column}
          points={[
            column * spacesBetweenColumns,
            0,
            column * spacesBetweenColumns,
            height,
          ]}
          stroke="black"
          strokeWidth={1}
        />
      ))}
    </Group>
  );
};
export default GridTemplate;
