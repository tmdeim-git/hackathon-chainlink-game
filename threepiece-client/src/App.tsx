import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { LoginPage } from "./pages/loginPage";
import Marketplace from "./pages/Marketplace";
import { useEffect } from "react";
import {
  useActiveAccount,
  useActiveWalletConnectionStatus,
  useIsAutoConnecting,
} from "thirdweb/react";
import { GamePage } from "./pages/gamePage";
import { clientAddListener } from "./thirdweb/client-events";
import { Provider } from "jotai";
import AdminPage from "./pages/adminPage";
import { findOrCreatePlayerNft } from "./providers/player-provider";
import { store } from "./providers/store";
import ItemStore from "./pages/ItemStore";

let shouldRedirect = false;
let wasConnected = false;
function App() {
  const status = useActiveWalletConnectionStatus();
  const wallet = useActiveAccount();
  const autoConnecting = useIsAutoConnecting();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const login = "/login";
  const game = "/game";

  clientAddListener();

  useEffect(() => {
    console.log({
      status,
      autoConnecting,
      pathname,
    });

    const setPlayerInfo = async () => {
      const playerInfo = await findOrCreatePlayerNft(wallet?.address);
      console.log("Player info", playerInfo);
    };

    if (status === "connected") {
      setPlayerInfo();
      wasConnected = true;
    }
    // disconnect redirects only if he was connected before
    if (wasConnected && status === "disconnected") {
      navigate(login);
    }

    // Auto redirect only if an auton connection got triggered
    let alreadyRedirected = false;

    if (shouldRedirect && status !== "connecting") {
      if (status === "connected") {
        navigate(pathname === login ? game : pathname);
        console.log("User autoconnected, redirecting to game...");
      } else if (status === "disconnected") {
        navigate(login);
        console.log("User not connected, redirecting to login...");
      }

      shouldRedirect = false;
      alreadyRedirected = true;
    }

    if (autoConnecting && !alreadyRedirected) {
      shouldRedirect = true;
    }
  }, [status, autoConnecting, wallet]);

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/itemsStore" element={<ItemStore />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
