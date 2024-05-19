import { GameTile } from "./GameTile";

export function getGameTiles(): GameTile[] {
  const result: GameTile[] = [];
  const size: number = 75;
  const row = 11;
  const col = 15;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result.push(new GameTile(i, j, size, i * 100 + j));
    }
  }

  return result;
}
