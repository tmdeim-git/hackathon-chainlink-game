import React, { Component, RefObject, createRef } from "react";
import map from "../assets/island2.png";
import { GameTile } from "./GameTile";
import { getGameTiles } from "./client";
import "../style/gameScreen.css";

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
    zoom: 1,
    gameTiles: [],
  };

  canvasRef: RefObject<HTMLCanvasElement>;
  animationFrameId: number | null;
  image: HTMLImageElement;

  constructor(props: {}) {
    super(props);
    this.canvasRef = createRef<HTMLCanvasElement>();
    this.animationFrameId = null;
    this.image = new Image();
    this.image.src = map;
  }

  componentDidMount(): void {
    let fisrtTimeTiles: GameTile[] = getGameTiles();
    let ctx = this.canvasRef.current?.getContext("2d");
    ctx.lineWidth = 1;

    const renderCanvas = () => {
      let tiles = this.state.gameTiles;
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
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      this.animationFrameId = requestAnimationFrame(renderCanvas);
    };

    this.animationFrameId = requestAnimationFrame(renderCanvas);
    this.setState({ gameTiles: fisrtTimeTiles });
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    this.checkOffset();
  }

  componentWillUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  mouseClickDown = (e) => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
      mouseDown: true,
    });
  };

  mouseClickUp = () => {
    this.setState({ mouseDown: false });
  };

  mouseLeave = () => {
    document.removeEventListener("wheel", this.preventDefault, false);
  };

  mouseEnter = () => {
    document.addEventListener("wheel", this.preventDefault, {
      passive: false,
    });
  };

  preventDefault = (e: any) => {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  };

  mouseHover = (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let tiles = this.state.gameTiles;
    const rect = this.canvasRef.current.getBoundingClientRect();

    for (let i = 0; i < tiles.length; i++) {
      let tileX = tiles[i]._x * this.state.zoom + this.state.offsetX + rect.x;
      let tileY = tiles[i]._y * this.state.zoom + this.state.offsetY + rect.y;
      let tileW = tiles[i]._size * this.state.zoom;
      let tileH = tiles[i]._size * this.state.zoom;

      if (
        mouseX > tileX &&
        mouseX < tileX + tileW &&
        mouseY > tileY &&
        mouseY < tileY + tileH
      ) {
        console.log(tiles[i]._id);
        console.log(tileW);
        tiles[i]._selected = true;
      } else {
        tiles[i]._selected = false;
      }
    }
  };

  mouseDrag = (e) => {
    this.mouseHover(e);
    if (this.state.mouseDown) {
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
        offsetY: newOffsetY,
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

    if (
      newOffsetX !== this.state.offsetX ||
      newOffsetY !== this.state.offsetY
    ) {
      this.setState({
        offsetX: newOffsetX,
        offsetY: newOffsetY,
      });
    }
  };

  mouseWheel = (e) => {
    let { zoom, offsetX, offsetY } = this.state;

    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomFactor = 1.1;

    let newZoom;
    if (e.deltaY < 0) {
      newZoom = zoom * zoomFactor;
    } else {
      newZoom = zoom / zoomFactor;
    }

    newZoom = Math.min(Math.max(newZoom, 1), 2);

    const zoomChange = newZoom / zoom;

    offsetX = mouseX - zoomChange * (mouseX - offsetX);
    offsetY = mouseY - zoomChange * (mouseY - offsetY);

    this.setState({
      zoom: newZoom,
      offsetX: offsetX,
      offsetY: offsetY,
    });

    e.preventDefault();
  };

  render = () => {
    return (
      <React.Fragment>
        <canvas
          className="map"
          ref={this.canvasRef}
          onMouseDown={this.mouseClickDown}
          onWheel={this.mouseWheel}
          onMouseUp={this.mouseClickUp}
          onMouseLeave={this.mouseClickUp}
          onMouseMove={this.mouseDrag}
          onMouseEnter={this.mouseEnter}
          onMouseOut={this.mouseLeave}
          width={1125}
          height={825}
        />
      </React.Fragment>
    );
  };
}

export default GameScreen;
