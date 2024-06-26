import { Address, NFT, sendAndConfirmTransaction } from "thirdweb";
import {
  Land,
  LandNFT,
  LandNFTAttributes,
  isValidLand,
} from "../thirdweb/types";
import { getAllLandNFTs, landContract, woodContract } from "./web3-provider";
import { atom, useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import { useMemo } from "react";
import { store } from "./store";
import {
  getCumulativeDurationStaked,
  isStaked,
  stake,
  unstake,
} from "../thirdweb/generated-contracts/nft-drop";
import {
  sendAndConfirmMulticall,
  updateMetadata,
} from "./backend/scripts/erc721-scripts";
import { mintTo } from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { adminAccount } from "./backend/admin";
import { Account } from "thirdweb/wallets";

// NOTE: This part should usually be protected in an API
const allLandNfts = await getAllLandNFTs();

export const landsNftsAtom = atom(allLandNfts);

export const allLandsAtom = atom((get) => {
  const allLandNfts = get(landsNftsAtom);
  return nftsToLands(allLandNfts);
});

export function useGetLandsNft() {
  return useAtomValue(landsNftsAtom);
}

export function useGetLands() {
  return useAtomValue(allLandsAtom);
}

export function useGetPlayerLands(ownerAddress: string) {
  const playerLandsAtom = useMemo(
    () =>
      selectAtom(allLandsAtom, (lands) =>
        lands.filter((land) => land.ownerAddress === ownerAddress)
      ),
    [ownerAddress]
  );
  return useAtomValue(playerLandsAtom);
}

export function useGetPlayerLandsHeight() {
  const landsHeightAtom = useMemo(
    () => selectAtom(allLandsAtom, (lands) => lands.length),
    []
  );
  return useAtomValue(landsHeightAtom);
}

export function useGetLandIds(): number[] {
  const gameTilesAtom = useMemo(
    () => selectAtom(allLandsAtom, (lands) => lands.map((land) => land.id)),
    []
  );

  return useAtomValue(gameTilesAtom);
}

export async function stakeLand(tokenId: bigint, account: Account) {
  const stakeTx = stake({
    tokenId,
    contract: landContract,
  });

  const batchResult = await sendAndConfirmTransaction({
    account: account,
    transaction: stakeTx
  });
  console.log(batchResult);
  store.set(landsNftsAtom, await getAllLandNFTs());
}

export async function unStakeLand(
  tokenId: bigint,
  time: number,
  account: Account
) {
  const unStakeTx = unstake({
    tokenId,
    contract: landContract,
  });

  const nftLands = store.get(landsNftsAtom);
  const land = nftLands.find((land) => land.id === tokenId);

  for (const resource of land.metadata.attributes[1].value) {
    const amountProduce = Number(time * 100)
    resource.Amount += amountProduce;
    await mintWood(resource.Amount, account.address as Address);
    console.log("minted", resource.Amount, "wood");
  }

  await updateMetadata(land.metadata, nftLands, Number(tokenId), landContract);

  const batchResult = await sendAndConfirmTransaction({
    account: account,
    transaction: unStakeTx
  });
  console.log("unStake result for land", tokenId, batchResult);
  store.set(landsNftsAtom, await getAllLandNFTs());
}

export async function mintWood(amount: number, account: Address) {
  const tx = mintTo({
    amount,
    to: account,
    contract: woodContract,
  });

  const result = await sendAndConfirmTransaction({
    transaction: tx,
    account: adminAccount,
  });

  console.log(result);
}

export async function getLandCurrentStake(tokenId: bigint) {
  const result = await getCumulativeDurationStaked({
    tokenId,
    contract: landContract,
  });
  return result;
}

export function nftsToLands(nfts: NFT[]) {
  const lands: Land[] = [];

  for (const nft of nfts) {
    const landNftAttributes = nft.metadata
      .attributes as unknown as LandNFTAttributes;
    if (typeof landNftAttributes?.[1]?.value === "string") {
      landNftAttributes[1].value = JSON.parse(landNftAttributes?.[1]?.value);
    }

    const land: Land = {
      ownerAddress: nft.owner,
      nft: nft as LandNFT,
      id: Number(landNftAttributes?.[0]?.value),
      resources: landNftAttributes?.[1]?.value.map((l) => {
        return {
          ...l,
          productionEndDate:
            l?.productionEndDate && new Date(l.productionEndDate),
        };
      }),
      event: landNftAttributes?.[2]?.value,
    };

    if (!isValidLand(land)) {
      console.log(landNftAttributes);
      console.log("Problem parsing NFT " + nft.id);
    }

    lands.push(land);
  }

  return lands;
}

export async function getCumulativeDurationByLand(tokenId: bigint) {
  return await getCumulativeDurationStaked({
    contract: landContract,
    tokenId,
  });
}

export async function getIsLandStaked(tokenId: bigint) {
  return await isStaked({
    contract: landContract,
    tokenId,
  });
}
