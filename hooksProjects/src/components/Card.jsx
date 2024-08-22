import React from 'react'
import { useState, useCallback, useRef, useEffect } from 'react'

function Card() {
  const [length, setLength] = useState(5)  //state hook
  const [number,setNumber] = useState(false)
  const [characters,setChar] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)//ref hook

  //callback hook
  const clickcopyHandler=useCallback(()=>{
    passwordRef.current?.select();// . helps in access things and ?. helps in optionally select things
    passwordRef.current?.setSelectionRange(0,100);//optional select helps to check whether things are there or not
    window.navigator.clipboard.writeText(password)
  },[password])//since useCallback does memoisation so see which are interdependent on each other and then pass that as dependency

  const generatePassword=useCallback(()=>{
    let passwords=""
    let str="ABCDEFGHIKJLMNOPQRSTUVWXabcdefghijklmnopqrstuvwx"
    if(number)str+="1234567890"
    if(characters) str+="~!@#$%^&*()_+-=[]{}<>,./?;:'|"
    for(let i=1;i<=length;i++){
       let chara=Math.floor(Math.random()*str.length+1)
       passwords+=str.charAt(chara)
    }
    setPassword(passwords)
  },[length,number,characters,setPassword])  //this help in optimizing the code, and callback's dependency's help in memoisation,i.e.,it helps in storing the data in cache and compare it with new incoming data(when the given method is runned again) and updates it accordingly

  //now useeffect's dependency's helps in telling what things are being changed and then handel the given method accordingly,and it gets called at the beginning of the execution of program
   useEffect(()=>{generatePassword()},[length,number,characters])
  
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-9 bg-gray-700'>
     <h1 className='text-2xl text-white text-center my-3 mx-5'>Password Generator</h1>
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full h-12 py-1 px-4'
        placeholder='Password'
         readOnly
          ref={passwordRef}
         />
         <button className='outline-none bg-blue-500 text-white hover:bg-blue-900 ' onClick={clickcopyHandler}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={5}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(event)=>{setLength(event.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{setNumber((prev)=>!prev)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
     </div>
  )
}

export default Card