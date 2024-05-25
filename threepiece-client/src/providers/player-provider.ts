import { NFT } from "thirdweb";
import { Player, PlayerNFT, PlayerNFTAttributes } from "../thirdweb/types";
import { getAllPlayerNFTs, playerContract } from "./web3-provider";
import { claimTo, lazyMint } from "thirdweb/extensions/erc721";
import {
  batchUpdateAttribute,
  sendAndConfirmMulticall,
  updateMetadata,
} from "./backend/scripts/erc721-scripts";
import { atom, getDefaultStore } from "jotai";
import { adminAccount } from "./backend/admin";

const allPlayersNfts = await getAllPlayerNFTs();
const playerStore = getDefaultStore();

const allPlayersNftsAtom = atom(allPlayersNfts);
const allPlayersAtom = atom((get) => {
  const allPlayersNfts = get(allPlayersNftsAtom);
  return nftsToPlayer(allPlayersNfts);
});

export function getCurrentPlayerInfo(playerAddress: string) {
  const allPlayers = playerStore.get(allPlayersAtom);
  return allPlayers.find((land) => land.ownerAddress == playerAddress);
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
  if (getCurrentPlayerInfo(playerAddress)) {
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
  playerStore.set(allPlayersNftsAtom, await getAllPlayerNFTs());
}

export async function findOrCreatePlayerNft(playerAddress: string) {
  const playerInfo = getCurrentPlayerInfo(playerAddress);
  if (playerInfo) {
    return playerInfo;
  }
  if (adminAccount.address === playerAddress) {
    throw new Error("Admin can't be a player NFT");
  }
  console.info("Player not found, creating new player...");
  await createNewPlayerNft(playerAddress);
  return getCurrentPlayerInfo(playerAddress);
}

export async function incrementePlayerLevelNft(playerAddress: string) {
  const playerInfo = getCurrentPlayerInfo(playerAddress);

  await batchUpdateAttribute(
    {
      trait_type: "level",
      value: playerInfo.level + 1,
    },
    [playerInfo.nft],
    playerContract
  );
  playerStore.set(allPlayersNftsAtom, await getAllPlayerNFTs());
}

export async function changePlayerNameNft(
  playerAddress: string,
  newName: string
) {
  const playerInfo = getCurrentPlayerInfo(playerAddress);
  const allplayersNfts = playerStore.get(allPlayersNftsAtom);
  const nft = playerInfo.nft;
  await updateMetadata(
    {
      ...nft.metadata,
      name: newName,
    },
    allplayersNfts,
    Number(nft.id),
    playerContract
  );
  playerStore.set(allPlayersNftsAtom, await getAllPlayerNFTs());
}
