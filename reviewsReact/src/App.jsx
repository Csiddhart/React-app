import { useState } from 'react'
import Reviews from './Components/Reviews'
import reviews from './Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <div>
        <h3>Reviews</h3>
        <div>-</div>
        <Reviews testimonials={reviews}/>
      </div>
     </div>
    </>
  )
}

export default App
