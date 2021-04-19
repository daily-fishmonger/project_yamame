import { Point, Size } from './libs';

export default class Rectangle {
  constructor(private _point: Point, private _size: Size) {
    this._point = _point;
    this._size = _size;
  }

  public get point(): Point {
    return this._point;
  }

  public set point(point: Point) {
    this._point = point;
  }

  public get size(): Size {
    return this._size;
  }

  public set size(size: Size) {
    this._size = size;
  }

  public hitTest(other: Rectangle): boolean {
    const horizontal =
      other._point.x < this._point.x + this._size.width &&
      this._point.x < other._point.x + other._size.width;
    const vertical =
      other._point.y < this._point.y + this._size.height &&
      this._point.y < other._point.y + other._size.height;
    return horizontal && vertical;
  }
}
