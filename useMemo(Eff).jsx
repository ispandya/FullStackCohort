// import React,{ Fragment } from 'react'
import {useState, useEffect, useMemo} from "react"


function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(()=>{
    let count =0;
    for(let i=1; i<=inputValue; i++){
      count = count + i;
    }
    setFinalValue(count);
  }, [inputValue])

  
  return <div>
    <input onChange={function(e){
      setInputValue(e.target.value);
    }}placeholedr={"Find sum from 1 ton n"}></input>
    <br />
    Sum from 1 to {inputValue} is {finalValue}
    <br />
    <button onClick={() =>{
      setCounter(counter +1);
    }}>Counter ({counter})</button>
  </div>
}
export default App
