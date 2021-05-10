import GameManager from './gameManager';
import Scene from './scene';
import { Point, Size } from './libs';
import GameScene from './gameScene';
import Actor from './actor';

export default class Game extends GameManager {
  constructor(screenSize: Size, startPosition: Point) {
    super('弾幕STG', screenSize, 60, new Scene());
    this.currentScene = new GameScene(startPosition, this.screenCanvas);
    // x座標のみ、猫の横幅の半分だけ左にずらすことで中央揃えにする
    this.currentPosition = {
      x:
        startPosition.x -
        this.currentScene.actors.filter((actor: Actor) => actor.isCat)[0]
          .hitArea.size.width /
          2,
      y: startPosition.y,
    };
  }
}
