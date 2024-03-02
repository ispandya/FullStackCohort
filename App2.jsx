import React,{ Fragment } from 'react'
import {useState} from "react"


function App() {
  
  return (
    <div>
      <HeaderWithButton/>
      <Header title="My name is ishita2"></Header>
    </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is ishita");

  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
}
function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
