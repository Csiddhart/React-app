import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  // const incrementHandler=()=>{
  // setCount(count+1)
  // console.log(count)
  // }

  // const decrementHandler=()=>{
  // setCount(count-1)
  // console.log(count)
  // }

  // const resetHandler=()=>{
  //   setCount(0);
  // }

  function incrementHandler(){
    
  if(count>20){
    setCount(0);
  }else if(count<0){
     setCount(0);
  }else{
    setCount(count+1)
  }
  }

  function decrementHandler(){
  if(count<0){
    setCount(0);
  }else{
     setCount(count-1);
  }
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <>
     <div className='w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10'>
      <div className='text-blue-500 font-large text-2xl'>
        Increment and Decrement
      </div>
      <div className=' flex justify-center gap-12 py-3 rounded-sm text-[25px] text-black'>
        <button onClick={incrementHandler}>+</button>
        <p>{count}</p>
        <button onClick={decrementHandler}>-</button>
      </div>
      <div>
        <button className='text-blue-500 font-large text-2xl' onClick={resetHandler}>reset</button>
      </div>
     </div>
    </>
  )
}

export default App
