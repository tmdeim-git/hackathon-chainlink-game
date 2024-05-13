import { watchContractEvents } from "thirdweb";
import { tokensLazyMintedEvent, batchMetadataUpdateEvent, transferEvent } from "./11155111/erc721";
import { landContract } from "./provider";

export function startEvent() {
    startTokenCreatedEvent();
    startMetadataUpdateEvent();
    startTransferEvent();
}

const startTokenCreatedEvent = () => watchContractEvents({
    onEvents(events) {
        const event = events[0];
        const id = event.args.startTokenId;
        console.log(`Token created`, event);
    },
    events: [tokensLazyMintedEvent()],
    contract: landContract
})

const startMetadataUpdateEvent = () => watchContractEvents({
    onEvents(events) {
        const event = events[0];
        const id = event.args._fromTokenId;
        console.log(`Token metadata updated`, event);
    },
    events: [batchMetadataUpdateEvent()],
    contract: landContract
})

const startTransferEvent = () => watchContractEvents({
    onEvents(events) {
        const event = events[0];
        if (event.args.from == "0x0000000000000000000000000000000000000000") {
            console.log("Token claimed", event)
        } else if (event.args.to == "0x0000000000000000000000000000000000000000") {
            console.log("Token burned", event)
        } else {
            console.log("Token transfered", event)
        }
    },
    events: [transferEvent()],
    contract: landContract
})