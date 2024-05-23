import { adminAddress } from "./backend/admin";
import { resetLandNfts } from "./backend/scripts/lands/land-scripts";
import { Account } from "thirdweb/wallets";

export async function resetLands(account: Account) {
    if (account.address === adminAddress) {
        return await resetLandNfts();
    }
}