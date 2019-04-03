import utils from '../utils';

export class GameBoard {
  constructor(height, width, colors) {
    this.height = height;
    this.width = width;
    this.colors = colors;
    this._tiles = Array(this.height).fill(0).map(x => Array(this.width).fill(0).map(c => utils.randomNum(this.colors)))
  }
  get tiles() {
    return this._tiles;
  }

  set tiles(t) {
    this._tiles = t;
  }

  setTiles(height, width) {
    this.height = height;
    this.width = width;
  }
}