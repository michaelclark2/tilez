import React, { useState, useContext, useEffect } from 'react';
import './Board.scss';
import { GameState } from '../../app/GameState';

export default (props) => {
  const {board, setBoard} = useContext(GameState);

  return (
    <div className="Board">
    {
      board.tiles.map(row => (
        <div className="columns">
          {
            row.map(col => <div className="column">{col}</div>)
          }
        </div>
      ))
    }
    <button onClick={(e) => setBoard([[1,2,3],[4,5,6],[7,8,9]])}>Change Board</button>
    </div>
  )
}