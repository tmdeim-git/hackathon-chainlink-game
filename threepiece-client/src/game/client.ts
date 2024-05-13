import { GameTile } from "./GameTile";

export function getGameTiles(): GameTile[] {
  const result: GameTile[] = [];
  let size: number = 75;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 15; j++) {
      result.push(new GameTile(i, j, size, i * 10 + j));
    }
  }

  return result;
}
