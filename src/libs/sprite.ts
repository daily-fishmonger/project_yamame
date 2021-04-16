import Rectangle from './rectangle';

export default class Sprite {
  constructor(
    private _imgSrc: CanvasImageSource,
    private _rectangle: Rectangle
  ) {
    this._imgSrc = _imgSrc;
    this._rectangle = _rectangle;
  }

  public get rectangle(): Rectangle {
    return this._rectangle;
  }

  public get imgSrc(): CanvasImageSource {
    return this._imgSrc;
  }
}
