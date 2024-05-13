import { watchContractEvents } from "thirdweb";
import {
  tokensLazyMintedEvent,
  batchMetadataUpdateEvent,
  transferEvent,
} from "./11155111/erc721";
import { landContract } from "./provider";

export function startEvent(onEvent?: (message: string) => void) {
  startTokenCreatedEvent(onEvent);
  startMetadataUpdateEvent(onEvent);
  startTransferEvent(onEvent);
}

const startTokenCreatedEvent = (onEvent?: (message: string) => void) =>
  watchContractEvents({
    onEvents(events) {
      const event = events[0];
      const id = event.args.startTokenId;
      console.log(`Token created`, event);
      onEvent && onEvent("token has been created");
    },
    events: [tokensLazyMintedEvent()],
    contract: landContract,
  });

const startMetadataUpdateEvent = (onEvent?: (message: string) => void) =>
  watchContractEvents({
    onEvents(events) {
      const event = events[0];
      const id = event.args._fromTokenId;
      console.log(`Token metadata updated`, event);
      onEvent && onEvent("token has been created");
    },
    events: [batchMetadataUpdateEvent()],
    contract: landContract,
  });

const startTransferEvent = (onEvent?: (message: string) => void) =>
  watchContractEvents({
    onEvents(events) {
      console.log("event", events);
      const event = events[0];
      let message: string;
      if (event.args.from == "0x0000000000000000000000000000000000000000") {
        console.log("Token claimed", event);
        message = "token has been created";
      } else if (
        event.args.to == "0x0000000000000000000000000000000000000000"
      ) {
        console.log("Token burned", event);
        message = "Token burned";
      } else {
        message = "Token transfered";
      }
      onEvent && onEvent(message);
    },
    events: [transferEvent()],
    contract: landContract,
  });
