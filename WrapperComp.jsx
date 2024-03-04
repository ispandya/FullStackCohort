import React,{ Fragment } from 'react'


function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent2 />} />

    </div>
  )
}
function CardWrapper({innerComponent}){
  return <div style={{border: "2px solid black", padding: 20}}>
    {innerComponent}
  </div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}
function TextComponent2(){
  return <div>
    hi there 2
  </div>
}

export default App
