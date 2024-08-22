import React from 'react'

function Filter({filter,sat,cat}) {

  function filterHandler(title) {
    sat(title);
  }
  return (
    <div>
      {
        filter.map((e)=>{
         return  <button key={e.id} 
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
              ${
                cat === e.title
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-40 border-transparent"
              }
            `}
         onClick={() => filterHandler(e.title)}>
            {e.title} 
          </button>
        })
      }
    </div>
  )
}

export default Filter