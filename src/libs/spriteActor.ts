import Actor from './actor';
import Sprite from './sprite';
import { Point, Size } from './libs';

export default class SpriteActor extends Actor {
  constructor(
    _point: Point,
    _hitAreaOffset: Point,
    private _sprite: Sprite,
    private _size: Size
  ) {
    super(_point, _hitAreaOffset);
  }
}
