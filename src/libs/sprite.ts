import Rectangle from './rectangle';

export default class Sprite {
  private _canvasSrc = new Image();
  constructor(private _imgSrc: string, private _rectangle: Rectangle) {
    this._canvasSrc.src = _imgSrc;
    this._rectangle = _rectangle;
  }

  public get rectangle(): Rectangle {
    return this._rectangle;
  }

  public get canvasSrc(): CanvasImageSource {
    return this._canvasSrc;
  }
}
