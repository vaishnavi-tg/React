import {UseState} from "react"
function App(){
  const [title, setTitle]=UseState("This is Vaishnavi")

  function updateheading(){
    setTitle("My name is "+Math.random())

  }
  return (
    <div>
      <button onClick={updateheading}>Update the title</button>
      <Header title={title}></Header><br/>
      <Header title="Vaishnavi2"></Header><br/>
    </div>
  )
}

function Header({props}){
  return(
    <div>
      {props.title}
    </div>
  )
}




export default App