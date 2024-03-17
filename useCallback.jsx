// import React,{ Fragment } from 'react'
import {useState, useEffect, useMemo} from "react"


function App() {
  // const [count, setCount] = useState();
  const [count, setCount] = useState(0);
  function logsomething(){
    console.log("child clicked")
  }
  return <div>
    <ButtonComponent inputFunction = {logsomething} />\
    <button onClick={()=>{
      setCount(count+1)
    }}>Click me {count}</button>
  </div>
}
const ButtonComponent = ({inputFunction})=>{
  console.log("child render")
  return <div>
    <button onClick ={inputFunction}>Button clicked</button>
  </div>
}
export default App
