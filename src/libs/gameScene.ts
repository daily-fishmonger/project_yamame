import { Point } from './libs';
import Scene from './scene';

export default class GameScene extends Scene {
  constructor(startPosition: Point, renderingTarget: HTMLCanvasElement) {
    super([], 'メイン', 'white', renderingTarget);
  }
}
