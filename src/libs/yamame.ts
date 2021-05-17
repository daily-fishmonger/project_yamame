import Rectangle from './rectangle';
import Sprite from './sprite';
import SpriteActor from './spriteActor';
import { Point } from './libs';
import Fish from '@/assets/yamame-sample.png'; // TODO: change to yamame

export default class Yamame extends SpriteActor {
  constructor(_point: Point, private _velocity: Point) {
    super(
      _point,
      new Rectangle({ x: 16, y: 16 }, { height: 16, width: 16 }),
      'yamame',
      new Sprite(Fish, new Rectangle({ x: 0, y: 0 }, { height: 25, width: 50 }))
    );
  }

  public update(): void {
    this.point = {
      x: this.point.x + this._velocity.x,
      y: this.point.y + this._velocity.y,
    };
    const rad = Math.PI / 360;
    this._velocity = {
      x: Math.cos(rad) * this._velocity.x - Math.sin(rad) * this._velocity.y,
      y: Math.sin(rad) * this._velocity.x + Math.cos(rad) * this._velocity.y,
    };
  }
}
