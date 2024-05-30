import { PreparedTransaction, sendAndConfirmTransaction } from "thirdweb";
import {
  createListing,
  multicall,
} from "../../../../thirdweb/generated-contracts/marketplace";
import { allLandsAtom } from "../../../land-provider";
import { marketplaceContract } from "../../../marketplace-provider";
import { store } from "../../../store";
import { landContract, linkContract } from "../../../web3-provider";
import { adminAccount } from "../../admin";
import { sendAndConfirmMulticall } from "../erc721-scripts";

export async function initialListAllLands() {
  const lands = store.get(allLandsAtom);
  console.log(lands);

  let listTx = [];
  for (const land of lands) {
    const listing = createListing({
      contract: marketplaceContract,
      params: {
        assetContract: landContract.address,
        tokenId: land.nft.id,
        currency: linkContract.address,
        endTimestamp: 1719699072n,
        pricePerToken: 1000000n,
        quantity: 1n,
        reserved: false,
        startTimestamp: BigInt(Math.floor(new Date().getTime() / 1000)),
      },
    });
    listTx.push(listing);
    if (listTx.length === 10 || land === lands[lands.length - 1]) {
      console.log("List Tx: ", listTx);
      const batchTxResult = await sendAndConfirmMulticall(
        listTx,
        marketplaceContract
      );
      console.log("Batch Tx Result: ", batchTxResult);
      listTx = [];
    }
  }
}

// EXAMPLE OF INPUT PARAMS FOR LISTING LANDS
//   {
//     "assetContract": "0x0eC91918B843C99daE10b20873c0311eD048d7e3",
//     "tokenId": 165,
//     "quantity": 1,
//     "currency": "0x5576815a38A3706f37bf815b261cCc7cCA77e975",
//     "pricePerToken": 1000,
//     "startTimestamp": 1717032871,
//     "endTimestamp": 1717106541,
//     "reserved": false
// }
