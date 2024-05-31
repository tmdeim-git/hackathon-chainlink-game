import { sendAndConfirmTransaction } from "thirdweb";
import { createListing } from "../../../../thirdweb/generated-contracts/marketplace";
import { allLandsAtom } from "../../../land-provider";
import { marketplaceContract } from "../../../marketplace-provider";
import { store } from "../../../store";
import { landContract, linkContract } from "../../../web3-provider";
import { sendAndConfirmMulticall } from "../erc721-scripts";
import { Account } from "thirdweb/wallets";
import { approve } from "../../../../thirdweb/generated-contracts/nft-drop";

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

export async function listNftById({
  id,
  account,
  price,
}: {
  id: bigint;
  account: Account;
  price: number;
}) {
  const approveNFT = approve({
    contract: landContract,
    to: marketplaceContract.address,
    tokenId: id,
  });

  console.log("Approve NFT: ", approveNFT);

  const approveTxResult = await sendAndConfirmTransaction({
    transaction: approveNFT,
    account: account,
  });

  console.log("Approve Tx Result: ", approveTxResult);

  const listing = createListing({
    contract: marketplaceContract,
    params: {
      assetContract: landContract.address,
      tokenId: id,
      currency: linkContract.address,
      endTimestamp: BigInt(
        Math.floor(
          new Date(new Date().setDate(new Date().getDate() + 30)).getTime() /
            1000
        )
      ),
      pricePerToken: BigInt(price * 1e18),
      quantity: 1n,
      reserved: false,
      startTimestamp: BigInt(Math.floor(new Date().getTime() / 1000)),
    },
  });

  console.log("Listing: ", listing);

  const txResult = await sendAndConfirmTransaction({
    transaction: listing,
    account: account,
  });

  console.log("Tx Result: ", txResult);
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
