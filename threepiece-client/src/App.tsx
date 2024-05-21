import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Navbar";
import { LoginPage } from "./pages/loginPage";
import { GamePage } from "./pages/gamePage";

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
