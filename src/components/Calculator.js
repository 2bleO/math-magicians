/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: null,
      next: null,
      total: null,
    };
    this.btnClicked = this.btnClicked.bind(this);
  }

  btnClicked = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState((previousState) => {
      const { operation, next, total } = previousState;
      return {
        operation: ((result.operation === undefined) ? operation : result.operation),
        next: ((result.next === undefined) ? next : result.next),
        total: ((result.total === undefined) ? total : result.total),
      };
    });
  };

  render() {
    const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    const { operation, next, total } = this.state;
    const display = (total || '') + (operation || '') + (next || '');
    return (
      <div className="calculator">
        <p className="result">{display}</p>
        <div className="buttons">
          {buttons.map((btn) => <button key={btn} type="button" onClick={this.btnClicked}>{btn}</button>)}
        </div>
      </div>
    );
  }
}

export default Calculator;
