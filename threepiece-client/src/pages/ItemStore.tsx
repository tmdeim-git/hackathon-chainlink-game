import { thirdwebClient } from "../providers/web3-provider";

export default function ItemStore() {
  return (
    <div>
      <h1>Items Store</h1>
      <iframe
        src={`https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x4d3F46131750A2A016705C3D2528EB5880c65d6E&chain=%7B%22name%22%3A%22Polygon+zkEVM+Cardona+Testnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F2442.rpc.thirdweb.com%2F${thirdwebClient.clientId}%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22zkevm-testnet-cardona%22%2C%22chainId%22%3A2442%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22polygon-zkevm-cardona-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmNmJZkQgx9RcFLS3rvxQTVYcPfyAFPr667keHTUxB9PDv%22%2C%22width%22%3A122%2C%22height%22%3A135%2C%22format%22%3A%22png%22%7D%7D&clientId=${thirdwebClient.clientId}&theme=dark&primaryColor=orange`}
        width="600px"
        height="600px"
        style={{ maxWidth: "100%" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
