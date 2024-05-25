import { NFT } from "thirdweb";
import { Player, PlayerNFT, PlayerNFTAttributes } from "../thirdweb/types";
import { getAllPlayerNFTs, playerContract } from "./web3-provider";
import { claimTo, lazyMint } from "thirdweb/extensions/erc721";
import {
  batchUpdateAttribute,
  sendAndConfirmMulticall,
  updateMetadata,
} from "./backend/scripts/erc721-scripts";
import { atom, useAtomValue } from "jotai";
import { adminAccount } from "./backend/admin";
import { selectAtom } from "jotai/utils";
import { store } from "./store";
import { useMemo } from "react";

const allPlayersNfts = await getAllPlayerNFTs();

const allPlayersNftsAtom = atom(allPlayersNfts);

const allPlayersAtom = atom((get) => {
  const allPlayersNfts = get(allPlayersNftsAtom);
  return nftsToPlayer(allPlayersNfts);
});

export function useGetPlayersNft() {
  return useAtomValue(allPlayersNftsAtom);
}
export function useGetPlayers() {
  return useAtomValue(allPlayersAtom);
}

const getCurrentPlayerInfo = (playerAddress: string, player: Player[]) =>
  player.find((player) => player.ownerAddress === playerAddress);

export function useGetPlayer(playerAddress: string) {
  const playerAtom = useMemo(
    () =>
      selectAtom(allPlayersAtom, (players) =>
        players.find((player) => player.ownerAddress === playerAddress)
      ),
    [playerAddress]
  );
  return useAtomValue(playerAtom);
}

function nftsToPlayer(nfts: NFT[]) {
  const players: Player[] = [];

  for (const nft of nfts) {
    const playerNftAttributes = nft.metadata
      .attributes as unknown as PlayerNFTAttributes;

    const player: Player = {
      ownerAddress: nft.owner,
      level: Number(playerNftAttributes?.[0]?.value),
      nft: nft as PlayerNFT,
    };

    players.push(player);
  }

  return players;
}

export async function createNewPlayerNft(
  playerAddress: string,
  level?: number
) {
  const playerInfo = store.get(allPlayersAtom);
  if (getCurrentPlayerInfo(playerAddress, playerInfo)) {
    throw new Error("Player already exists");
  }
  if (adminAccount.address === playerAddress) {
    throw new Error("Admin can't be a player NFT");
  }
  const value = level || 1;
  const attributes: PlayerNFTAttributes = [
    {
      trait_type: "level",
      value,
    },
  ];

  const nft = {
    name: "LandLoomer",
    attributes,
  };

  const mintTx = lazyMint({
    contract: playerContract,
    nfts: [nft],
  });
  const claimTx = claimTo({
    contract: playerContract,
    quantity: BigInt(1),
    to: playerAddress,
  });

  const batchResult = await sendAndConfirmMulticall(
    [mintTx, claimTx],
    playerContract
  );
  console.log(batchResult);
  store.set(allPlayersNftsAtom, await getAllPlayerNFTs());
}

export async function findOrCreatePlayerNft(playerAddress: string) {
  const players = store.get(allPlayersAtom);

  const playerInfo = getCurrentPlayerInfo(playerAddress, players);
  if (playerInfo) {
    return playerInfo;
  }
  if (adminAccount.address === playerAddress) {
    throw new Error("Admin can't be a player NFT");
  }
  console.info("Player not found, creating new player...");
  await createNewPlayerNft(playerAddress);
  const newPlayers = store.get(allPlayersAtom);
  return getCurrentPlayerInfo(playerAddress, newPlayers);
}

export async function incrementePlayerLevelNft(playerAddress: string) {
  const players = store.get(allPlayersAtom);
  const playerInfo = getCurrentPlayerInfo(playerAddress, players);

  await batchUpdateAttribute(
    {
      trait_type: "level",
      value: playerInfo.level + 1,
    },
    [playerInfo.nft],
    playerContract
  );
  store.set(allPlayersNftsAtom, await getAllPlayerNFTs());
}

export async function changePlayerNameNft(
  playerAddress: string,
  newName: string
) {
  const playersNft = store.get(allPlayersNftsAtom);
  const nft = playersNft.find((nft) => nft.owner === playerAddress);
  await updateMetadata(
    {
      ...nft.metadata,
      name: newName,
    },
    playersNft,
    Number(nft.id),
    playerContract
  );
  store.set(allPlayersNftsAtom, await getAllPlayerNFTs());
}
