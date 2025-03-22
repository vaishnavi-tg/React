
import { useState } from "react"
let counter=4

function App(){
  const[todos,setTodos]=useState([{
    id:1,
    title:"wake up",
    description:"wake up at 4 pm"
  },{
    id:2,
    title:"DO yoga",
    description:"do yoga at 5 pm"

  },{
    id:3,
    title:"Do react",
    description:"Do react hooks"
  }
  ])
  function addTodo(){
    const newTodos=[]
    for(i=0;i<todos.length;i++){
      newTodos.push(todos[i])
    }
    newTodos.push({
      id:counter++,
      title:Math.random(),
      description:Math.random()
    })
    setTodos(newTodos)

  }

  return(
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function (todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}/>

      })}

    </div>
    
  )
}


function Todo({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5> 
    </div>
  )
}

export default App