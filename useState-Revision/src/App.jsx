import { useState,useEffect } from 'react'
import './App.css'

function App() {
    //useState--> to change and update the UI
    //useEffect--> to perform work after the component has been rendered then it is used

  const [write, setWrite] = useState('')

  function writeHandler(e){
    setWrite(e.target.value)
    console.log(write);
  }
  

  //main two variation of use effect
  // On First Render + Whenever Dependencies CHanges
  // useEffect(() => {
  //   console.log("UI Renderer changed");
  // }, [text]);

  //To Handler Unmounting of Component  
  useEffect(() => {
    console.log("Added");  //*this one will be executed 
    return () => {
      console.log("Removed");  //here this will be executed first then*
    }
  }, [write]);

  return (
    <>
       <div className='App'>
        <input type="text" placeholder='hello' onChange={writeHandler} />
       </div>
    </>
  )
}

export default App
