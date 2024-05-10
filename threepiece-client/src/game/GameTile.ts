export class GameTile {
  _x: number;
  _y: number;
  _i: number;
  _j: number;
  _size: number;
  _id: number;
  _name: string = "Tile name";
  _selected: boolean = false;
  _ressource: string = "Wood";
  _productionRate: number = 45;
  _maximumCapacity: number = 2500;
  _currentAmmount: number = 500;
  _owner: string = " Joe Blow";

  constructor(i: number, j: number, size: number, id: number) {
    this._x = j * size;
    this._y = i * size;
    this._i = i;
    this._j = j;
    this._size = size;
    this._id = id;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    if (this._selected) ctx.lineWidth = 3;
    ctx.strokeRect(this._x, this._y, this._size, this._size);
    if (this._selected) ctx.lineWidth = 1;
  }

  changeSize = (size: number) => {
    this._size = size;
    this._x = this._j * size;
    this._y = this._i * size;
  };

  // if we decide to change shape from rectangle to octogones use whats bellow (not 100% working)

  // draw(ctx: CanvasRenderingContext2D): void {
  //   const path: Path2D = new Path2D()
  //   let sides: { x: number, y: number }[] = this.calculate_octagon_vertices()
  //   path.moveTo(sides[0].x, sides[0].y)
  //   for (let i = 1; i < sides.length - 1; i++) {
  //     path.lineTo(sides[i].x, sides[i].y)
  //   }
  //   ctx.stroke(path)
  // }

  // calculate_octagon_vertices(): { x: number, y: number }[] {
  //   let sides: { x: number, y: number }[] = []
  //   let center: { x: number, y: number } = { x: this._x + (this._size / 2), y: this._y + (this._size / 2) }
  //   const angleOffset: number = Math.PI / 8; // Offset to align flat side horizontally
  //   for (let i = 0; i < 8; i++) {
  //     const angleRad = angleOffset + (Math.PI / 4) * i; // 360 degrees divided by 8 sides
  //     const x = center.x + this._size * Math.cos(angleRad);
  //     const y = center.y + this._size * Math.sin(angleRad);
  //     sides.push({ x: x, y: y });
  // }
  //   return sides
  // }
}
