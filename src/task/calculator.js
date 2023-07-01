import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  const clear = () => {
    setResult('');
  }

  return (
    
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="keypad">
       
        <button name="9" onClick={handleClick}>9</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="7" onClick={handleClick}>7</button> <br/>
        <button name="6" onClick={handleClick}>6</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="4" onClick={handleClick}>4</button><br/>
        <button name="3" onClick={handleClick}>3</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="1" onClick={handleClick}>1</button> <br/>
        <button name="0" onClick={handleClick}>0</button>
        <button name="00" onClick={handleClick}>00</button> 
        <button name="." onClick={handleClick}>.</button> <br/>
        
        <button className="operator1" name="+" onClick={handleClick}>+</button> <br/>
        <button className="operator2" name="-" onClick={handleClick}>-</button> <br/>
        <button className="operator3" name="*" onClick={handleClick}>×</button> <br/>
        <button className="operator4" name="/" onClick={handleClick}>÷</button>  <br/>
        <button className="clear" onClick={clear}>AC</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
    
  );
}

export default Calculator;