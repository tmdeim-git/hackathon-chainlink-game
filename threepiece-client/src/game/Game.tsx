import React, { useEffect, useState } from "react";
import { GameTile } from "./GameTile";
import "../style/game.css";
import { clientAddListener } from "../thirdweb/client-events";
import SelectedResourceRect from "./selectedResourceRect";
import GameScreenBoycottage from "./GameScreenBoycottage";

const Game: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<GameTile>();
  const [eventHistory, setEventHistory] = useState<string[]>([]);
  useEffect(() => {
    const onEvent = (message: string) => {
      setEventHistory((prev) => [...prev, message]);
    };
    clientAddListener(onEvent);
  }, []);

  const handleSelectedTile = (tile: GameTile) => {
    selectedTile._selected = false;
    tile._selected = true;
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
      <GameScreenBoycottage setTileSelected={handleSelectedTile} />
    </div>
  );
};

export default Game;
