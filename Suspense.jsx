//lazy-loading => suppose your webste has 20 pages(button) when we hit the landing pagde we dont want all the pages information to 
//be fetched along so we use lazy loading which helps in parts-by-parts loading and providing the information
//while using lazy-loading there is some time (supense-delay) while fetching the dashboard information when pressed on dashboard 
//during that time we need suspense API which display something (fallback content) while the info is being fetched

import { Suspense } from "react"
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(()=> import('./components/Dashboard'))
const Landing = React.lazy(()=>import('./components/Landing'))


function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element ={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element ={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate = useNavigate();
  return <div>
    <div>
        <button onClick={() =>{
          navigate("/");
        }}>Landing page</button>
        <button onClick ={() =>{
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
  
  </div>
    
}

export default App
