import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Card from './components/Card';


function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:'vansh',
    age:21
  }
let newArr=[1,2,3,4,5,6]
  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
   <Card username='vansh' color='red'/>
   <Card username='khanna'/>

  
 
   
    </>
  )
}

export default App
