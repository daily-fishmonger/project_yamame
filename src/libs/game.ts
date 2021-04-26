import GameManager from './gameManager';
import Scene from './scene';
import { Point, Size } from './libs';
import GameScene from './gameScene';

export default class Game extends GameManager {
  constructor(screenSize: Size, startPosition: Point) {
    super('弾幕STG', screenSize, 60, new Scene());
    this.currentScene = new GameScene(startPosition, this.screenCanvas);
  }
}
