/* eslint-disable react/prop-types */

const Buttons = (props) => {
  const { onClick } = props;
  const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="buttons">
      {buttons.map((btn) => <button key={btn} type="button" onClick={(e) => onClick(e)}>{btn}</button>)}
    </div>
  );
};

export default Buttons;
