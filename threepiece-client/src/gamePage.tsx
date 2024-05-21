import { useActiveAccount } from "thirdweb/react";
import Game from "./game/Game";

export function GamePage() {
    return <Game ownerAddress={useActiveAccount()?.address} />;
}
