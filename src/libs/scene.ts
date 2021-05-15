import Actor from './actor';
import GameInformation from './gameInformation';
import { Point } from './libs';
import SpriteActor from './spriteActor';

export default class Scene {
  private _hitNum = 0;

  constructor(
    private _actors: SpriteActor[] = [],
    private _name: string = '',
    private _backgroundColor: string = '',
    private _renderingTarget: HTMLCanvasElement = document.createElement(
      'canvas'
    )
  ) {}

  public get actors(): SpriteActor[] {
    return this._actors;
  }

  public add(actor: SpriteActor): void {
    this._actors.push(actor);
  }

  public remove(actor: Actor): void {
    this._actors = this._actors.filter((item) => item !== actor);
  }

  private _hitTest(): void {
    const cat = this._actors.filter((item) => item.isCat)[0];
    const yamames = this._actors.filter((item) => item.isYamame);
    for (const yamame of yamames) {
      if (cat.hitArea.hitTest(yamame.hitArea)) {
        this.remove(yamame);
        this._hitNum++;
      }
    }
  }

  private _clearScreen(gameInfo: GameInformation): void {
    const context = this._renderingTarget.getContext('2d');
    if (!context) {
      return;
    }
    const width = gameInfo.screenRectangle.size.width;
    const height = gameInfo.screenRectangle.size.height;
    context.fillStyle = this._backgroundColor;
    context.fillRect(0, 0, width, height);
  }

  private _renderAll(): void {
    this._actors.map((obj) => {
      if (
        obj.isOutOfBounds({
          height: this._renderingTarget.height,
          width: this._renderingTarget.width,
        })
      ) {
        this.remove(obj);
        return;
      }
      obj.render(this._renderingTarget);
    });
  }

  private _updateAll(dest: Point): void {
    this._actors.forEach((actor) =>
      actor.isCat ? actor.update(dest) : actor.update()
    );
  }

  public update(gameInfo: GameInformation, dest: Point): void {
    this._updateAll(dest);
    this._hitTest();
    this._clearScreen(gameInfo);
    this._renderAll();
  }
}
