import seedrandom from 'seedrandom';
import { adminAccount, vrfContract } from './web3-provider';
import { requestFulfilledEvent, requestRandomWords, requestSentEvent } from '../thirdweb/generated-contracts/vrf';
import { sendAndConfirmTransaction, watchContractEvents } from 'thirdweb';


let seed: string | undefined;
export async function rngVrf(startRange: number, endRange: number) {
    if (!seed) {
        const transaction = requestRandomWords({
            contract: vrfContract
        })

        sendAndConfirmTransaction({
            transaction,
            account: adminAccount,
        })

        await getVrfSeed();
    }
    console.log(seed);

    const rng = seedrandom(seed);

    // Generate a random number within the specified range
    const randomNumber = Math.floor(rng() * (endRange - startRange + 1)) + startRange;

    return randomNumber;
}

const getVrfSeed = (): Promise<string> => {
    return new Promise<string>((resolve) => {
        const unwatch = watchContractEvents({
            onEvents(events) {
                const event = events[0];
                seed = String(event.args.randomWords[0]);
                console.log(`Seed received`, event);
                unwatch();
                resolve(seed); // Resolve the promise once the event is received
            },
            events: [requestFulfilledEvent()],
            contract: vrfContract,
        });
    });
};