import React, { Component, RefObject, createRef } from 'react'
import map from "../assets/island.png"

class GameScreen extends Component {
  state = {
    mapX: 0,
    mapY: 0,
    mapWidth: 1000,
    mapHeight: 600,
    mouseX: 0,
    mouseY: 0,
    mouseDown: false
  }

  canvasRef: RefObject<HTMLCanvasElement>
  image: HTMLImageElement

  constructor(props: {}) {
    super(props)
    this.canvasRef = createRef<HTMLCanvasElement>()
    this.image = new Image()
    this.image.src = map
  }

  componentDidMount(): void {
    let ctx = this.canvasRef.current?.getContext('2d')
    const rect = this.canvasRef.current.getBoundingClientRect()
    this.image.onload = () => {
      ctx?.drawImage(this.image, this.state.mapX, this.state.mapY, this.state.mapWidth, this.state.mapHeight)
    }
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    this.canvasRef.current.getContext('2d').clearRect(0, 0, 1000, 600)
    this.image.src = map
  }

  mouseClickDown = (e) => {
    this.setState({mouseX: e.screenX, mouseY: e.screenY, mouseDown: true})
  }

  mouseClickUp = () => {
    this.setState({mouseX: 0, mouseY: 0, mouseDown: false})
  }

  mouseDrag = (e) => {
    if (this.state.mouseDown) {
      let oldMapX = this.state.mapX
      let oldMapY = this.state.mapY
      let oldMouseX = this.state.mouseX
      let oldMouseY = this.state.mouseY
  
      let newMouseX = e.screenX
      let newMouseY = e.screenY

      let newMapX = oldMapX + newMouseX-oldMouseX
      let newMapY = oldMapY + newMouseY-oldMouseY
      
      this.setState({mouseX: newMouseX, mouseY: newMouseY, mapX: newMapX, mapY: newMapY })
    }
  }

  mouseWheel = (e) => {
    console.log(e)
    let oldMapWidth = this.state.mapWidth
    let oldMapHeight = this.state.mapHeight
    let zoom = 1
    
    if (e.deltaY < 0) {
      zoom = 1.10
    } else {
      zoom = 0.9
    }

    let newMapWidth = oldMapWidth * zoom
    let newMapHeight = oldMapHeight * zoom
    
    this.setState({mapWidth: newMapWidth, mapHeight: newMapHeight})
  }

  render = () => {
    return (
      <React.Fragment>
        <canvas ref={this.canvasRef} onMouseDown={this.mouseClickDown} onWheel={this.mouseWheel} onMouseUp={this.mouseClickUp} onMouseLeave={this.mouseClickUp} onMouseMove={this.mouseDrag} width={1000} height={600} /> 
      </React.Fragment>
    );
  }
}

export default GameScreen