import Actor from './actor';
import Rectangle from './rectangle';
import Sprite from './sprite';
import { Point, Role, Size } from './libs';

export default class SpriteActor extends Actor {
  private _size: Size;
  constructor(
    _point: Point,
    _hitArea: Rectangle,
    _role: Role,
    private _sprite: Sprite
  ) {
    super(_point, _hitArea, _role);
    this._size = _sprite.rectangle.size;
  }

  public get sprite(): Sprite {
    return this._sprite;
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
      this.isOjisan ? rect.size.width : this.hitArea.size.width,
      this.isOjisan ? rect.size.height : this.hitArea.size.height
    );
  }

  public isOutOfBounds(boundSize: Size): boolean {
    const actorLeft = this.point.x;
    const actorRight = this.point.x + this._size.width;
    const actorTop = this.point.y;
    const actorBottom = this.point.y + this._size.height;

    const horizontal = actorRight < 0 || actorLeft > boundSize.width;
    const vertical = actorBottom < 0 || actorTop > boundSize.height;

    return horizontal || vertical;
  }
}
