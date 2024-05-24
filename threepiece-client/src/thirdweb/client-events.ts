import { watchContractEvents } from "thirdweb";
import {
    tokensLazyMintedEvent,
    batchMetadataUpdateEvent,
    transferEvent,
} from "./generated-contracts/nft-drop";
import { landContract, vrfContract } from "../providers/web3-provider";
import { vrfChanceEventRequestEvent } from "./generated-contracts/vrf";
import { GameEvent, isInEnum } from "./types";
import { addBackendListener as backendAddListener } from "../providers/backend/backend-events";

type Listener = (message: string) => void;
let started: boolean = false;
const listeners: Listener[] = []

export function clientAddListener(callback: (message: string) => void = () => {}) {
    if (!started) {
        startTokenCreatedEvent();
        startMetadataUpdateEvent();
        startTransferEvent();
        startVrfRequestEvent();
        console.log("started events");
        started = true;
    }
    backendAddListener(callback);
    listeners.push(callback);
}

const startVrfRequestEvent = () =>
    watchContractEvents({
        onEvents(events) {
            const { args } = events[0];
            // callback && callback(`VRF Request sent`);
            console.log(`Event received:`, args);

            if (isInEnum(args.eventName, GameEvent.Land)) {
                const message = `Look out for your lands!\n Event coming up: ${args.eventName} with ${args.chance}% chance!`;
                listeners.forEach(callback => callback(message));
            }
        },
        events: [vrfChanceEventRequestEvent()],
        contract: vrfContract,
    });

const startTokenCreatedEvent = () =>
    watchContractEvents({
        onEvents(events) {
            const event = events[0];
            const id = event.args.startTokenId;
            console.log(`Token lazy minted`, event);
            const message = `New NFT of ID ${id} has been created!`;
            listeners.forEach(callback => callback(message));
        },
        events: [tokensLazyMintedEvent()],
        contract: landContract,
    });

const startMetadataUpdateEvent = () =>
    watchContractEvents({
        onEvents(events) {
            const event = events[0];
            const id = event.args._fromTokenId;
            console.log(`Token metadata updated`, event);
            const message = `NFT ${id} has been updated.`;
            listeners.forEach(callback => callback(message));
        },
        events: [batchMetadataUpdateEvent()],
        contract: landContract,
    });

const startTransferEvent = () =>
    watchContractEvents({
        onEvents(events) {
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

            listeners.forEach(callback => callback(message));
        },
        events: [transferEvent()],
        contract: landContract,
    });