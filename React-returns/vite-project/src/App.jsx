import { useState } from "react"

function App(){
  const[title,setTitle]=useState("My name is Vaishnavi")

  function changetitle(){
    setTitle("My name is "+Math.random())
  }
  return(
    <div>
      <button onClick={changetitle}>Update the title</button><br/><br/>
      <Header title={title}/><br/>
      <Header title="Vaishnavi TG2"/>
    </div>

  )
}

function Header(props){
  return(
    <div>
      {props.title}
    </div>
  )
}

export default App