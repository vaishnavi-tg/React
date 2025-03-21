import { useState } from 'react'
import React from 'react'


function App() {
  const [title,setTitle]=useState("My name is vaishnavi ")
  function UpdateTitle(){
    setTitle("My name is "+Math.random())
  }

  return (
    <>
      <div>
        <Header title={title}/>
        <Header title="My name is vaishnavi2"/>
        <button onClick={UpdateTitle} >Update title</button>

  
      </div>  
    </>    
  )
}

const  Header = React.memo(function({title}){
  return(
    <div>
      {title}
    </div>
  )
})

export default App
