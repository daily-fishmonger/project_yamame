import Kuroashineko from './kuroashineko';
import { Point } from './libs';
// import Ojisan from './ojisan';
import Scene from './scene';

export default class GameScene extends Scene {
  constructor(startPosition: Point, renderingTarget: HTMLCanvasElement) {
    super(
      [new Kuroashineko(startPosition, true)],
      [],
      'メイン',
      'white',
      renderingTarget
    );
    // const ojisan = new Ojisan({x: 10, y: 10}, this.currentScene)
    // this.currentSceneが取れない...
  }
}
