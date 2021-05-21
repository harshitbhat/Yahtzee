import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Die from './Die';
import Dice from './Dice';
import Game from './Game';
import ModalRules from './ModalRules';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    this.setState({ show: !this.state.show });
  }
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
