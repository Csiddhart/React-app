import React from 'react'

function Card({testimonials}) {
  return (
   testimonials.map((testimonial)=>{
    return ( 
     <div>
        <div>
            <img src={testimonial.image} alt="" />
        </div>
        <div>
            <h3>{testimonial.name}</h3>
        </div>
        <div>
             <p>{testimonial.job}</p>
        </div>
        <div>
            for aakta ' aayi
        </div>
        <div>{testimonial.text}</div>
        <div>
            for aar aakta ' aayi
        </div>
    </div>)
   })
  )
}

export default Card