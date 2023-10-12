import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from "react";
import './Calculator.css'

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [operator, setOp] = useState('');
  const [screen, setScreen] = useState('');
  
  /** TODO: what happens when I click a number? */
  const handleNumberClick = value => {

    let num = value

    // Store first number and display
    if (number1 === null && operator === ''){
      setNumber1(num)
      setScreen(num)
      console.log("num pressed", num, " number1", number1)
    } 

    // Allow multiple digits in first number
    else if (number1 != null && operator === ''){
      let fullNumber = number1.toString() + num.toString()
      setNumber1(fullNumber)
      setScreen(fullNumber)
    }

    // Store second number and display
    else if (number1 !== null && number2 === null && operator !== '') {
      setNumber2(num)
      setScreen(screen + ' ' + num)
    } 

    // Allow multiple digits in second number
    else if (number1 !== null && number2 != null && operator !== ''){
      let fullNumber = number2.toString() + num.toString()
      setNumber2(fullNumber)
      setScreen(screen.slice(0,-1) + fullNumber)
    }

  }

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = value => {

    let selectedOperator = value

    // "Clear" clears the screen and the store
    if (selectedOperator === 'clear'){
      setNumber1(null);
      setNumber2(null);
      setOp('');
      setScreen('');
    }

    // Calculate if '='
    else if (selectedOperator === '='){
      let evalString = number1 + operator + number2
      // eslint-disable-next-line
      setScreen(eval(evalString))
    }

    // Store the selected operator
    else if (operator === '' && selectedOperator !== 'clear'){
        setOp(selectedOperator)
        setScreen(screen + ' ' + selectedOperator)
    }
  }

  return (
    <div className="body">
      <Screen value={screen} />
      <div style={{ display: "flex"}}>
        <div className="grid-container">
          <Number value={0} handleNumberClick={handleNumberClick} />
          <Number value={1} handleNumberClick={handleNumberClick} />
          <Number value={2} handleNumberClick={handleNumberClick} />
          <Number value={3} handleNumberClick={handleNumberClick} />
          <Number value={4} handleNumberClick={handleNumberClick} />
          <Number value={5} handleNumberClick={handleNumberClick} />
          <Number value={6} handleNumberClick={handleNumberClick} />
          <Number value={7} handleNumberClick={handleNumberClick} />
          <Number value={8} handleNumberClick={handleNumberClick} />
          <Number value={9} handleNumberClick={handleNumberClick} />
          <div style={{ gridColumn: "2/4", textAlign:"center" }}>
          <Operation value="=" handleOperationClick={handleOperationClick} />
          </div>
        </div>
        <div style={{ paddingLeft: 15, textAlign:"center" }}>
          <Operation value="clear" handleOperationClick={handleOperationClick} />
          <Operation value="+" handleOperationClick={handleOperationClick} />
          <Operation value="/" handleOperationClick={handleOperationClick} />
          <Operation value="*" handleOperationClick={handleOperationClick} />
          <Operation value="-" handleOperationClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
