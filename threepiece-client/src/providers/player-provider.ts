import { NFT } from "thirdweb";
import { Player, PlayerNFT, PlayerNFTAttributes } from "../thirdweb/types";
import { getAllPlayerNFTs, playerContract } from "./web3-provider";
import { claimTo, lazyMint } from "thirdweb/extensions/erc721";
import {
  batchUpdateAttribute,
  sendAndConfirmMulticall,
  updateMetadata,
} from "./backend/scripts/erc721-scripts";
import { adminAccount } from "./backend/admin";

export const allplayersNfts = await getAllPlayerNFTs();
export const allPlayers = nftsToPlayer(allplayersNfts);

export function getCurrentPlayerInfo(playerAddress: string) {
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
  if(adminAccount.address === playerAddress) {
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
}

export async function changePlayerNameNft(
  playerAddress: string,
  newName: string
) {
  const playerInfo = getCurrentPlayerInfo(playerAddress);
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
}
