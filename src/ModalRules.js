import React, { Component } from 'react';
import './ModalRules.css';

class ModalRules extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="Rules">
        <h1>Rules of Yahtzee</h1>
        <p>
          The game consists of a number of rounds. In each round, a player gets
          three rolls of the dice, although they can choose to end their turn
          after one or two rolls. After the first roll the player can save any
          dice they want and re-roll the other dice. This procedure is repeated
          after the second roll. The player has complete choice as to which dice
          to roll. It is possible to re-roll both dice that were or were not
          rolled before.
        </p>
        <p>
          The Yahtzee scorecard contains 13 different category boxes and in each
          round, after the third roll, the player must choose one of these
          categories. The score entered in the box depends on how well the five
          dice match the scoring rule for the category. Details of the scoring
          rules for each category are given below.The game is completed after 13
          rounds by each player, with each of the 13 boxes filled. The total
          score is calculated by summing all thirteen boxes, together with any
          bonuses
        </p>
        <p>
          The Yahtzee scorecard contains 13 scoring boxes divided into upper and
          lower sections.
        </p>
        <h3>Upper Section</h3>
        <table>
          <thead>
            <tr>
              <th>Categories</th>
              <th>Descriptions</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Aces</th>
              <td>Any combination</td>
              <td>The sum of dice with the number 1</td>
            </tr>
            <tr>
              <th>Twos</th>
              <td>Any combination</td>
              <td>The sum of dice with the number 2</td>
            </tr>
            <tr>
              <th>Threes</th>
              <td>Any combination</td>
              <td>The sum of dice with the number 3</td>
            </tr>
            <tr>
              <th>Fours</th>
              <td>Any combination</td>
              <td>The sum of dice with the number 4</td>
            </tr>
            <tr>
              <th>Fives</th>
              <td>Any combination</td>
              <td>The sum of dice with the number 5</td>
            </tr>
            <tr>
              <th>Sixes</th>
              <td>Any combination</td>
              <td>The sum of dice with the number 6</td>
            </tr>
          </tbody>
        </table>
        <h3>Lower section</h3>
        <table>
          <thead>
            <tr>
              <th>Categories</th>
              <th>Descriptions</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tr>
            <th>Three Of A Kind</th>
            <td>At least three dice the same </td>
            <td>Sum of all dice</td>
          </tr>
          <tr>
            <th>Four Of A Kind</th>
            <td>At least four dice the same</td>
            <td>Sum of all dice</td>
          </tr>
          <tr>
            <th>Full House</th>
            <td>Three of one number and two of another</td>
            <td>25</td>
          </tr>
          <tr>
            <th>Small Straight</th>
            <td>Four sequential dice (1-2-3-4, 2-3-4-5, or 3-4-5-6)</td>
            <td>30</td>
          </tr>
          <tr>
            <th>Large Straight</th>
            <td>Five sequential dice (1-2-3-4-5 or 2-3-4-5-6)</td>
            <td>40</td>
          </tr>
          <tr>
            <th>Yahtzee</th>
            <td>All five dice the same</td>
            <td>50</td>
          </tr>
          <tr>
            <th>Chance</th>
            <td>Any combination</td>
            <td>Sum of all dice</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ModalRules;
