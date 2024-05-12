import "./App.css";
import Game from "./game/Game";
import Connect from "./thirdweb/auth/Connect";

function App() {
  return (
    <div className="app">
      <Game />
      <Connect />
    </div>
  );
}

export default App;
