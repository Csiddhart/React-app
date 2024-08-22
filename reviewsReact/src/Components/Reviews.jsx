import React, { useState } from 'react'
import Card from './Card'

function Reviews({testimonials}) {
    const [show,setShow]=useState([])
  return (
    <div>
        <div>
            <Card testimonials={testimonials}/>
            <div>
                <button>left</button>
                <button>right</button>
            </div>
            <div>
                <button>random</button>
            </div>
        </div>
    </div>
  )
}

export default Reviews