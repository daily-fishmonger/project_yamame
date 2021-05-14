import Rectangle from './rectangle';

export default class GameInformation {
  constructor(
    private _title: string,
    private _screenRectangle: Rectangle,
    private _maxFps: number,
    private _currentFps: number
  ) {}

  public get title(): string {
    return this._title;
  }

  public get screenRectangle(): Rectangle {
    return this._screenRectangle;
  }

  public get maxFps(): number {
    return this._maxFps;
  }

  public get currentFps(): number {
    return this._currentFps;
  }
}
