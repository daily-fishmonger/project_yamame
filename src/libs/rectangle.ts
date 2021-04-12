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
}
