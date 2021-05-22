import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Die from './Die';
import Dice from './Dice';
import Game from './Game';
import ModalRules from './ModalRules';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;

/*

Modal Window to be added later:
<button onClick={this.showModal}>Show Modal</button>
        <ModalRules show={this.state.show} />

*/
