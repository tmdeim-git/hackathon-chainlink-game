import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { GamePage } from "./gamePage";
import { LoginPage } from "./loginPage";
import { Navbar } from "./Navbar";
import { useAtomValue } from "jotai";
import { authWalletAtom } from "./thirdweb/provider";

function App() {
  const wallet = useAtomValue(authWalletAtom);
  const ownerAddress = wallet ? wallet.getAccount().address : undefined;

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/game" element={ownerAddress ? <GamePage /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
