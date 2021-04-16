import Actor from './actor';
export default class Scene {
  constructor(
    private _actors: Actor[],
    private _destroyedActors: Actor[],
    private _name: string,
    private _backgroundColor: string,
    private _renderingTarget: HTMLCanvasElement
  ) {}

  add(actor: Actor): void {
    this._actors.push(actor);
    // actor.addEventListener('spawnactor', (e) => this.add(e.target));
    // actor.addEventListener('destroy', (e) => this._addDestroyedActor(e.target));
  }

  remove(actor: Actor): void {
    this._actors = this._actors.filter((item) => item !== actor);
  }

  // _updateAll(gameInfo, input) {
  //   this.actors.forEach((actor) => actor.update(gameInfo, input));
  // }

  // _hitTest() {
  //   const length = this.actors.length;
  //   for(let i=0; i < length - 1; i++) {
  //     for(let j=i+1; j < length; j++) {
  //       const obj1 = this.actors[i];
  //       const obj2 = this.actors[j];
  //       const hit = obj1.hitArea.hitTest(obj2.hitArea);
  //       if(hit) {
  //         obj1.dispatchEvent('hit', new GameEvent(obj2));
  //         obj2.dispatchEvent('hit', new GameEvent(obj1));
  //       }
  //     }
  //   }
  // }

  // _clearScreen(gameInfo) {
  //   const context = this.renderingTarget.getContext('2d');
  //   const width = gameInfo.screenRectangle.width;
  //   const height = gameInfo.screenRectangle.height;
  //   context.fillStyle = this.backgroundColor;
  //   context.fillRect(0, 0, width, height);
  // }

  // _renderAll() {
  //   this.actors.forEach((obj) => obj.render(this.renderingTarget));
  // }

  // _addDestroyedActor(actor) {
  //   this._destroyedActors.push(actor);
  // }

  // _disposeDestroyedActors() {
  //   this._destroyedActors.forEach((actor) => this.remove(actor));
  //   this._destroyedActors = [];
  // }

  // update(gameInfo, input) {
  //   this._updateAll(gameInfo, input);
  //   this._hitTest();
  //   this._disposeDestroyedActors();
  //   this._clearScreen(gameInfo);
  //   this._renderAll();
  // }
}
