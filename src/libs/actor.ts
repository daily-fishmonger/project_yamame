import Rectangle from './rectangle';
import { Point } from './libs';

export default class Actor {
  private _hitArea: Rectangle;
  constructor(private _point: Point, private _hitAreaOffset: Point) {
    this._hitArea = new Rectangle(
      {
        x: 0,
        y: 0,
      },
      {
        height: 0,
        width: 0,
      }
    );
  }

  public get point(): Point {
    return this._point;
  }

  public set point(point: Point) {
    this._point = point;
    this._hitArea.point = {
      x: point.x + this._hitAreaOffset.x,
      y: point.y + this._hitAreaOffset.y,
    };
  }
}
