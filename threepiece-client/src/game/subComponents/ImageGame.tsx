import { useEffect, useState } from "react";
import { Image as KonvaImage, Group } from "react-konva";
import map from "../../assets/threepiecesvg.svg";

type Props = {
  width: number;
  height: number;
};

const ImageGame = ({ height, width }: Props) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const mapImage = new window.Image();
    mapImage.src = map;
    mapImage.onload = () => {
      setImage(mapImage);
    };
  }, []);

  return (
    <Group>
      {image && <KonvaImage image={image} width={width} height={height} />}
    </Group>
  );
};

export default ImageGame;
