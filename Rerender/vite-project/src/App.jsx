import {useState} from "react"
function App(){
  
  return (
    <div>
      <HeaderwithButton/><br/>
      <Header title="Vaishnavi2"/><br/>
    </div>
  )
}
function HeaderwithButton(){
  const [title, setTitle]=useState("This is Vaishnavi")
  
  function updateheading(){
    setTitle("My name is "+Math.random())

  }
  return(
    <div>
      <button onClick={updateheading}>Update the title</button>
      <Header title={title}></Header><br/>
    </div>
  )
}

function Header({title}){
  return(
    <div>
      {title}
    </div>
  )
}




export default App