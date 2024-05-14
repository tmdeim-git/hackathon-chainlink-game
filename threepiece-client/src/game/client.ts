import { GameTile } from "./GameTile";

export function getGameTiles(): GameTile[] {
  const result: GameTile[] = [];
  let size: number = 75;
  let row = 11
  let col = 15;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result.push(new GameTile(i, j, size, i * col + j));
    }
  }

  return result;
}
