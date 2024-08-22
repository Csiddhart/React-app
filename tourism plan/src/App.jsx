import { useState } from 'react'
import Tours from './components/Tours'
import data from './Data'


function App() {
  const [tours, setTours] = useState(data)

  function notInterestedHandler(id){  //this is for the removing button thing
    const newTour = tours.filter(t=>t.id!==id)
    setTours(newTour)
  }
  
  function InterestedHandler(id){  //this is for the removing button thing
    const newTour = tours.filter(t => t.id===id)
    setTours(newTour)
  }

  function refresh(){
    setTours(data);
  }

  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No tour left</h2>
        <button className='bg-black text-white p-4 m-3 rounded-md' onClick={refresh}>Refresh</button>
      </div>
    );
  }

  return (
    <>
     <div className='app'>
      <Tours tour={tours} notInterestedHandler={notInterestedHandler} InterestedHandler={InterestedHandler}/>
     </div>
    </>
  )
}

export default App
