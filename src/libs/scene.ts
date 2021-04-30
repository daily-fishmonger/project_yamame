import Actor from './actor';
import GameInformation from './gameInformation';
import { Point } from './libs';

export default class Scene {
  constructor(
    private _actors: Actor[] = [],
    private _destroyedActors: Actor[] = [],
    private _name: string = '',
    private _backgroundColor: string = '',
    private _renderingTarget: HTMLCanvasElement = document.createElement(
      'canvas'
    )
  ) {}

  public get actors(): Actor[] {
    return this._actors;
  }

  public add(actor: Actor): void {
    this._actors.push(actor);
    // actor.addEventListener('spawnactor', (e) => this.add(e.target));
    // actor.addEventListener('destroy', (e) => this._addDestroyedActor(e.target));
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
    this._actors.forEach((obj) => obj.render(this._renderingTarget));
  }

  // _addDestroyedActor(actor: Actor): void {
  //   this._destroyedActors.push(actor);
  // }

  private _disposeDestroyedActors(): void {
    this._destroyedActors.forEach((actor) => this.remove(actor));
    this._destroyedActors = [];
  }

  private _updateAll(gameInfo: GameInformation, dest: Point): void {
    this._actors.forEach((actor) => actor.update(gameInfo, dest));
  }

  public update(gameInfo: GameInformation, dest: Point): void {
    this._updateAll(gameInfo, dest);
    this._hitTest(() => {}); // TODO: Replace callback
    this._disposeDestroyedActors();
    this._clearScreen(gameInfo);
    this._renderAll();
  }
}
