import GameInformation from './gameInformation';
import Rectangle from './rectangle';
import Scene from './scene';
import TouchReceiver from './touchReceiver';
import { Size } from './libs';

export default class GameManager {
  private currentFps = 0;
  private _prevTimestamp = 0;
  public screenCanvas = document.createElement('canvas');
  //private _currentPosition: Point = { x: 0, y: 0 };
  private _touchReceiver: TouchReceiver;

  constructor(
    private _title: string,
    private _size: Size,
    private _maxFps: number,
    private _currentScene: Scene
  ) {
    this.screenCanvas.height = _size.height;
    this.screenCanvas.width = _size.width;
    this._touchReceiver = new TouchReceiver(this.screenCanvas);
  }

  public get currentScene(): Scene {
    return this._currentScene;
  }

  public set currentScene(newScene: Scene) {
    this._currentScene = newScene;
  }

  public start(): void {
    requestAnimationFrame(this._loop.bind(this));
  }

  private _loop(timestamp: number): void {
    const elapsedSec = (timestamp - this._prevTimestamp) / 1000;
    const accuracy = 0.9; // あまり厳密にするとフレームが飛ばされることがあるので
    const frameTime = (1 / this._maxFps) * accuracy; // 精度を落とす
    if (elapsedSec <= frameTime) {
      requestAnimationFrame(this._loop.bind(this));
      return;
    }

    this._prevTimestamp = timestamp;
    this.currentFps = 1 / elapsedSec;

    const screenRectangle = new Rectangle(
      {
        x: 0,
        y: 0,
      },
      this._size
    );
    const info = new GameInformation(
      this._title,
      screenRectangle,
      this._maxFps,
      this.currentFps
    );
    const position = this._touchReceiver.currentPosition;
    console.log('aaaa', position);
    this._currentScene.update(info, position);
    requestAnimationFrame(this._loop.bind(this));
  }

  // public set currentPosition(startPosition: Point) {
  //   this._currentPosition = startPosition;
  // }
}
