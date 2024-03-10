import { useContext } from "react"
import { CountContext } from "./context";
import {countAtom} from "./store/atoms/count";
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
// import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// const Dashboard = React.lazy(()=> import('./components/Dashboard'))
// const Landing = React.lazy(()=>import('./components/Landing'))


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
function Count(){
  return 
  <div>
      <CountRenderer />
      <Buttons  />
  </div> 
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
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
