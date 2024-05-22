import { Component } from "react";
import GameScreen from "./GameScreen";
import { GameTile } from "./GameTile";
import "../style/game.css";
import { clientAddListener } from "../thirdweb/client-events";
import SelectedResourceRect from "./selectedResourceRect";

type GameState = {
  selectedTile: GameTile | null;
  eventHistory: string[];
};

type Props = {
  ownerAddress?: string;
};
class Game extends Component<Props, GameState> {
  state = {
    selectedTile: null,
    eventHistory: []
  };

  componentDidMount(): void {
    const onEvent = (message: string) => {
      this.setState((prev) => ({
        eventHistory: [...prev.eventHistory, message]
      }));
    };
    clientAddListener(onEvent);
  }

  handleSelectedTile = (tile: GameTile) => {
    console.log("selected");
    this.setState({ selectedTile: tile });
  };

  render = () => {
    return (
      <div className="game-page">
        <div>
          <SelectedResourceRect selectedTile={this.state.selectedTile} />
          <div className="event-history">
            <p className="event-name">Event history:</p>
            <div className="event-history-table">
              {this.state.eventHistory.map((info, i) => (
                <p
                  key={i}
                  style={{
                    paddingLeft: "20px"
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
