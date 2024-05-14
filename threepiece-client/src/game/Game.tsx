import { Component } from "react";
import GameScreen from "./GameScreen";
import { GameTile } from "./GameTile";
import "../style/game.css";

class Game extends Component {
  state = {
    selectedTile: null
  };

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
        <div className="tile-info-rect">
          <div>Tile Infos :</div>
          <div>Tile Name : {this.getTileName()}</div>
          <div>Tile ID : {this.getTileId()}</div>
          <div>Ressource : {this.getRessourceType()}</div>
          <div>Production Rate : {this.getRessourceRate()}</div>
          <div>Stock : {this.getAmmount()}</div>
          <div>Owned By : {this.getOwner()}</div>
        </div>
        <GameScreen tileSelected={this.handleSelectedTile} />
      </div>
    );
  };
}

export default Game;
