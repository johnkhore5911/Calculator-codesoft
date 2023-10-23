import "./App.css";
import { useState } from "react";

function App() {
  // Define state variables to store data
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');


  const clickHandler=(input)=>{
    setInput((prevInput)=> prevInput + input)
  }

  const displayResult=()=>{
    try{
      setResult(eval(input).toString());
    }
    catch(error)
    {
      setResult("Error")
    }
  }







  const clearCalculator = () => {
    setInput('');
    setResult('');
  };
  return (
    <div className="wrapper">
      <div className="content">

        <div className="result">
          <div className="result1">{result}</div>
          <div className="result2">{input}</div>
        </div>

        <div className="input">
          <div></div>
          <div></div>
          <div></div>
          <div><button className="btn btn2" onClick={clearCalculator}>DEL</button></div>

          <div><button className="btn" onClick={()=>clickHandler("7")}>7</button></div>
          <div><button className="btn" onClick={() => clickHandler('8')}>8</button></div>
          <div><button className="btn" onClick={() => clickHandler('9')}>9</button></div>
          <div><button className="btn" onClick={() => clickHandler('/')}>/</button></div>

          <div><button className="btn" onClick={() => clickHandler('4')}>4</button></div>
          <div><button className="btn" onClick={() => clickHandler('5')}>5</button></div>
          <div><button className="btn" onClick={() => clickHandler('6')}>6</button></div>
          <div><button className="btn" onClick={() => clickHandler('*')}>x</button></div>

          <div><button className="btn" onClick={() => clickHandler('1')}>1</button></div>
          <div><button className="btn" onClick={() => clickHandler('2')}>2</button></div>
          <div><button className="btn" onClick={() => clickHandler('3')}>3</button></div>
          <div><button className="btn" onClick={() => clickHandler('-')}>-</button></div>

          <div><button className="btn" onClick={() => clickHandler('0')}>0</button></div>
          <div><button className="btn" onClick={() => clickHandler('.')}>.</button></div>
          <div><button className="btn" onClick={() => clickHandler('+')}>+</button></div>
          <div><button className="btn" onClick={displayResult}>=</button></div>
        </div>

      </div>
    </div>
  );
}

export default App;
