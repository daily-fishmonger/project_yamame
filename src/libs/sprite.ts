import Rectangle from './rectangle';

export default class Sprite {
  constructor(private _imgSrc: string, private _rectangle: Rectangle) {
    this._imgSrc = _imgSrc;
    this._rectangle = _rectangle;
  }
}
