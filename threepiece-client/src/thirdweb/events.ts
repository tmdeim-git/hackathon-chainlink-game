import { watchContractEvents } from "thirdweb";
import { tokensLazyMintedEvent, batchMetadataUpdateEvent, transferEvent } from "./11155111/0x3268a076ec2723d3ee842f670839bf3920dc27fb";
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