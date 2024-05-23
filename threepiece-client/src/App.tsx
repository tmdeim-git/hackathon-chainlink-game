import { useEffect } from "react";
import { useNavigate, useLocation, Routes, Route, Navigate } from "react-router-dom";
import { useActiveWalletConnectionStatus, useIsAutoConnecting } from "thirdweb/react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { GamePage } from "./pages/gamePage";
import { LoginPage } from "./pages/loginPage";

let shouldRedirect = false;
let wasConnected = false;
function App() {
  const status = useActiveWalletConnectionStatus();
  const autoConnecting = useIsAutoConnecting();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const login = '/login';
  const game = '/game';


  useEffect(() => {
    console.log({
      status,
      autoConnecting,
      pathname
    });

    if (status === "connected") {
      wasConnected = true;
    }
    // disconnect redirects only if he was connected before
    if (wasConnected && status === 'disconnected') {
      navigate(login)
    }

    // Auto redirect only if an auton connection got triggered
    let alreadyRedirected = false;

    if (shouldRedirect && status !== "connecting") {
      if (status === "connected") {
        navigate(pathname === login ? game : pathname)
        console.log("User autoconnected, redirecting to game...");
      } else if (status === "disconnected") {
        navigate(login)
        console.log("User not connected, redirecting to login...");
      }

      shouldRedirect = false;
      alreadyRedirected = true;
    }

    if (autoConnecting && !alreadyRedirected) {
      shouldRedirect = true;
    }
  }, [status, autoConnecting]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/admin" element={<div>HELLO WORLD</div>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
export default App;
