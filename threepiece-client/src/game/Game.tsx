import { Component } from "react";
import GameScreen from "./GameScreen";
import { GameTile } from "./GameTile";
import "../style/game.css";
import { startEvent } from "../thirdweb/events";

type GameState = {
  selectedTile: GameTile | null;
  eventHistory: string[];
};

type Props = {
  ownerAddress?: string;
};
class Game extends Component<Props, GameState> {
  state = {
    selectedTile: null as GameTile | null,
    eventHistory: [] as string[],
  };

  componentDidMount(): void {
    const onEvent = (message: string) => {
      this.setState((prev) => ({
        eventHistory: [...prev.eventHistory, message],
      }));
    };
    startEvent(onEvent);
  }

  handleSelectedTile = (tile: GameTile) => {
    console.log("selected");
    this.setState({ selectedTile: tile });
  };

  getTileId = (): number => {
    if (this.state.selectedTile) return this.state.selectedTile._land.id;
  };

  getRessourceType = (): string => {
    return this.state.selectedTile?._land.resources.join(",");
  };

  getOwner = (): string => {
    if (this.state.selectedTile)
      return this.state.selectedTile._isUnclaimedTile
        ? "Nobody"
        : this.state.selectedTile._land.ownerAddress;
  };

  render = () => {
    return (
      <div className="game-page">
        <div>
          <div className="tile-info-rect">
            <h2>TILE INFO</h2>
            <div>Tile ID : {this.getTileId()}</div>
            <div>Resources : {this.getRessourceType()}</div>
            <div>Owned By : {this.getOwner()}</div>
          </div>
          <div className="event-history">
            <p className="event-name">Event history:</p>
            <div className="event-history-table">
              {this.state.eventHistory.map((info, i) => (
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
          tileSelected={this.handleSelectedTile}
          ownerAddress={this.props.ownerAddress}
        />
      </div>
    );
  };
}

export default Game;
