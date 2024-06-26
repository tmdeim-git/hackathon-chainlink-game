import { Component, RefObject, createRef } from "react";
import map from "../assets/threepiecesvg.svg";
import { GameTile } from "./GameTile";
import { getGameTiles } from "./client";
import "../style/gameScreen.css";

type props = {
  setTileSelected: (tile: GameTile) => void;
  ownerAddress?: string;
};

class GameScreen extends Component<props> {
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
    gameTiles: {} as Record<string, GameTile>,
    selectedTile: null as GameTile | null
  };
  canvasRef: RefObject<HTMLCanvasElement>;
  animationFrameId: number | null;
  image: HTMLImageElement;

  constructor(props: { setTileSelected: () => void }) {
    super(props);
    this.canvasRef = createRef<HTMLCanvasElement>();
    this.animationFrameId = null;
    this.image = new Image();
    this.image.src = map;
  }

  componentDidMount(): void {
    const fisrtTimeTiles: GameTile[] = getGameTiles();
    const gameTilesDic: { [id: number]: GameTile } = {};
    const ctx = this.canvasRef.current?.getContext("2d");
    const canvasSize: number = 0.55;
    const canvasAspectRation = 11 / 15;
    ctx.canvas.width = window.innerWidth * canvasSize;
    ctx.canvas.height = window.innerWidth * canvasSize * canvasAspectRation;
    ctx.lineWidth = 1;

    const tileSize: number = ctx.canvas.width / 15;
    for (let i = 0; i < fisrtTimeTiles.length; i++) {
      fisrtTimeTiles[i].changeSize(tileSize);
      gameTilesDic[fisrtTimeTiles[i]._land.id] = fisrtTimeTiles[i];
    }

    const renderCanvas = () => {
      const tileDic = this.state.gameTiles;
      this.canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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
        ctx.canvas.width,
        ctx.canvas.height
      );
      const tileDicFilter = Object.entries(tileDic);
      const unClaimedTiles = tileDicFilter.filter(
        ([, tile]) =>
          tile?._isUnclaimedTile ||
          tile._land.ownerAddress !== this.props.ownerAddress
      );
      const claimedTiles = tileDicFilter.filter(
        ([, tile]) =>
          !unClaimedTiles.some(
            ([, unClaimedTile]) => unClaimedTile._land.id === tile._land.id
          )
      );
      for (const [, unClaimedTile] of unClaimedTiles) {
        unClaimedTile.draw(ctx);
      }

      ctx.strokeStyle = "green";
      ctx.lineWidth = 3;
      for (const [, claimedTile] of claimedTiles) {
        claimedTile.draw(ctx);
      }
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";

      const selectedTile = this.state.selectedTile;
      if (selectedTile) {
        ctx.strokeStyle = unClaimedTiles.some(
          ([, tile]) => tile._land.id === selectedTile._land.id
        )
          ? "black"
          : "green";
        ctx.lineWidth = 3;
        ctx.strokeRect(
          selectedTile._x,
          selectedTile._y,
          selectedTile._size,
          selectedTile._size
        );
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      this.animationFrameId = requestAnimationFrame(renderCanvas);
    };

    this.animationFrameId = requestAnimationFrame(renderCanvas);
    this.setState({
      gameTiles: gameTilesDic,
      mapWidth: ctx.canvas.width,
      mapHeight: ctx.canvas.height
    });
  }

  componentDidUpdate(): void {
    this.checkOffset();
  }

  componentWillUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  mouseClickDown = (e) => {
    this.props.setTileSelected(this.state.selectedTile);
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
      mouseDown: true
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
      passive: false
    });
  };

  preventDefault = (e: WheelEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  };

  mouseHover = (e) => {
    const rect = this.canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.x - this.state.offsetX;
    const mouseY = e.clientY - rect.y - this.state.offsetY;
    const tileDic = this.state.gameTiles;
    if (!tileDic[1])
      return
    const tileSize = tileDic[1]._size * this.state.zoom;
    const i = Math.floor(mouseY / tileSize);
    const j = Math.floor(mouseX / tileSize);
    const newId = i * 15 + j + 1;

    this.setState({ selectedTile: tileDic[newId] });
  };

  mouseDrag = (e) => {
    this.mouseHover(e);
    if (this.state.mouseDown) {
      const oldMouseX = this.state.mouseX;
      const oldMouseY = this.state.mouseY;

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

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

    if (
      newOffsetX !== this.state.offsetX ||
      newOffsetY !== this.state.offsetY
    ) {
      this.setState({
        offsetX: newOffsetX,
        offsetY: newOffsetY
      });
    }
  };

  mouseWheel = (e) => {
    const { zoom } = this.state;

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

    const maxZoom = 8;
    newZoom = Math.min(Math.max(newZoom, 1), maxZoom);

    const zoomChange = newZoom / zoom;

    const offsetX = mouseX - zoomChange * (mouseX - this.state.offsetX);
    const offsetY = mouseY - zoomChange * (mouseY - this.state.offsetY);

    this.setState({
      zoom: newZoom,
      offsetX,
      offsetY
    });
  };

  render = () => {
    return (
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
      />
    );
  };
}

export default GameScreen;
