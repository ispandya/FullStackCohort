import React,{ Fragment } from 'react'
import {useState} from "react"


function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    setinterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          const json = await res.json();
          setTodos(json.todos);
        })
    },5000)
  },[])

  return <div>
    {todos.map(tood => <Todo key={todos.id} title={todos.title} description={todos.description}/>)}
  </div>
}

function Todo({title,description}){
  <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}
export default App
