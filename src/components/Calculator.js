/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import Buttons from './Calbuttons';

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
    const { operation, next, total } = this.state;
    const display = (total || '') + (operation || '') + (next || '');
    return (
      <div className="calculator">
        <p className="result">{display}</p>
        <Buttons btnClicked={this.btnClicked} />
      </div>
    );
  }
}

export default Calculator;
