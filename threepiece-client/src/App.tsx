import { useAtomValue } from "jotai";
import "./App.css";
import Game from "./game/Game";
import Connect from "./thirdweb/auth/Connect";
import { authWalletAtom } from "./thirdweb/provider";

function App() {
  const wallet = useAtomValue(authWalletAtom);
  const ownerAddress = wallet ? wallet.getAccount().address : undefined;
  return (
    <div className="app">
      <Game ownerAddress={ownerAddress} />
      <Connect />
    </div>
  );
}

export default App;
