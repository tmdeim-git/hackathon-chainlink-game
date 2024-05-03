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
      this.checkOffset();
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
    ctx.setTransform(1, 0, 0, 1, 0, 0);
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
    this.setState({ mouseX: e.clientX, mouseY: e.clientY, mouseDown: true });
  };

  mouseClickUp = () => {
    this.setState({ mouseX: 0, mouseY: 0, mouseDown: false });
  };

  mouseDrag = (e) => {
    if (this.state.mouseDown) {
      const rect = this.canvasRef.current.getBoundingClientRect();

      let oldMouseX = this.state.mouseX;
      let oldMouseY = this.state.mouseY;

      let newMouseX = e.clientX;
      let newMouseY = e.clientY;

      let newOffsetX = this.state.offsetX + newMouseX - oldMouseX;
      let newOffsetY = this.state.offsetY + newMouseY - oldMouseY;

      if (this.state.zoom === 1) {
        newOffsetX = 0;
        newOffsetY = 0;
      }

      this.setState({
        mouseX: newMouseX,
        mouseY: newMouseY,
        offsetX: newOffsetX,
        offsetY: newOffsetY
      });
    }
  };

  checkOffset = () => {
    let newOffsetX = this.state.offsetX;
    let newOffsetY = this.state.offsetY;
    const rect = this.canvasRef.current.getBoundingClientRect();
    if (
      // right side
      rect.x + rect.width >
      rect.x + newOffsetX + this.state.mapWidth * this.state.zoom
    ) {
      newOffsetX = rect.width - this.state.mapWidth * this.state.zoom;
    }

    if (
      // left side
      rect.x <
      rect.x + newOffsetX
    ) {
      newOffsetX = 0;
    }

    if (
      // bottom side
      rect.y + rect.height >
      rect.y + newOffsetY + this.state.mapHeight * this.state.zoom
    ) {
      newOffsetY = rect.height - this.state.mapHeight * this.state.zoom;
    }

    if (
      // top side
      rect.y <
      rect.y + newOffsetY
    ) {
      newOffsetY = 0;
    }

    this.setState({ offsetX: newOffsetX, offsetY: newOffsetY });
  };

  mouseWheel = (e) => {
    let zoom = this.state.zoom;

    if (e.deltaY < 0) {
      zoom += 0.1;
    } else {
      zoom -= 0.1;
    }

    if (zoom < 1) {
      zoom = 1;
      this.setState({
        offsetX: 0,
        offsetY: 0
      });
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
