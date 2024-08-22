import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let name="siddharth"

  return (
    <>
      <h1 className='bg-blue-600 text-white p-5 rounded-2xl mb-5'>Tailwind</h1>
     <Card naam={name}/>
    </>
  )
}

export default App
