function App(){
  return(
    <div>
      <CardWrapper innercomponent={TextComponent}/>
    </div>
  )
}


function CardWrapper({innercomponent}){
  return(
      <div style={{
        border:"2px solid black", padding:'5px'

      }}>
      {innercomponent}
    </div>
  )
}

function TextComponent(){
  return <div>
    hi their
  </div>
}

export default App