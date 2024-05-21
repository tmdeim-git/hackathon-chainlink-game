import { useAtomValue } from "jotai";
import Game from "./game/Game";
import { authWalletAtom } from "./thirdweb/provider";

export function GamePage() {
    const wallet = useAtomValue(authWalletAtom);
    const ownerAddress = wallet ? wallet.getAccount().address : undefined;

    return <Game ownerAddress={ownerAddress} />;
}
