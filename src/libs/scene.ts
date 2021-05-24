import GameInformation from './gameInformation';
import Kuroashineko from './kuroashineko';
import { Point } from './libs';
import Ojisan from './ojisan';
import SpriteActor from './spriteActor';
import Yamame from './yamame';

export default class Scene {
  private _hitNum = 0;

  constructor(
    private _yamames: Yamame[] = [],
    private _renderingTarget: HTMLCanvasElement = document.createElement(
      'canvas'
    ),
    private _cat?: Kuroashineko,
    private _ojisan?: Ojisan
  ) {}

  public set cat(cat: Kuroashineko) {
    this._cat = cat;
  }

  public set ojisan(ojisan: Ojisan) {
    this._ojisan = ojisan;
  }

  public get yamames(): Yamame[] {
    return this._yamames;
  }

  public add(yamame: Yamame): void {
    this._yamames.push(yamame);
  }

  public remove(actor: SpriteActor): void {
    this._yamames = this._yamames.filter((item) => item !== actor);
  }

  private _hitTest(): void {
    if (!this._cat) {
      return;
    }
    // 要パフォーマンスチューニング（暫定的に、猫ちゃん要素の順番が固定なためこうしている）
    const cat = this._cat;
    const yamames = this._yamames.filter(
      (item) => item.isYamame && item.hitArea.hitTest(cat.hitArea)
    );
    this._hitNum += yamames.length;
    yamames.map((item) => this.remove(item));
  }

  private _clearScreen(gameInfo: GameInformation): void {
    const context = this._renderingTarget.getContext('2d');
    if (!context) {
      return;
    }
    const width = gameInfo.screenRectangle.size.width;
    const height = gameInfo.screenRectangle.size.height;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  }

  private _renderAll(): void {
    if (!this._ojisan || !this._cat) {
      return;
    }
    [this._ojisan, this._cat, ...this._yamames].map((obj) => {
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
    if (!this._ojisan || !this._cat) {
      return;
    }
    this._cat.update(dest);
    this._ojisan.update();
    this._yamames.forEach((yamame) => yamame.update());
  }

  public update(gameInfo: GameInformation, dest: Point): void {
    this._updateAll(dest);
    this._hitTest();
    this._clearScreen(gameInfo);
    this._renderAll();
  }
}
