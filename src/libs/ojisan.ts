import { Point } from './libs';
import Rectangle from './rectangle';
import Sprite from './sprite';
import SpriteActor from './spriteActor';
import Yamame from './yamame';
import Human from '@/assets/sample3.png'; // TODO: change to ojisan
import GameInformation from './gameInformation';
import Scene from './scene';

export default class Ojisan extends SpriteActor {
  private _interval = 240;
  private _timeCount = 0;
  private _velocityX = 0.3;

  constructor(_point: Point, private _currentScene: Scene) {
    super(
      _point,
      new Rectangle({ x: 0, y: 0 }, { height: 16, width: 16 }),
      'ojisan',
      new Sprite(
        Human,
        new Rectangle({ x: 0, y: 0 }, { height: 400, width: 400 })
      )
    );
  }

  // degree度の方向にspeedの速さで弾を発射する
  public shootBullet(degree: number, speed: number): void {
    const rad = (degree / 180) * Math.PI;
    const yamame = new Yamame(
      {
        x: this.point.x + this.sprite.rectangle.size.width / 3 - 20,
        y: this.point.y + this.sprite.rectangle.size.height / 2,
      },
      {
        x: Math.cos(rad) * speed,
        y: Math.sin(rad) * speed,
      }
    );
    this._currentScene.add(yamame);
  }

  // num個の弾を円形に発射する
  public shootCircularBullets(num: number, speed: number): void {
    const degree = 360 / num;
    for (let i = 0; i < num; i++) {
      this.shootBullet(degree * i, speed);
    }
  }

  // TODO:変数修正
  public update(_gameInfo: GameInformation, _dest: Point): void {
    // 左右に移動する
    this.point.x += this._velocityX;
    if (this.point.x <= 100 || this.point.x >= 200) {
      this._velocityX *= -1;
    }

    // インターバルを経過していたら弾を撃つ
    this._timeCount++;
    if (this._timeCount > this._interval) {
      this.shootCircularBullets(12, 1);
      this._timeCount = 0;
    }
  }
}
