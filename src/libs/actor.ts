import Rectangle from './rectangle';
import GameInformation from './gameInformation';
import { Point, Role } from './libs';

export default class Actor {
  private _hitAreaOffset: Point;
  constructor(
    private _point: Point,
    private _hitArea: Rectangle,
    private _role: Role
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

  public get role(): Role {
    return this._role;
  }

  public get isCat(): boolean {
    return this._role === 'cat';
  }

  public get isOjisan(): boolean {
    return this._role === 'ojisan';
  }

  public get isYamame(): boolean {
    return this._role === 'yamame';
  }

  public render(_target: HTMLCanvasElement): void {}

  public update(_gameInfo: GameInformation, _dest?: Point): void {}
}
