import Actor from './actor';
import GameInformation from './gameInformation';
import { Point } from './libs';
import SpriteActor from './spriteActor';

export default class Scene {
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

  private _hitTest(callback: () => void): void {
    const length = this._actors.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        const obj1 = this._actors[i];
        const obj2 = this._actors[j];
        const hit = obj1.hitArea.hitTest(obj2.hitArea);
        if (hit && (obj1.isCat || obj2.isCat)) {
          callback();
        }
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
    this._hitTest(() => {}); // TODO: Replace callback
    this._clearScreen(gameInfo);
    this._renderAll();
  }
}
