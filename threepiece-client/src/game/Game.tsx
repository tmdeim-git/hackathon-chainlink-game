import React, { useEffect, useState } from "react";
import GameScreen from "./GameScreen";
import { GameTile } from "./GameTile";
import "../style/game.css";
import { clientAddListener } from "../thirdweb/client-events";
import SelectedResourceRect from "./selectedResourceRect";
import GameScreenBoy from "./GameScreen BoyCottage";
import { useActiveWallet } from "thirdweb/react";

const Game: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<GameTile>();
  const [eventHistory, setEventHistory] = useState<string[]>([]);
  const wallet = useActiveWallet();
  const ownerAddress = wallet?.getAccount().address;
  useEffect(() => {
    const onEvent = (message: string) => {
      setEventHistory((prev) => [...prev, message]);
    };
    clientAddListener(onEvent);
  }, []);

  const handleSelectedTile = (tile: GameTile) => {
    console.log("selected");
    setSelectedTile(tile);
  };
  return (
    <div className="game-page">
      <div>
        <SelectedResourceRect selectedTile={selectedTile} />
        <div className="event-history">
          <p className="event-name">Event history:</p>
          <div className="event-history-table">
            {eventHistory.map((info, i) => (
              <p
                key={i}
                style={{
                  paddingLeft: "20px",
                }}
              >
                {`- ${info}`}
              </p>
            ))}
          </div>
        </div>
      </div>
      <GameScreen
        tileSelected={handleSelectedTile}
        ownerAddress={ownerAddress}
      />
      {/* <GameScreenBoy tileSelected={handleSelectedTile} /> */}
    </div>
  );
};

export default Game;
