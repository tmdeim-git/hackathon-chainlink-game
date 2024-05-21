// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

///// UPDATE IMPORTS TO V2.5 /////
import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract GameVRFRandomGameEvent is VRFConsumerBaseV2Plus, AutomationCompatibleInterface, ContractMetadata {
    event Log(string log);
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);
    event GameRandomEvent(uint256 requestId, string eventName, bool[] results);

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
        string eventName;
        bool isGameRandomEvent;
        uint8 chance;
        uint256 numberOfResultsWanted;
    }

    mapping(uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */

    uint256 s_subscriptionId;

    uint256[] public requestIds;
    uint256 public lastRequestId;

    bytes32 immutable keyHash;
    uint32 callbackGasLimit = 2500000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;

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

    // RNG GENERATION
    function triggerGameRandomEvent(
        string memory eventName,
        uint8 chance,
        uint256 numberOfResultsWanted
    ) public onlyOwner returns (uint256 requestId) {
        require(
            chance <= 100,
            "Chance of success must be between 0 and 100"
        );
        requestId = requestRandomWords();
        RequestStatus storage request = s_requests[requestId];
        request.isGameRandomEvent = true;
        request.eventName = eventName;
        request.chance = chance;
        request.numberOfResultsWanted = numberOfResultsWanted;
        return requestId;
    }
    
    function requestRandomWords() public onlyOwner returns (uint256 requestId) {
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numWords,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );
        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false,
            isGameRandomEvent: false,
            chance: 0,
            numberOfResultsWanted: 0,
            eventName: ""
        });
        requestIds.push(requestId);
        lastRequestId = requestId;
        emit RequestSent(requestId, numWords);
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
        emit RequestFulfilled(_requestId, _randomWords);

        if (request.isGameRandomEvent) {
            uint256 seed = request.randomWords[0];

            bool[] memory eventResults = new bool[](
                request.numberOfResultsWanted
            );

            for (uint256 i = 0; i < eventResults.length; i++) {
                uint256 randomNumber = generateRandomNumber(seed, i, 0, 100);
                eventResults[i] = isSuccessful(randomNumber, request.chance);
            }

            emit GameRandomEvent(_requestId, request.eventName, eventResults);
        }
    }

    function generateRandomNumber(
        uint256 seed,
        uint256 index,
        uint256 start,
        uint256 end
    ) internal pure returns (uint256) {
        require(start < end, "Invalid range");

        uint256 rangeSize = end - start;

        uint256 randomNumber = uint256(
            keccak256(abi.encodePacked(seed, index))
        );

        return start + (randomNumber % rangeSize);
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

    function _canSetContractURI() internal view virtual override returns (bool){
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
