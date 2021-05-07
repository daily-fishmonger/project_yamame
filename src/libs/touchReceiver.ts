import { Point } from './libs';

export default class TouchReceiver {
  private _currentPosition: Point;

  constructor(private _screenCanvas: HTMLCanvasElement) {
    _screenCanvas.addEventListener(
      'touchstart',
      this._handleTouchEvent.bind(this),
      false
    );
    _screenCanvas.addEventListener(
      'click',
      this._handleClickEvent.bind(this),
      false
    );
    this._currentPosition = { x: 0, y: 0 };
  }

  public get currentPosition(): Point {
    return this._currentPosition;
  }

  private _handleTouchEvent(event: TouchEvent) {
    this._currentPosition = {
      x: event.targetTouches[0].pageX,
      y: event.targetTouches[0].pageY,
    };
    console.log(this._currentPosition);
  }

  private _handleClickEvent(event: MouseEvent) {
    this._currentPosition = {
      x: event.offsetX,
      y: event.offsetY,
    };
    console.log(this._currentPosition);
  }
}
