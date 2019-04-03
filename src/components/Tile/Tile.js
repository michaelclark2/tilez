import React, { useContext } from 'react';
import './Tile.scss';
import { GameState } from '../../app/GameState';
import utils from '../../utils';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'cyan'];

export default (props) => {
  const {color, position} = props;
  const {board} = useContext(GameState);
  const checkPosition = () => {
    // console.log(utils.findNeighbors(board.tiles, position));
    const matches = utils.findMatches(board.tiles, position);
    console.log(matches);
  }
  return (
    <div className="Tile column" style={{backgroundColor: colors[color]}} onClick={checkPosition}>
    </div>
  )
}
