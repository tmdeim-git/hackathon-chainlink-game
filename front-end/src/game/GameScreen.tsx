import React, { Component, RefObject, createRef } from "react";
import map from "../assets/island2.png";
import { GameTile } from "./GameTile";
import { getGameTiles } from "./client";

class GameScreen extends Component {
  state = {
    mapX: 0,
    mapY: 0,
    offsetX: 0,
    offsetY: 0,
    mapWidth: 1125,
    mapHeight: 825,
    mouseX: 0,
    mouseY: 0,
    mouseDown: false,
    zoom: 1
  };

  canvasRef: RefObject<HTMLCanvasElement>;
  image: HTMLImageElement;

  constructor(props: {}) {
    super(props);
    this.canvasRef = createRef<HTMLCanvasElement>();
    this.image = new Image();
    this.image.src = map;
  }

  componentDidMount(): void {
    let tiles: GameTile[] = getGameTiles();
    let ctx = this.canvasRef.current?.getContext("2d");
    ctx.lineWidth = 1;
    //const rect = this.canvasRef.current.getBoundingClientRect();  use this when checking the map doesnt get out of bounds
    this.image.onload = () => {
      this.canvasRef.current.getContext("2d").clearRect(0, 0, 1125, 825);
      ctx.setTransform(
        this.state.zoom,
        0,
        0,
        this.state.zoom,
        this.state.offsetX,
        this.state.offsetY
      );
      ctx.drawImage(
        this.image,
        this.state.mapX,
        this.state.mapY,
        this.state.mapWidth,
        this.state.mapHeight
      );
      for (let i = 0; i < tiles.length; i++) {
        tiles[i].draw(ctx);
      }
    };
    ctx.resetTransform();
    this.setState({ gameTiles: tiles });
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    this.image.src = map;
  }

  mouseClickDown = (e) => {
    this.setState({ mouseX: e.screenX, mouseY: e.screenY, mouseDown: true });
  };

  mouseClickUp = () => {
    this.setState({ mouseX: 0, mouseY: 0, mouseDown: false });
  };

  mouseDrag = (e) => {
    if (this.state.mouseDown) {
      let oldMouseX = this.state.mouseX;
      let oldMouseY = this.state.mouseY;

      let newMouseX = e.screenX;
      let newMouseY = e.screenY;

      let newOffsetX = this.state.offsetX + newMouseX - oldMouseX;
      let newOffsetY = this.state.offsetY + newMouseY - oldMouseY;

      this.setState({
        mouseX: newMouseX,
        mouseY: newMouseY,
        offsetX: newOffsetX,
        offsetY: newOffsetY
      });
    }
  };

  mouseWheel = (e) => {
    console.log(e);
    let zoom = this.state.zoom;

    if (e.deltaY < 0) {
      zoom += 0.1;
    } else {
      zoom -= 0.1;
    }

    this.setState({ zoom: zoom });
  };

  render = () => {
    return (
      <React.Fragment>
        <canvas
          ref={this.canvasRef}
          onMouseDown={this.mouseClickDown}
          onWheel={this.mouseWheel}
          onMouseUp={this.mouseClickUp}
          onMouseLeave={this.mouseClickUp}
          onMouseMove={this.mouseDrag}
          width={1125}
          height={825}
        />
      </React.Fragment>
    );
  };
}

export default GameScreen;
