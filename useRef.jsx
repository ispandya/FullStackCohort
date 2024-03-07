// import React,{ Fragment } from 'react'
import {useState, useRef,} from "react"


function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();
  useEffect(() =>{
    setTimeout(() =>{
      divRef.current.innerHTML =10
    }, 5000);
  }, [])
  return (
    <div>
      hi there, your income tax return are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App
