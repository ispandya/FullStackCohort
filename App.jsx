import React,{ Fragment } from 'react'
import {useState} from "react"

//state in React:
//const arr = [1,2] , arr[0]=1 & arr[1]=2
//const [a,b] = arr , a=1 && b=2
//consr [a,b] = [1,2] , 1->a && 2->b
function App() {
  const [title, setTitle] = useState("My name is ishita");

  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="My name is ishita2"></Header>
    </div>
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
