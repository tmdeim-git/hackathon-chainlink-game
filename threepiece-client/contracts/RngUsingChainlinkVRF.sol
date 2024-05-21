// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

///// UPDATE IMPORTS TO V2.5 /////
import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract RngUsingChainlinkVRF is
    VRFConsumerBaseV2Plus,
    AutomationCompatibleInterface,
    ContractMetadata
{
    event Log(string log);
    event VrfRngRequest(
        uint256 requestId,
        uint32 numberOfResultsWanted,
        uint256 startRange,
        uint256 endRange
    );
    event VrfRngResult(uint256 requestId, uint256[] numbersGenerated);
    event VrfChanceEventRequest(
        uint256 requestId,
        string eventName,
        uint8 chance,
        uint256 numberOfResultsWanted
    );
    event VrfChanceEventResult(
        uint256 requestId,
        string eventName,
        bool[] results
    );



    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
        Rng rng;
        ChanceEvent chanceEvent;
    }

    struct Rng {
        uint256 numberOfResultsWanted;
        uint256 startRange;
        uint256 endRange;
    }

    struct ChanceEvent {
        string eventName;
        uint8 chance;
    }


    mapping(uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */

    uint256 s_subscriptionId;

    uint256[] public requestIds;
    uint256 public lastRequestId;

    bytes32 immutable keyHash;
    uint32 callbackGasLimit = 2500000; // max 2500000
    uint16 requestConfirmations = 3;

    // TODO: consider using chainlink vrf as the random number if we want less than the max (500), does it helps gas?
    uint32 numberVrfWanted = 1;

    // for metadata updates
    address public deployer;

    // for upkeep contract
    uint256 public upkeepCounter;

    constructor(
        uint256 _subscriptionId,
        address _vrfCoordinator,
        bytes32 _keyHash
    ) VRFConsumerBaseV2Plus(_vrfCoordinator) {
        s_subscriptionId = _subscriptionId;
        keyHash = _keyHash;
        deployer = msg.sender;
    }

    // ================ RANDOM CHANCE GENERATION ============

    function vrfTriggerChanceEvent(
        string memory eventName,
        uint8 chance,
        uint256 numberOfResultsWanted
    ) public onlyOwner returns (uint256 requestId) {
        require(chance <= 100, "Chance of success must be between 0 and 100");
        requestId = requestRandomWords();

        // rng settings
        RequestStatus storage request = s_requests[requestId];
        request.rng = Rng({
            numberOfResultsWanted: numberOfResultsWanted,
            startRange: 0,
            endRange: 100
        });

        // chance random event request creation
        request.chanceEvent = ChanceEvent({
            eventName: eventName,
            chance: chance
        });

        emit VrfChanceEventRequest(
            requestId,
            eventName,
            chance,
            numberOfResultsWanted
        );

        return requestId;
    }

    function vrfRng(
        uint32 numberOfResultsWanted,
        uint256 startRange,
        uint256 endRange
    ) public onlyOwner returns (uint256 requestId) {
        requestId = requestRandomWords();

        // rng settings
        RequestStatus storage request = s_requests[requestId];
        request.rng = Rng({
            numberOfResultsWanted: numberOfResultsWanted,
            startRange: startRange,
            endRange: endRange
        });

        emit VrfRngRequest(
            requestId,
            numberOfResultsWanted,
            startRange,
            endRange
        );
        return requestId;
    }

    // ================ CHAINLINK VRF ============

    function requestRandomWords() public onlyOwner returns (uint256 requestId) {
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numberVrfWanted,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );
        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false,
            rng: Rng({numberOfResultsWanted: 0, startRange: 0, endRange: 0}),
            chanceEvent: ChanceEvent({eventName: "", chance: 0})
        });
        requestIds.push(requestId);
        lastRequestId = requestId;
        return requestId; // requestID is a uint.
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        RequestStatus storage request = s_requests[_requestId];
        require(request.exists, "Request not found");
        request.fulfilled = true;
        request.randomWords = _randomWords;

        // 1. do nothing with a request by default (no leak of seed)

        // ---

        // 2. emite rng results

        Rng memory rng = request.rng;
        if (rng.numberOfResultsWanted == 0) {
            revert("Invalid RNG settings");
        }
        //
        uint256 seed = request.randomWords[0];
        uint256[] memory rngResults = new uint256[](rng.numberOfResultsWanted);

        for (uint256 i = 0; i < rngResults.length; i++) {
            rngResults[i] = generateRandomNumber(
                seed,
                i,
                rng.startRange,
                rng.endRange
            );
        }
        emit VrfRngResult(_requestId, rngResults);

        if (bytes(request.chanceEvent.eventName).length > 0) {
            // 3. emit chance results
            ChanceEvent memory chanceEvent = request.chanceEvent;

            bool[] memory eventResults = new bool[](rng.numberOfResultsWanted);

            for (uint256 i = 0; i < eventResults.length; i++) {
                eventResults[i] = isSuccessful(
                    rngResults[i],
                    chanceEvent.chance
                );
            }

            emit VrfChanceEventResult(
                _requestId,
                chanceEvent.eventName,
                eventResults
            );
        }
    }

    // ============================================================================

    function generateRandomNumber(
        uint256 seed,
        uint256 index,
        uint256 startRange,
        uint256 endRange
    ) internal pure returns (uint256) {
        require(startRange < endRange, "Invalid range");

        uint256 rangeSize = endRange - startRange + 1; // inclusive

        uint256 randomNumber = uint256(
            keccak256(abi.encodePacked(seed, index))
        );

        return startRange + (randomNumber % rangeSize);
    }

    function isSuccessful(uint256 randomNumber, uint8 chance)
        internal
        pure
        returns (bool)
    {
        return (randomNumber % 100) < chance;
    }

    // to check the request status of random number call.
    function getRequestStatus(uint256 _requestId)
        external
        view
        returns (bool fulfilled, uint256[] memory randomWords)
    {
        require(s_requests[_requestId].exists, "request not found");
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords);
    }

    function _canSetContractURI()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return msg.sender == deployer;
    }

    // Automation using data if needed

    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        performData = performData; // ignores errors
        upkeepNeeded = msg.sender == deployer;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(bytes calldata performData) external override {
        performData = performData; // ignores error
        upkeepCounter++;
        // We don't use the performData in this example. The performData is generated by the Automation Node's call to your checkUpkeep function
    }
}
