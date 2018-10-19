import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null)
    };
  }

  clickHandler = i => {
    console.log(i);
    let newBoard = this.state.board
    newBoard[i] = 'X'
    this.setState({board: newBoard})
  }; 

  renderbox(e) {
    console.log(e);
    return this.state.board.map((box, i) => {
      return (
        <div key={i} className="box" onClick={() => this.clickHandler(i)}>
          {box}
        </div>
      );
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div>
          <p>Select your symbol</p>
          <button id="x" onClick={this.buttonClickHandler}>
            X
          </button>
          <button id="o" onClick={this.buttonClickHandler}>
            O
          </button>
        </div>
        <div className="board">{this.renderbox()}</div>
      </div>
    );
  }
}

export default App;
