import React,{ Fragment } from 'react'
import {useState} from "react"

let counter =4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: " do to gym"
  },{
    id: 2,
    title: "go to class",
    description: " do to class"
  },{
    id: 3,
    title: "go to work",
    description: " do to work"
  }])

  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key ={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
