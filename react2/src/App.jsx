import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5);

 // let counter=5;

  const addvalue=()=>{
    
 if(counter<20){
  counter +=1;
  setCounter(counter);
 }
  }

  const removedValue=()=>{
  if(counter>0){
    counter -=1;
    setCounter(counter);
  }
  }

  return (
    <>
      <h1>Hello Everyone</h1>
      <p>Counter value: {counter}</p>

      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <br />
      <button
      onClick={removedValue}
      >Remoived value</button>
    </>
  )
}

export default App
