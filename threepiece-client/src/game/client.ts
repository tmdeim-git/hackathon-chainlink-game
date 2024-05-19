import { allLands } from "../thirdweb/provider";
import { Land } from "../thirdweb/types";
import { GameTile } from "./GameTile";

export function getGameTiles(): GameTile[] {
  const result: GameTile[] = [];
  const col = 15;

  const lands: Land[] = allLands;

  for (let k = 0; k < lands.length; k++) {
    let i = Math.floor((lands[k].id - 1) / col);
    let j = (lands[k].id - 1) % col;
    result.push(new GameTile(i, j, lands[k]));
  }

  return result;
}
