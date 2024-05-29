import { resolve } from "dns";
import { watchContractEvents } from "thirdweb";
import {
  vrfChanceEventRequestEvent,
  vrfChanceEventResultEvent,
  vrfRngResultEvent,
} from "../../thirdweb/generated-contracts/vrf";
import { landContract, vrfContract } from "../web3-provider";
import { GameEvent, Land, LandNFT, isInEnum } from "../../thirdweb/types";
import { store } from "../store";
import { landsNftsAtom } from "../land-provider";
import { batchUpdateMetadata } from "./scripts/erc721-scripts";

type Listener = (message: string) => void;
let started: boolean = false;
const listeners: Listener[] = [];

export function addBackendListener(callback?: (message: string) => void) {
  if (!started) {
    start();
    console.log("started backend events");
    started = true;
  }
  listeners.push(callback);
}

const start = () =>
  watchContractEvents({
    async onEvents(events) {
      const allLandNfts = store.get(landsNftsAtom);
      const event = events[0];
      const { eventName, results } = event.args;
      let message: string;
      let finalNft = allLandNfts.map((land) => land.metadata);
      console.log("Chance event received", event.args);

      if (isInEnum(eventName, GameEvent.Land)) {
        if (results.length < allLandNfts.length) {
          throw "Not enough results to update lands";
        }

        if (eventName === GameEvent.Land.Raining) {
          finalNft = allLandNfts.map((nftToModify, index) => {
            const result = results[index];
            // TODO: process raining
            if (!result) return nftToModify.metadata;
            console.log(
              "RAINING ON NFT TILE",
              nftToModify.metadata.attributes[0]
            );
            return {
              ...nftToModify.metadata,
              attributes: [
                nftToModify.metadata.attributes[0],
                nftToModify.metadata.attributes[1],
                {
                  trait_type: "event",
                  value: GameEvent.Land.Raining,
                },
              ],
            } as LandNFT["metadata"];
          });
        }
        message = `PUBLIC EVENT ANNOUNCEMENT!\n The event "${eventName}" just happened for some lands!`;
      } else if (isInEnum(eventName, GameEvent.Game)) {
        if (eventName === GameEvent.Game.Lootbox) {
          // TODO: process lootbox
        }
      }

      await batchUpdateMetadata(finalNft, landContract, allLandNfts[0].id);
      if (message)
        // no message for some events
        listeners.forEach((callback) => callback(message));
    },
    events: [vrfChanceEventResultEvent()],
    contract: vrfContract,
  });
