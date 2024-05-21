import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { GamePage } from "./gamePage";
import { LoginPage } from "./loginPage";
import { Navbar } from "./Navbar";
import { useActiveAccount } from "thirdweb/react";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
