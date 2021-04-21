import GameInformation from './gameInformation';
import Rectangle from './rectangle';
import Scene from './scene';
import { Size } from './libs';

export default class Game {
  private currentFps = 0;
  private _prevTimestamp = 0;
  private screenCanvas = document.createElement('canvas');

  constructor(
    private _title: string,
    private _size: Size,
    private _maxFps: number,
    private _currentScene: Scene
  ) {
    this.screenCanvas.height = _size.height;
    this.screenCanvas.width = _size.width;
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
    this._currentScene.update(info);

    requestAnimationFrame(this._loop.bind(this));
  }
}
