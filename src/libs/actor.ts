import Rectangle from './rectangle';
import GameInformation from './gameInformation';
import { Point } from './libs';

export default class Actor {
  private _hitAreaOffset: Point;
  constructor(
    private _point: Point,
    private _hitArea: Rectangle,
    private _isCat: boolean
  ) {
    this._hitAreaOffset = _hitArea.point;
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

  public get hitArea(): Rectangle {
    return this._hitArea;
  }

  public get isCat(): boolean {
    return this._isCat;
  }

  public render(_target: HTMLCanvasElement): void {}

  public update(_gameInfo: GameInformation, _dest?: Point): void {}
}
