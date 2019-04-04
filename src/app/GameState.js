import React from 'react';

export const Game = {
  board: {},
  score: 0,
  setBoard: () => {},
  addToScore: () => {}
}

export const GameState = React.createContext(Game);