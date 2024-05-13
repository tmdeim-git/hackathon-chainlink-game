import "./App.css";
import Game from "./game/Game";
import Connect from "./thirdweb/auth/Connect";
import { startEvent } from "./thirdweb/events";

function App() {
  startEvent();

  return (
    <div className="app">
      <Game />
      <Connect />
    </div>
  );
}

export default App;
