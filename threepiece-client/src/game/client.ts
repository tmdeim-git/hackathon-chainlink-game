import { adminAddress } from "../providers/backend/admin";
import { allLands } from "../providers/land-provider";
import { Land } from "../thirdweb/types";
import { GameTile } from "./GameTile";

export function getGameTiles(): GameTile[] {
  const result: GameTile[] = [];
  const col = 15;

  const lands: Land[] = allLands;
  for (let k = 0; k < lands.length; k++) {
    const i = Math.floor((lands[k].id - 1) / col);
    const j = (lands[k].id - 1) % col;
    const isUnclaimedTile = adminAddress === lands[k].ownerAddress;
    result.push(new GameTile(i, j, lands[k], isUnclaimedTile));
  }

  return result;
}
