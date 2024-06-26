import { watchContractEvents } from "thirdweb";
import {
  tokensLazyMintedEvent,
  batchMetadataUpdateEvent,
  transferEvent,
  stakedEvent,
  unstakedEvent,
} from "./generated-contracts/nft-drop";
import { landContract, vrfContract } from "../providers/web3-provider";
import {
  vrfChanceEventRequestEvent,
  vrfRngRequestEvent,
} from "./generated-contracts/vrf";
import { GameEvent, isInEnum } from "./types";
import { addBackendListener } from "../providers/backend/backend-events";
import { refreshNfts } from "../providers/store";
import {
  newListingEvent,
  newSaleEvent,
  cancelledListingEvent,
  updatedListingEvent,
} from "./generated-contracts/marketplace";
import { marketplaceContract } from "../providers/marketplace-provider";

type Listener = (message: string) => void;
let started: boolean = false;
const listeners: Listener[] = [];

export function clientAddListener(
  callback: (message: string) => void = () => { }
) {
  if (!started) {
    startTokenCreatedEvent();
    startMetadataUpdateEvent();
    startTransferEvent();
    startVrfChanceRequestEvent();
    stakeLandEvent();
    unstakeLandEvent();
    startVrfRequestEvent(); // TODO: we shouldnt show the vrf requests usually
    //startMarketplaceEvents();
    console.log("started events");
    started = true;
  }
  addBackendListener(callback);
  listeners.push(callback);
}

const startVrfRequestEvent = () =>
  watchContractEvents({
    onEvents(events) {
      const { args } = events[0];
      // callback && callback(`VRF Request sent`);
      listeners.forEach((callback) =>
        callback(
          `[DEBUG] VRF Request: ${args.numberOfResultsWanted} results from ${args.startRange} to ${args.endRange}!`
        )
      );
    },
    events: [vrfRngRequestEvent()],
    contract: vrfContract,
  });

const startVrfChanceRequestEvent = () =>
  watchContractEvents({
    onEvents(events) {
      // refreshNfts();
      const { args } = events[0];
      // callback && callback(`VRF Request sent`);
      console.log(`Event received:`, args);

      if (isInEnum(args.eventName, GameEvent.Land)) {
        const message = `Look out for your lands!\n Event coming up: ${args.eventName} with ${args.chance}% chance!`;
        listeners.forEach((callback) => callback(message));
      }
    },
    events: [vrfChanceEventRequestEvent()],
    contract: vrfContract,
  });

const startTokenCreatedEvent = () =>
  watchContractEvents({
    onEvents(events) {
      // refreshNfts();
      const event = events[0];
      const id = event.args.startTokenId;
      console.log(`Token lazy minted`, event);
      const message = `New NFT of ID ${id} has been created!`;
      listeners.forEach((callback) => callback(message));
    },
    events: [tokensLazyMintedEvent()],
    contract: landContract,
  });

const startMetadataUpdateEvent = () =>
  watchContractEvents({
    onEvents(events) {
      refreshNfts();
      const { args } = events[0];
      let message: string;
      console.log(`Token metadata updated`, events);
      if (args._toTokenId - args._fromTokenId > 1n) {
        message = `NFTs ${args._fromTokenId} to ${args._toTokenId} updated!`;
      } else {
        const id = args._fromTokenId;
        message = `NFT ${id} has been updated.`;
      }
      listeners.forEach((callback) => callback(message));
    },
    events: [batchMetadataUpdateEvent()],
    contract: landContract,
  });

const startTransferEvent = () =>
  watchContractEvents({
    onEvents(events) {
      // refreshNfts();
      const event = events[0];
      let message: string = `A tile has been transfered from ${event.args.from} to ${event.args.to}`;
      if (event.args.from == "0x0000000000000000000000000000000000000000") {
        console.log("Token claimed", event);
        message = `${event.args.to} has claimed an tile`;
      } else if (
        event.args.to == "0x0000000000000000000000000000000000000000"
      ) {
        console.log("Token burned", event);
        message = `${event.args.from} has burned a tile`;
      }

      listeners.forEach((callback) => callback(message));
    },
    events: [transferEvent()],
    contract: landContract,
  });

const stakeLandEvent = () =>
  watchContractEvents({
    onEvents(events) {
      // refreshNfts();
      const test = events[0].args;

      console.log("Stake result for land", test);

      const message = "A tile has begin to produce resources!";

      listeners.forEach((callback) => callback(message));
    },
    events: [stakedEvent()],
    contract: landContract,
  });

const unstakeLandEvent = () =>
  watchContractEvents({
    onEvents(events) {
      // refreshNfts();
      const test = events[0].args;

      console.log("Stake result for land", test);

      const message = "A land just stop producing resources!";

      listeners.forEach((callback) => callback(message));
    },
    events: [unstakedEvent()],
    contract: landContract,
  });

// const startMarketplaceEvents = () =>
//   watchContractEvents({
//     onEvents(events) {
//       refreshNfts();
//       const event = events[0];
//       let message: string = `Marketplace trade event!`;
//       listeners.forEach((callback) => callback(message));
//     },
//     events: [
//       newListingEvent(),
//       newSaleEvent(),
//       cancelledListingEvent(),
//       updatedListingEvent(),
//     ],
//     contract: marketplaceContract,
//   });
