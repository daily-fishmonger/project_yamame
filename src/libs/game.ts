import GameManager from './gameManager';
import Kuroashineko from './kuroashineko';
import Scene from './scene';
import { Point, Size } from './libs';

export default class Game extends GameManager {
  constructor(screenSize: Size, startPosition: Point) {
    super('弾幕STG', screenSize, 60, new Scene());
    this.currentScene.add(new Kuroashineko(startPosition, true));
  }
}
