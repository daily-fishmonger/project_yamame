import Rectangle from './rectangle';
import Sprite from './sprite';
import SpriteActor from './spriteActor';
import { Point } from './libs';
import Fish from '@/assets/sample3.png'; // TODO: change to yamame

export default class Yamame extends SpriteActor {
  constructor(_point: Point, private _speed: number, private _rad: number) {
    super(
      _point,
      new Rectangle({ x: 16, y: 16 }, { height: 16, width: 16 }),
      'yamame',
      new Sprite(
        Fish,
        new Rectangle({ x: 0, y: 0 }, { height: 400, width: 400 })
      )
    );
  }

  public update(): void {
    this.point = {
      x: this.point.x + Math.cos(this._rad) * this._speed,
      y: this.point.y + Math.sin(this._rad) * this._speed,
    };
    this._rad += Math.PI / 360;
  }
}
