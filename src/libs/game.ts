import GameManager from './gameManager';
import Scene from './scene';
import { Point, Size } from './libs';
// import Actor from './actor';
import Ojisan from './ojisan';
import Kuroashineko from './kuroashineko';

export default class Game extends GameManager {
  constructor(screenSize: Size, startPosition: Point) {
    super('弾幕STG', screenSize, 60, new Scene());
    this.currentScene = new Scene([], this.screenCanvas);
    // TODO: 猫ちゃんとおじさん中央揃えのためののサイズベタ書きは直すにゃ
    this.currentPosition = {
      x: startPosition.x - 20,
      y: startPosition.y,
    };

    const ojisan = new Ojisan(
      {
        x: startPosition.x - 83,
        y: startPosition.y - 167,
      },
      this.currentScene
    );
    const cat = new Kuroashineko(startPosition);
    this.currentScene.ojisan = ojisan;
    this.currentScene.cat = cat;
  }
}
