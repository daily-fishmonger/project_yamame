import SpriteActor from './spriteActor';
import Rectangle from './rectangle';
import Sprite from './sprite';
import { Point } from './libs';
import GameInformation from './gameInformation';

export default class Kuroashineko extends SpriteActor {
  private _speed = 2;
  constructor(_point: Point, _isCat: boolean) {
    super(
      _point,
      new Rectangle(
        {
          x: 8,
          y: 8,
        },
        {
          height: 2,
          width: 2,
        }
      ),
      _isCat,
      new Sprite(
        '@/assets/sample3.png',
        new Rectangle(
          {
            x: 0,
            y: 0,
          },
          {
            height: 16,
            width: 16,
          }
        )
      )
    );
  }

  update(_gameInfo: GameInformation, dest: Point): void {
    const dist = Math.hypot(this.point.x - dest.x, this.point.y - dest.y);
    if (dist > this._speed) {
      this.point.x += (dest.x - this.point.x) * (this._speed / dist);
      this.point.y += (dest.y - this.point.y) * (this._speed / dist);
    } else {
      this.point = dest;
    }
  }
}
