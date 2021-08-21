import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Calbuttons';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnClicked = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    const { operation, next, total } = state;
    setState({
      operation: ((result.operation === undefined) ? operation : result.operation),
      next: ((result.next === undefined) ? next : result.next),
      total: ((result.total === undefined) ? total : result.total),
    });
  };

  const display = (state.total || '') + (state.operation || '') + (state.next || '');
  return (
    <div className="calculator">
      <p className="result">{display}</p>
      <Buttons onClick={btnClicked} />
    </div>
  );
};

export default Calculator;
