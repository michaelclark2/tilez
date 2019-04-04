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

    this.addToScore = (newScore) => {
      const {score} = {...this.state};
      this.setState({score: score + newScore})
    }

    this.state = {
      board: new GameBoard(20, 20, 4),
      score: 0,
      setBoard: this.setBoard,
      addToScore: this.addToScore
    }
  }

  render() {
    return (
      <div className="App">
      <GameState.Provider value={this.state}>
        <h1>Tilez</h1>
        <h3 className="score">{this.state.score}</h3>
        <Board />
      </GameState.Provider>
      </div>
    );
  }
}

export default App;
