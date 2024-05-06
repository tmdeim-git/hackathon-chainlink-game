import { Component } from "react";
import GameScreen from "./GameScreen";
import "../style/game.css";
import { getGameTiles } from "./client";
import { GameTile } from "./GameTile";

class Game extends Component {
  state = {
    gameTiles: [],
    selectedTile: null,
  };
  componentDidMount(): void {
    let gameTiles = getGameTiles();
    this.setState({ gameTiles: gameTiles });
  }

  handleSelectedTile = (tile: GameTile) => {};

  render = () => {
    return (
      <div className="game-page">
        <div className="tile-info-rect">
          <div>Tile Infos :</div>
          {this.state.gameTiles.map((t) => {
            console.log(t._id);
            if (t._selected) {
              return <div>{t._id}</div>;
            }
            return null;
          })}
        </div>
        <GameScreen className="map" gameTiles={this.state.gameTiles} />
      </div>
    );
  };
}

export default Game;
