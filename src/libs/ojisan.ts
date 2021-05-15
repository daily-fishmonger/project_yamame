import { Point } from './libs';
import Rectangle from './rectangle';
import Sprite from './sprite';
import SpriteActor from './spriteActor';
import Yamame from './yamame';
import Human from '@/assets/sample3.png'; // TODO: change to ojisan
import Scene from './scene';

export default class Ojisan extends SpriteActor {
  private _interval = 240;
  private _timeCount = 0;
  private _velocityX = 0.5;
  private _degree = 0;
  private _initialPoint: Point;

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
    this._initialPoint = _point;
  }

  // degree度の方向にspeedの速さで弾を発射する
  public shootBullet(degree: number, speed: number): void {
    const rad = (degree / 180) * Math.PI;
    const yamame = new Yamame(
      {
        x: this.point.x + this.sprite.rectangle.size.width / 3 - 20,
        y: this.point.y + this.sprite.rectangle.size.height / 2,
      },
      speed,
      rad
    );
    this._currentScene.add(yamame);
  }

  // num個の弾を円形に発射する
  public shootCircularBullets(
    num: number,
    speed: number,
    initDegree: number
  ): void {
    const degree = 360 / num;
    for (let i = 0; i < num; i++) {
      this.shootBullet(initDegree + degree * i, speed);
    }
  }

  // TODO:変数修正
  public update(): void {
    // 左右に移動する
    this.point = {
      x: this.point.x + this._velocityX,
      y: this.point.y,
    };
    if (
      this.point.x <= this._initialPoint.x - 200 ||
      this.point.x >= this._initialPoint.x + 100
    ) {
      this._velocityX *= -1;
    }
    // インターバルを経過していたら弾を撃つ
    this._timeCount++;
    if (
      this._timeCount > this._interval &&
      this._currentScene.actors.filter((item) => item.isYamame).length < 6
    ) {
      this._degree += 10;
      this.shootCircularBullets(12, 1, this._degree);
      this._timeCount = 0;
    }
  }
}
