function App(){
  return(
    <div>
      <CardWrapper>
        <h5> Hiiii their</h5>
      </CardWrapper>
  
    <CardWrapper>
      <h1> Hiiii their2</h1>
    </CardWrapper>
    </div>
  )
}


function CardWrapper({children}){
  return(
      <div style={{
        border:"2px solid black", padding:'5px'}}>
      {children}
    </div>
  )
}

// function TextComponent(){
//   return <div>
//     hi their
//   </div>
// }

export default App