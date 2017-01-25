import React, { Component } from 'react';
import { render } from 'react-dom';
import { Board } from './components';
import {
  getNewGameState,
  checkForWinner,
  getGameOverMessage,
  checkAll
} from './utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };
    
    this.startNewGame = this.startNewGame.bind(this);
    this.play = this.play.bind(this);
  }

  startNewGame() {
    this.setState(getNewGameState());
  }  
  
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      const { board } = this.state;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // Check for winner. If no winner, game continues.
      const result = checkAll(board);
      this.setState(checkForWinner(this.state.currentPlayer, result, board));
    } else {
      this.setState(getGameOverMessage());
    }
  }
  
  componentWillMount() {
    this.startNewGame();
  }
  
  render() {
    return (
      <div>
        <div className="button" onClick={() => { this.startNewGame() }}>New Game</div>
        <Board board={ this.state.board } play={ this.play }/>
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
