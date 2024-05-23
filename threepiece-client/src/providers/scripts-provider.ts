import { useActiveAccount } from "thirdweb/react";
import { adminAddress } from "./backend/admin";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";

export async function resetLands() {
    if (useActiveAccount().address === adminAddress) {
        return await resetLandNfts();
    }
}