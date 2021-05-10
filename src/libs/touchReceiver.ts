import { Point } from './libs';

export default class TouchReceiver {
  private _currentPosition = { x: 0, y: 0 };
  private _hasEvented = false;

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
  }

  public get currentPosition(): Point {
    return this._currentPosition;
  }

  public get hasEvented(): boolean {
    return this._hasEvented;
  }

  private _handleTouchEvent(event: TouchEvent) {
    this._currentPosition = {
      x: event.targetTouches[0].pageX,
      y: event.targetTouches[0].pageY,
    };
    this._hasEvented = true;
  }

  private _handleClickEvent(event: MouseEvent) {
    this._currentPosition = {
      x: event.offsetX,
      y: event.offsetY,
    };
    this._hasEvented = true;
  }
}
