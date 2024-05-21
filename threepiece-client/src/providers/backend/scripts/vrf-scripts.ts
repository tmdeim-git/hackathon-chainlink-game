import { sendAndConfirmTransaction, watchContractEvents } from "thirdweb";
import { VrfRngParams, vrfRng, vrfRngRequestEvent, vrfRngResultEvent } from "../../../thirdweb/generated-contracts/vrf";
import { vrfContract } from "../../web3-provider";
import { adminAccount } from "../admin";

export async function getRandomNumbersWithVrf(params: VrfRngParams) {
    const transaction = vrfRng({
        contract: vrfContract,
        ...params
    })

    sendAndConfirmTransaction({
        transaction,
        account: adminAccount,
    })

    const currentRequestId = await new Promise<bigint>((resolve) => {
        const unwatch = watchContractEvents({
            onEvents(events) {
                const { args } = events[0];
                console.log("RNG Request sent", args)
                unwatch();
                resolve(args.requestId);
            },
            events: [(vrfRngRequestEvent())],
            contract: vrfContract,
        })
    });

    return new Promise<readonly bigint[]>((resolve) => {
        const unwatch = watchContractEvents({
            onEvents(events) {
                const event = events[0];
                const { requestId, numbersGenerated } = event.args;
                console.log(`RNG result`, event);
                unwatch();
                if (requestId === currentRequestId)
                    resolve(numbersGenerated);
            },
            events: [(vrfRngResultEvent())],
            contract: vrfContract,
        });
    });
}