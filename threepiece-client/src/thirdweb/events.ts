import { watchContractEvents } from "thirdweb";
import {
    tokensLazyMintedEvent,
    batchMetadataUpdateEvent,
    transferEvent,
} from "./generated-contracts/nft-drop";
import { landContract } from "../providers/web3-provider";

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
            onEvent && onEvent(`${id} has created a new tile`);
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
            onEvent && onEvent(`${id} has updated a tile`);
        },
        events: [batchMetadataUpdateEvent()],
        contract: landContract,
    });

const startTransferEvent = (onEvent?: (message: string) => void) =>
    watchContractEvents({
        onEvents(events) {
            const event = events[0];
            let message: string;
            if (event.args.from == "0x0000000000000000000000000000000000000000") {
                console.log("Token claimed", event);
                message = `${event.args.to} has claimed an tile`;
            } else if (
                event.args.to == "0x0000000000000000000000000000000000000000"
            ) {
                console.log("Token burned", event);
                message = `${event.args.from} has burned a tile`;
            } else {
                message = `A tile has been transfered from ${event.args.from} to ${event.args.to}`;
            }
            onEvent && onEvent(message);
        },
        events: [transferEvent()],
        contract: landContract,
    });
