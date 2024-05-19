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
    selectedTile: null,
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
    this.setState({ selectedTile: tile });
  };

  getId = (): number => {
    if (this.state.selectedTile) return this.state.selectedTile._id;
  };

  getTileName = (): string => {
    if (this.state.selectedTile) return this.state.selectedTile._name;
  };

  getTileId = (): string => {
    if (this.state.selectedTile) return this.state.selectedTile._id;
  };

  getRessourceType = (): string => {
    if (this.state.selectedTile) return this.state.selectedTile._ressource;
  };

  getAmmount = (): string => {
    if (this.state.selectedTile)
      return (
        this.state.selectedTile._currentAmmount +
        "/" +
        this.state.selectedTile._maximumCapacity
      );
  };

  getOwner = (): number => {
    if (this.state.selectedTile) return this.state.selectedTile._owner;
  };

  getRessourceRate = (): string => {
    if (this.state.selectedTile)
      return this.state.selectedTile._productionRate + " u/s";
  };

  render = () => {
    return (
      <div className="game-page">
        <div>
          <div className="tile-info-rect">
            <div>Tile Infos :</div>
            <div>Tile Name : {this.getTileName()}</div>
            <div>Tile ID : {this.getTileId()}</div>
            <div>Ressource : {this.getRessourceType()}</div>
            <div>Production Rate : {this.getRessourceRate()}</div>
            <div>Stock : {this.getAmmount()}</div>
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
