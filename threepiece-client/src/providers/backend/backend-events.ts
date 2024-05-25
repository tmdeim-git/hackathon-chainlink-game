import { resolve } from "dns";
import { watchContractEvents } from "thirdweb";
import {
  vrfChanceEventRequestEvent,
  vrfChanceEventResultEvent,
  vrfRngResultEvent,
} from "../../thirdweb/generated-contracts/vrf";
import { vrfContract } from "../web3-provider";
import { GameEvent, isInEnum } from "../../thirdweb/types";
import { store } from "../store";
import { landsNftsAtom } from "../land-provider";

type Listener = (message: string) => void;
let started: boolean = false;
const listeners: Listener[] = [];

export function addBackendListener(callback?: (message: string) => void) {
  listeners.push(callback);
}

const unwatch = watchContractEvents({
  onEvents(events) {
    const allLandNfts = store.get(landsNftsAtom);
    const event = events[0];
    const { eventName, results } = event.args;
    let message: string;
    console.log("Chance event received", event.args);

    if (isInEnum(eventName, GameEvent.Land)) {
      if (results.length < allLandNfts.length) {
        throw "Not enough results to update lands";
      }

      if (eventName === GameEvent.Land.Raining) {
        results.forEach((result, index) => {
          if (result) {
            const nftToModify = allLandNfts[index];
            // TODO: process raining
          }
        });
      }
      message = `PUBLIC EVENT ANNOUNCEMENT!\n The event "${eventName}" just happened for some lands!`;
    } else if (isInEnum(eventName, GameEvent.Game)) {
      if (eventName === GameEvent.Game.Lootbox) {
        // TODO: process lootbox
      }
    }

    if (message)
      // no message for some events
      listeners.forEach((callback) => callback(message));
  },
  events: [vrfChanceEventResultEvent()],
  contract: vrfContract,
});
