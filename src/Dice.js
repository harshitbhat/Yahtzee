import React, { Component } from 'react';
import './Dice.css';
import Die from './Die';

class Dice extends Component {
  static defaultProps = {
    dice: [1, 2, 3, 4, 5],
    locked: [true, false, true, false, true],
    disabled: false,
    rolling: false,
  };
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
            disabled={this.props.disabled}
            rolling={this.props.rolling && !this.props.locked[idx]}
            handleClick={this.props.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
