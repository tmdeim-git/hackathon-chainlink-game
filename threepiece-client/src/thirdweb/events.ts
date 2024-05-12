import { watchContractEvents } from "thirdweb";
import { tokensLazyMintedEvent, batchMetadataUpdateEvent, transferSingleEvent } from "./11155111/0xb9d3464f18c8c8dff01daa1980e605ebed195787";
import { landContract } from "./provider";

const unwatchTokenCreated = watchContractEvents({
    onEvents(events) {
        const event = events[0];
        const id = event.args.startTokenId;
        console.log(`Token created`, event);
    },
    events: [tokensLazyMintedEvent()],
    contract: landContract
})

const unwatchMetadataUpdate = watchContractEvents({
    onEvents(events) {
        const event = events[0];
        const id = event.args._fromTokenId;
        console.log(`Token metadata updated`, event);
    },
    events: [batchMetadataUpdateEvent()],
    contract: landContract
})

const unwatchTransfer = watchContractEvents({
    onEvents(events) {
        const event = events[0];
        const { id, from, to } = event.args;
        console.log(`Token ${id} transfered from ${from} to ${to}`)
    },
    events: [transferSingleEvent()],
    contract: landContract
})