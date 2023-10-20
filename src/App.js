import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;
    setDisplay(display === '0' ? number : display + number);
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator+" ");
  };
  const handleEqual =()=>{
    setDisplay(eval(display));
  }
  const handleDecimal = () => {
    // Split the display by spaces to work with the current operand
    const displayArray = display.split(' ');
  
    // Get the last operand in the display
    const currentOperand = displayArray[displayArray.length - 1];
  
    // Check if the current operand doesn't already contain a decimal point
    if (!currentOperand.includes('.')) {
      // If it doesn't, add a decimal point to the current operand
      displayArray[displayArray.length - 1] = currentOperand + '.';
      setDisplay(displayArray.join(' '));
    }
  };
  
  const handleClear=()=>{
    setDisplay('0');
  }
  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div id="seven" onClick={handleNumber}>
          7
        </div>
        <div id="eight" onClick={handleNumber}>
          8
        </div>
        <div id="nine" onClick={handleNumber}>
          9
        </div>
        <div id="multiply" onClick={handleOperator}>
          *
        </div>
        <div id="four" onClick={handleNumber}>
          4
        </div>
        <div id="five" onClick={handleNumber}>
          5
        </div>
        <div id="six" onClick={handleNumber}>
          6
        </div>
        <div id="divide" onClick={handleOperator}>
          /
        </div>
        <div id="one" onClick={handleNumber}>
          1
        </div>
        <div id="two" onClick={handleNumber}>
          2
        </div>
        <div id="three" onClick={handleNumber}>
          3
        </div>
        <div id="add" onClick={handleOperator}>
          +
        </div>
        <div id="zero" onClick={handleNumber}>
          0
        </div>
        <div id="decimal" onClick={handleDecimal}>.</div>
        <div id="equals" onClick={handleEqual}>
          =
        </div>
        <div id="subtract" onClick={handleOperator}>
          -
        </div>
      </div>
    </div>
  );
}

export default App;
