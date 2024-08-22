import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let count=0;
 let [count,setCount]=useState(0);

 const addValue=()=>{
  count = count+1
  if(count>20){
    setCount(0);
  }else if(count<0){
     setCount(0);
  }else{
    setCount(count)
  }
  console.log(count)
 }

 const subValue=()=>{
  count=count-1;
  if(count<0){
    setCount(0);
  }else{
     setCount(count);
  }
  console.log(count)
 }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Value:{count}</h2>
      <button onClick={addValue}>Increase</button>
      <button onClick={subValue}>Decrease</button>
    </>
  )
}

export default App
