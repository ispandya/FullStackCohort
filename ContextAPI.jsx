import { Suspense, useContext } from "react"
import { CountContext } from "./context";
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

//LAZY-LOADING
// const Dashboard = React.lazy(()=> import('./components/Dashboard'))
// const Landing = React.lazy(()=>import('./components/Landing'))


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div> 
}
function CountRenderer(){
  const count =useContext(CountContext);;
  return <div>
    {count}
  </div>
}
function Buttons({ setCount}){
  const count =useContext(CountContext);
  return <div>
    <button onClick={() =>{
      setCount(count +1)
    }}>Increase</button>
    
    <button onClick={() =>{
      setCount(count -1)
    }}>Decrease</button>
  </div>
}

export default App
