import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6,
    locked: false,
    disabled: false,
    rolling: false,
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, val, locked, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-3x `;
    if (locked) classes += ' Die-locked';
    if (rolling) classes += ' Die-rolling';
    return (
      <i className={classes} disabled={disabled} onClick={this.handleClick} />
    );
  }
}

export default Die;
