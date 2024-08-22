import React from 'react'
import Card from './Card'

function Tours({tour,notInterestedHandler,InterestedHandler}) {
  return (
    <>
   <div className='container'>
     <div className='title'>
        <h1>Plan with Siddharth</h1>
    </div>
    <div className='cards'>
        {  //here nt=newtour
            tour.map((nt)=>{  //for every city u are giving a card. map actually helps to iterate over the array(here which is sent through props) and helps to send that data in array in a single go
                return <Card key={nt.id} {...nt} notInterestedHandler={notInterestedHandler} InterestedHandler={InterestedHandler}/>// rather than writing n times we are using map to sent data in a single go  and also return is VVI since map iteration is going on so we have to return those
                //VVI(we have to do this):-here we have sent key because since we are using map and iterating over a list so we should have a key --> if id is there then pass that nahole index ta pass koriye diyo but best prac is to pass id
            })  //we have used spread op(...) to make and pass a copy(clone) of the object(/array/string) etc
        }
    </div>
   </div>
    </>
  )
}

export default Tours