import Actor from './actor';
import Rectangle from './rectangle';
import Sprite from './sprite';
import { Point, Size } from './libs';

export default class SpriteActor extends Actor {
  private _size: Size;
  constructor(
    _point: Point,
    _hitArea: Rectangle,
    _isCat: boolean,
    private _sprite: Sprite
  ) {
    super(_point, _hitArea, _isCat);
    this._size = _sprite.rectangle.size;
  }

  public render(target: HTMLCanvasElement): void {
    const context = target.getContext('2d');
    if (!context) {
      return;
    }
    const rect = this._sprite.rectangle;
    context.drawImage(
      this._sprite.canvasSrc,
      rect.point.x,
      rect.point.y,
      rect.size.width,
      rect.size.height,
      this.point.x,
      this.point.y,
      rect.size.width,
      rect.size.height
    );
  }

  public isOutOfBounds(boundRect: Rectangle): boolean {
    const actorLeft = this.point.x;
    const actorRight = this.point.x + this._size.width;
    const actorTop = this.point.y;
    const actorBottom = this.point.y + this._size.height;

    const horizontal =
      actorRight < boundRect.point.x || actorLeft > boundRect.size.width;
    const vertical =
      actorBottom < boundRect.point.y || actorTop > boundRect.size.height;

    return horizontal || vertical;
  }
}
