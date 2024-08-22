import React, { useState } from 'react'

function Card({id,image,info,price,name,notInterestedHandler,InterestedHandler}) { 
    const [readmore, setReadmore] =useState(false);
    const description = readmore?info:`${info.substring(0,100)}...`//jodi readmore thake and seta k click kora hoyeche(mane true)thale puro info ta k show koro nahole oplo ta e rakho(readmore false-->click hoye ni)
    function clickHandler(){
        setReadmore(!readmore); //this will help in toogle the things --> if it(readmore) is true then set false and vice-versa
    }
    
  return (  // so here new card will be created, and how it will be created --> since the map is iterating over the data array so it will produce a new card on each iteration
    <div className='card'>
        <img src={image} className='image'></img>
        <div className='tourInfo'>
            <div className='tourDetails'>
            <h4 className='tourPrice'>{price}</h4>
            <h4 className='tourName'> {name} </h4>
        </div>
        <div className='description'>
            {description} 
            <span className='blueC' onClick={clickHandler}>
                {readmore ?`show less`: `read more`//if readmore is there(true) then show less else show readmore
                }
            </span>
        </div>
        </div>
        <button className='notinterested' onClick={()=>{notInterestedHandler(id)}}>Not Interested</button>
         <button className='interested' onClick={()=>{InterestedHandler(id)}}>Interested</button>
    </div>
  )
}

export default Card