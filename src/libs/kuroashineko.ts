import SpriteActor from './spriteActor';
import Rectangle from './rectangle';
import Sprite from './sprite';
import { Point } from './libs';
import Cat from '@/assets/sample3.png';

export default class Kuroashineko extends SpriteActor {
  private _speed = 2;
  constructor(_point: Point) {
    super(
      _point,
      new Rectangle(
        {
          x: 20,
          y: 20,
        },
        {
          height: 40,
          width: 40,
        }
      ),
      'cat',
      new Sprite(
        Cat,
        new Rectangle(
          {
            x: 0,
            y: 0,
          },
          {
            height: 400,
            width: 400,
          }
        )
      )
    );
  }

  public update(dest: Point): void {
    //console.log(dest);
    const dist = Math.hypot(this.point.x - dest.x, this.point.y - dest.y);
    if (dist > this._speed) {
      this.point.x += (dest.x - this.point.x) * (this._speed / dist);
      this.point.y += (dest.y - this.point.y) * (this._speed / dist);
    } else {
      this.point = dest;
    }
  }
}
