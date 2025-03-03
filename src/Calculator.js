import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    // Handle button click logic
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = evaluate(input);
      console.log('Input:', input);
      console.log('Calculated Result:', calculatedResult);
      setResult(String(calculatedResult));
      setInput('');
    } catch (error) {
      console.error('Calculation Error:', error);
      setResult('Error');
      setInput('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result || input || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;