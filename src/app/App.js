import React, { Component } from 'react';
import Board from '../components/Board/Board';
import './App.scss';
import { GameState } from './GameState';
import { GameBoard } from '../models/GameBoard';

class App extends Component {

  constructor(props) {
    super(props);

    this.setBoard = (newBoard) => {
      const {board} = {...this.state};
      board.tiles = newBoard;
      this.setState({board});
    }

    this.state = {
      board: new GameBoard(10, 10, 5),
      setBoard: this.setBoard
    }
  }

  render() {
    return (
      <div className="App">
      <GameState.Provider value={this.state}>
        <h1>Tilez</h1>
        <Board />
      </GameState.Provider>
      </div>
    );
  }
}

export default App;
