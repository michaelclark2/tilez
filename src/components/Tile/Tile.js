import React, { useContext } from 'react';
import './Tile.scss';
import { GameState } from '../../app/GameState';
import utils from '../../utils';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

export default (props) => {
  const {color, position} = props;
  const {board, setBoard, addToScore} = useContext(GameState);
  const checkPosition = () => {
    // console.log(utils.findNeighbors(board.tiles, position));
    const matches = utils.findMatches(board.tiles, position);
    if (matches.length > 2) {
      setBoard(utils.clearMatches(board, matches));
      addToScore(matches.length);
    }
  };
  return (
    <div className="Tile column" style={{backgroundColor: colors[color]}} onClick={checkPosition}>
    </div>
  );
};
