# ThreePiece 🏝️ 
Welcome to ThreePiece, a world of lands full of mysteries in Web3! 🌍

### ABOUT THE GAME 🎮

- 🗺️ Explore and acquire lands.
- 🪵 Exploit resources.
- 🪓 Craft valuable items.
- 🛒 Trade your assets in the marketplace.
- 🎁 Claim loot boxes.
- 🗡️ ATTACK LANDS!
- 🌧️ Watch out, some random global events may affect your lands!

### HACKATHON DETAILS 💻

**Sponsor:** Best MVP of Polygon Cardona (fully deployed on "Polygon zkEVM Cardona Testnet").
**Chainlink usage:**
- 🎲 **Chainlink VRF:** Random numbers generated onchain using a smart contract subscribed to Chainlink VRF.
- 🤖 **Chainlink Automation:** Attached to our Chainlink VRF smart contract to generate random events (ex: raining).

**Tech stack:** React | TypeScript | Thirdweb SDK | Solidity
**Source code:** [Link to GitHub repository](https://github.com/tmdeim-git/hackathon-chainlink-game/tree/main)

### WEB3 DETAILS 🔗

- 📔 **Base contracts modified:** "NFT Drops" for Land, Player, Wood, Wood Sword, and "MarketplaceV3" (all by Thirdweb).
- 📝 **New contracts:** RNG with VRF.
- 🎩 **Admin:** Special view for administrator to reset NFTs and update metadata (single or in batch).
- 👍 **Special thanks:** Chainlink/QuickNode documentation | Polygon/Thirdweb Support Team
## Team 🧑‍💻
- 🤖 [Mohamed Amine Elarabi](https://github.com/TheVortex8) 
- 🎩 [Mohammed Larbi Turki](https://github.com/tmdeim-git) 
- 🎮 [Raul Andrei Sima](https://github.com/RaulSima) 
- 🗡️ [Jason Brutus](https://github.com/BlastChaos) 
- 👶 [Abdul Rahman Zahid](https://github.com/LLAbdul) 

---
# DevPost Submission
# IMPORTANT NOTE FOR OUR SPONSOR
- Sponsor: **Best MVP of Polygon Cardona** 
- We are fully deployed on *Polygon zkEVM Cardona Testnet* with the EXCEPTION of our RNG with VRF contract which is on Polygon Amoy instead. 
- Chainlink does not support *Polygon zkEVM Cardona Testnet* so we could not deploy our contract on this testnet.


## Inspiration

ThreePiece was inspired by a blend of exploration and resource management games, coupled with the dynamic and unpredictable nature of Web3 technology. The idea was to create a game that not only allows players to acquire and manage lands but also to engage in exciting activities like crafting, trading, and battling, all within a decentralized ecosystem.

## What it does

ThreePiece offers a unique Web3 gaming experience where players can explore and acquire lands, exploit resources, craft valuable items, trade assets in a marketplace, claim loot boxes, and attack other lands. These assets are in the player's wallet. The game is further enriched by random global events that can impact the lands, adding an element of unpredictability (thanks to Chainlink VRF and Automation). The admin dashboard makes development and game updates easier as well to manage the metadata of the NFTs.

## How we built it

1. **Planning:** The project started with a thorough planning phase where the game mechanics, smart contract requirements, and tech stack were defined. We decided to fake the backend by integrating it directly in the frontend for easier development, however, the code was still developped with the separation in mind to ease a future split.
2. **Development:** Utilizing React and TypeScript for the frontend, we integrated Thirdweb SDK to handle NFT drops and marketplace functionalities. Solidity was used to write smart contracts. Some Thirdweb contracts were modified for specific game needs. We wrote our own contract to generate random numbers and event all calculated *on-chain*.
3. **Chainlink Integration:** Chainlink VRF was implemented to ensure secure and verifiable randomness, crucial for loot boxes and random events. Chainlink Automation was used to automate these events, adding an element of unpredictability.
4. **Testing and Deployment:** Rigorous testing was conducted on the Polygon zkEVM Cardona Testnet, ensuring all functionalities worked seamlessly before deployment. Result: everything is deployed on Polygon zkEVM Cardona, with the exception of the RNG contract since Chainlink does not support our testnet.

## Challenges we ran into

- **Solidity:** Writing and integrating complex smart contracts, especially those involving randomness and automation, was a significant challenge since none of us never used Solidity before. Debugging and ensuring they performed as expected required meticulous attention to detail.
- **Teamwork:** Ensuring that the code remains understandable for the team for at least the month of hackathon can be pretty hard sometimes when you want to go fast. Also, splitting tasks to keep everyone gain something from the project can be a challenge since everyone has different motivations with the project (learning web3, game dev, web dev, ...)
-  **Polygon zkEVM Cardona Testnet**: Polygon zkEVM Cardona Testnet is a great innovation in the blockchain world, however, since it is a new blockchain, we encountered some issues. Sometimes, the testnet is slow, sometimes we do not get every data from the RPC and at other times, the testnet is very expansive in gas compared to Polygon Amoy.
- **Performance:** Keeping the game fast while having many assets to load can be a challenge, especially if you want to make the game reactive to events live. The game code supports live updates for events, but the relevent codes have been commented out because the RPC is slow and makes the job harder (some NFTs simply are not returned when refreshing, which corrupts the state of the game)

## Accomplishments that we're proud of

- Learning about Web3 components like NFTs, token, smart contract and more all in a month, while integrating everything to create a big game.
- Successfully integrating Chainlink VRF and Automation to add dynamic and unpredictable elements to the game.
- Developing a comprehensive marketplace for trading assets that works seamlessly with our NFT drops.
- Creating a nice admin dashboard to ease up the creation of lands and update the metadata of any land (single or in batch)

## What we learned

Building ThreePiece taught us the intricacies of integrating Web3 technologies into game development. We gained hands-on experience with smart contracts, particularly using Chainlink VRF for generating random events and Chainlink Automation for event triggers. The process also deepened our understanding of using Thirdweb SDK and Solidity for contract development and deployment. We also learned how to work as a team since we needed split tasks for everyone and meet deadlines to keep the pace of work.

## What's next for ThreePiece

- **Expansion of game features:** Adding new types of resources, items, and lands to explore and manage.
- **Enhanced player interactions:** Introducing player alliances and cooperative events.
- **Interesting gameplay** Adding real gameplay like a minigame when attacking a land.
- **Improved marketplace:** Adding more functionalities and improving the user experience.
- **Broader deployment:** Moving from testnet to mainnet for a wider player base and more robust gameplay.

## SPECIAL THANKS 👍

Chainlink docs | QuickNode RPC/docs | Polygon and Thirdweb Support Teams

## Team 🧑‍💻
🤖 [Mohamed Amine Elarabi](https://github.com/TheVortex8) 
🎩 [Mohammed Larbi Turki](https://github.com/tmdeim-git) 
🎮 [Raul Andrei Sima](https://github.com/RaulSima) 
🗡️ [Jason Brutus](https://github.com/BlastChaos) 
👶 [Abdul Rahman Zahid](https://github.com/LLAbdul) 
