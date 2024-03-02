import React,{ Fragment } from 'react'
import {useState} from "react"


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

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
