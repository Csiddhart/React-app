import { useState } from 'react'



function App() {
  let [color,setColor]=useState("black")

  const redHandler=()=>{
    color="red"
    setColor(color)
  }
   const blueHandler=()=>{
    color="blue"
    setColor(color)
  }
   const greenHandler=()=>{
    color="green"
    setColor(color)
  }
  

  return (
   
    <div className="w-full h-screen"
    style={{backgroundColor: color}}>
      <h1 className='text-white text-center'>hello</h1>
      <div className='fixed flex inset-x-0 px-6 justify-center bottom-10'>
        <div className='flex flex-wrap justify-center align-bottom shadow-lg bg-white px-5 py-4 rounded-xl gap-4'>
          <button
          className='flex flex-wrap justify-center bg-red-600 px-5 py-4 rounded-3xl gap-4'  onClick={redHandler}>Red</button>
          <button
          className='flex flex-wrap justify-center bg-blue-600 px-5 py-4 rounded-3xl gap-4'  onClick={blueHandler}>Blue</button>
      <button
          className='flex flex-wrap justify-center bg-green-600 px-5 py-4 rounded-3xl gap-4'  onClick={greenHandler}>Green</button>
          </div>
      </div>
    </div>
     
   
  )
}

export default App
