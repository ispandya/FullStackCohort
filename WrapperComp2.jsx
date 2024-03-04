import React,{ Fragment } from 'react'


function App() {
  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the second card
        </div>
      </Card>
    </div>
  )
}
function Card({children}){
  return <div style={{
    border: "2px solid black",
    padding: 20,
    margin: 10
  }}>
    {children}
  </div>
}
export default App
