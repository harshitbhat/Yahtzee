import React, { Component } from 'react';
import Dice from './Dice';
import './Game.css';
import ScoreTable from './ScoreTable';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
  }
  componentDidMount() {
    this.animateRoll();
  }
  /* -------------------------------------------------------------------------- */
  /*                                    Score                                   */
  /* -------------------------------------------------------------------------- */
  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.animateRoll();
  }
  /* -------------------------------------------------------------------------- */
  /*                           On Button Click - Roll                           */
  /* -------------------------------------------------------------------------- */
  animateRoll() {
    this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
  }
  roll(evt) {
    console.log(this.state.dice);
    console.log(this.state.locked);
    // Roll dices whose indices are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] === true ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false,
    }));
    console.log(this.state.dice);
    console.log(this.state.locked);
  }
  /* -------------------------------------------------------------------------- */
  /*                             Toggle Lock - Dices                            */
  /* -------------------------------------------------------------------------- */
  toggleLocked(idx) {
    // Toggle whetheridx is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.rolling) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                               Button Content                              */
  /* -------------------------------------------------------------------------- */
  displayRollInfo() {
    const messages = [
      '0 Rolls Left',
      '1 Roll Left',
      '2 Rolls Left',
      'Starting Round',
    ];
    return messages[this.state.rollsLeft];
  }
  render() {
    const { dice, locked, rollsLeft, rolling, scores } = this.state;
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee </h1>
          <section className="Game-dice-section">
            <Dice
              dice={dice}
              locked={locked}
              rolling={rolling}
              disabled={rollsLeft === 0}
              handleClick={this.toggleLocked}
            />
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
                onClick={this.animateRoll}
              >
                {this.displayRollInfo()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={scores} />
      </div>
    );
  }
}

export default Game;
