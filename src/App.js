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
        <div id="clear" className="row btn" onClick={handleClear}>
          AC
        </div>
        <div id="seven" onClick={handleNumber} className='button'>
          <span class="button_top">7</span>
        </div>
        <div id="eight" onClick={handleNumber} className='button'>
          <span class="button_top">8</span>
        </div>
        <div id="nine" onClick={handleNumber} className='button'>
          <span class="button_top">9</span>
        </div>
        <div id="multiply" onClick={handleOperator} className='btn'>
          *
        </div>
        <div id="four" onClick={handleNumber} className='button'>
          <span class="button_top">4</span>
        </div>
        <div id="five" onClick={handleNumber} className='button'>
          <span class="button_top">5</span>
        </div>
        <div id="six" onClick={handleNumber} className='button'>
          <span class="button_top">6</span>
        </div>
        <div id="divide" onClick={handleOperator} className='btn'>
          /
        </div>
        <div id="one" onClick={handleNumber} className='button'>
          <span class="button_top">1</span>
        </div>
        <div id="two" onClick={handleNumber} className='button'>
          <span class="button_top">2</span>
        </div>
        <div id="three" onClick={handleNumber} className='button'>
          <span class="button_top">3</span>
        </div>
        <div id="add" onClick={handleOperator} className='btn'>
          +
        </div>
        <div id="zero" onClick={handleNumber} className='button'>
          <span class="button_top">0</span>
        </div>
        <div id="decimal" onClick={handleDecimal} className='btn'>.</div>
        <div id="equals" onClick={handleEqual} className='btn'>
          =
        </div>
        <div id="subtract" onClick={handleOperator} className='btn'>
          -
        </div>
      </div>
    </div>
  );
}

export default App;
