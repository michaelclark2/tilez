import React, { Component } from 'react';
import Board from '../components/Board/Board';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tilez</h1>
        <Board size={[5,5]}/>
      </div>
    );
  }
}

export default App;
