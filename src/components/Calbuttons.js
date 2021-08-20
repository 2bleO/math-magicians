/* eslint-disable react/prop-types */
import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.btnClicked = props.btnClicked;
  }

  render() {
    const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    return (
      <div className="buttons">
        {buttons.map((btn) => <button key={btn} type="button" onClick={this.btnClicked}>{btn}</button>)}
      </div>
    );
  }
}

export default Buttons;
