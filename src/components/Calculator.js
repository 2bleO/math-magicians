/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <p className="result">0</p>
        <div className="buttons">
          {buttons.map((btn) => <button key={btn} type="button">{btn}</button>)}
        </div>
      </div>
    );
  }
}

export default Calculator;
