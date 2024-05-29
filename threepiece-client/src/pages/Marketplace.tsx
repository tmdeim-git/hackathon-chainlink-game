export default function Marketplace() {
  // const account = useActiveAccount();
  // const status = useActiveWalletConnectionStatus();

  // const markedplaceListedLands = useGetMarketplaceLandsNfts(account?.address); // listed
  // const playerListedLands = useGetUserListedLandsNfts(account?.address); // owned listed
  // const playerLands = useGetPlayerLands(account?.address) // owned

  // if (!account)
  //   return <div>Loading...</div>

  // console.log(status);
  // const allLands: Land[] = store.get(allLandsAtom);

  // console.log(playerListedLands);

  return (
    // <div style={{ height: "100%" }}>
    //   <h1>My NFTs</h1>
    //   <NftCard lands={playerLands} account={account} type={"owned"} />
    //   <h1>My Listed NFTs</h1>
    //   <NftCard lands={playerListedLands.map(l => l.land)} account={account} type={"listed"} />
    //   <h1>Marketplace</h1>
    //   <NftCard lands={markedplaceListedLands.map(l => l.land)} account={account} type={"Marketplace"} />
    // </div>
    <iframe
      src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/marketplace-v3.html?contract=0x1F9A8816e9C0A53836708f0675cA0eD8B33a6a36&chain=%7B%22name%22%3A%22Polygon+zkEVM+Cardona+Testnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F2442.rpc.thirdweb.com%2F9e50d55ae91ef7980d6d42fb46e30278%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22zkevm-testnet-cardona%22%2C%22chainId%22%3A2442%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22polygon-zkevm-cardona-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmNmJZkQgx9RcFLS3rvxQTVYcPfyAFPr667keHTUxB9PDv%22%2C%22width%22%3A122%2C%22height%22%3A135%2C%22format%22%3A%22png%22%7D%7D&clientId=9e50d55ae91ef7980d6d42fb46e30278&directListingId=0&theme=dark&primaryColor=purple"
      width="600px"
      height="600px"
      style={{ maxWidth: "100%" }}
    ></iframe>
  );
}
