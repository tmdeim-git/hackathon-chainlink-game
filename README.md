### ThreePiece 🏝️
Welcome to ThreePiece, a world of lands full of mysteries! 🌍

## ABOUT THE GAME 🎮

- 🗺️ **Explore and acquire lands.**
- 🪵 **Exploit resources.**
- 🪓 **Craft valuable items.**
- 🛒 **Trade your assets in the marketplace.**
- 🎁 **Claim loot boxes.**
- 🗡️ **ATTACK LANDS!**
- 🌧️ **Watch out, some random global events may affect your lands!**

## HACKATHON DETAILS 💻

**Sponsor:** Best MVP of Polygon Cardona (fully deployed on "Polygon zkEVM Cardona Testnet").

**Chainlink usage:**
- 🎲 **Chainlink VRF:** Random numbers generated onchain using a smart contract subscribed to Chainlink VRF.
- 🤖 **Chainlink Automation:** Attached to our Chainlink VRF smart contract to generate random events (ex: raining).

**Tech stack:** React | TypeScript | Thirdweb SDK | Solidity

**Source code:** [Link to your source code]

## WEB3 DETAILS 🔗

- 📔 **Base contracts modified:** "NFT Drops" for Land, Player, Wood, Wood Sword, and "MarketplaceV3" (all by Thirdweb).
- 📝 **New contracts:** RNG with VRF.
- 🎩 **Admin:** Special view for administrator to reset NFTs and update metadata (single or in batch).
- 👍 **Special thanks:** Chainlink/QuickNode documentation | Polygon/Thirdweb Support Team

## Inspiration

ThreePiece was inspired by a blend of exploration and resource management games, coupled with the dynamic and unpredictable nature of Web3 technology. The idea was to create a game that not only allows players to acquire and manage lands but also to engage in exciting activities like crafting, trading, and battling, all within a decentralized ecosystem.

## What it does

ThreePiece offers a unique Web3 gaming experience where players can explore and acquire lands, exploit resources, craft valuable items, trade assets in a marketplace, claim loot boxes, and attack other lands. The game is further enriched by random global events that can impact the lands, adding an element of unpredictability.

## How we built it

1. **Planning:** The project started with a thorough planning phase where the game mechanics, smart contract requirements, and tech stack were defined.
2. **Development:** Utilizing React and TypeScript for the frontend, we integrated Thirdweb SDK to handle NFT drops and marketplace functionalities. Solidity was used to write smart contracts, modified for specific game needs.
3. **Chainlink Integration:** Chainlink VRF was implemented to ensure secure and verifiable randomness, crucial for loot boxes and random events. Chainlink Automation was used to automate these events, adding an element of unpredictability.
4. **Testing and Deployment:** Rigorous testing was conducted on the Polygon zkEVM Cardona Testnet, ensuring all functionalities worked seamlessly before deployment.

## Challenges we ran into

- **Smart Contract Complexity:** Writing and integrating complex smart contracts, especially those involving randomness and automation, was a significant challenge. Debugging and ensuring they performed as expected required meticulous attention to detail.
- **Web3 Integration:** Integrating Web3 technologies into a seamless user experience posed difficulties, particularly in ensuring the security and reliability of on-chain interactions.
- **Scalability:** Ensuring the game could handle multiple users and transactions simultaneously without compromising performance was a constant consideration during development.

## Accomplishments that we're proud of

- Successfully integrating Chainlink VRF and Automation to add dynamic and unpredictable elements to the game.
- Developing a comprehensive marketplace for trading assets that works seamlessly with our NFT drops.
- Creating a user-friendly admin interface for managing NFTs and game metadata.

## What we learned

Building ThreePiece taught us the intricacies of integrating Web3 technologies into game development. We gained hands-on experience with smart contracts, particularly using Chainlink VRF for generating random events and Chainlink Automation for event triggers. The process also deepened our understanding of using Thirdweb SDK and Solidity for contract development and deployment.

## What's next for ThreePiece

- **Expansion of game features:** Adding new types of resources, items, and lands to explore and manage.
- **Enhanced player interactions:** Introducing player alliances and cooperative events.
- **Improved marketplace:** Adding more functionalities and improving the user experience.
- **Broader deployment:** Moving from testnet to mainnet for a wider player base and more robust gameplay.
