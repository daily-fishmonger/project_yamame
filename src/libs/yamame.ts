import Rectangle from './rectangle';
import Sprite from './sprite';
import SpriteActor from './spriteActor';
import GameInformation from './gameInformation';
import { Point } from './libs';
import Fish from '@/assets/sample3.png'; // TODO: change to yamame

export default class Yamame extends SpriteActor {
  constructor(_point: Point, private velocity: Point) {
    super(
      _point,
      new Rectangle({ x: 16, y: 16 }, { height: 16, width: 16 }),
      'yamame',
      new Sprite(
        Fish,
        new Rectangle({ x: 0, y: 0 }, { height: 400, width: 400 })
      )
    );
    this.velocity = velocity;
  }

  update(_gameInfo: GameInformation, _dest: Point): void {
    this.point = {
      x: this.point.x + this.velocity.x,
      y: this.point.y + this.velocity.y,
    };
    // scene側でactorsからremoveすればおk
  }
}
