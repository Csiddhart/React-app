import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({first:"",last:"",mail:"",country:"",Ad:"",city:"",state:"",post:"",hi:true,hello:true,how:true,hola:""})
  
  function changeHandler(event){
    const {name,type,value,checked}=event.target
    setData((prev)=>{
     return {
       ...prev,
       [name]:type==="checked"?checked:value
     }
    })
  }

  function submited(event){
    event.preventDefault();
    console.log("button clicked");
    console.log(data)
  }
  
  return (
    <>
     <div className='flex justify-center items-center'>
      <form className='flex flex-col justify-center items-center'>
      <label htmlFor='first'>First Name</label>
      <input id='first' type="text" placeholder='First Name' onChange={changeHandler} name='first' value={data.first}/> 
      <label htmlFor='last'>Last Name</label>
      <input  id='last' type="text" placeholder='Last Name'onChange={changeHandler} name='last' value={data.last}/>
      <label htmlFor='mail'>Email</label>
      <input id='mail' type="email" placeholder='Enter Your Email'onChange={changeHandler} name='mail' value={data.mail}/>
      <label htmlFor='C'>Your Country</label>
      <select  id="C" name="country"onChange={changeHandler} value={data.country}>
        <option value="india">India</option>
         <option value="us">US</option>
          <option value="uk">UK</option>
           <option value="japan">Japan</option>
      </select>
      <label htmlFor='Ad'>Street Ad.</label>
      <input id='Ad' type="text" placeholder='Address' name='Ad'onChange={changeHandler} value={data.Ad}/>
      <label htmlFor='city'>City</label>
      <input id='city' type="text" placeholder='Your City' name='city'onChange={changeHandler} value={data.city}/>
      <label htmlFor='state'>State</label>
      <input id='state' type="text" placeholder='Your State' name='state'onChange={changeHandler} value={data.state}/>
      <label htmlFor='post'>Postal Code</label>
      <input id='post' type="number" placeholder='Your Postal Code' name='post'onChange={changeHandler} value={data.post}/>
      <fieldset>
        <div>
          <input type="checkbox" id='fr'onChange={changeHandler} name='hello'/>
          <div>
            <label htmlFor="fr">By Email</label>
            <p>Get info through email</p>
          </div>
        </div>
        <div>
          <input type="checkbox" id='se'onChange={changeHandler} name='hi'/>
          <div>
            <label htmlFor="se">By msg</label>
            <p>Get info through msg</p>
          </div>
        </div>
        <div>
          <input type="checkbox" id='tr'onChange={changeHandler} name='how'/>
          <div>
            <label htmlFor="tr">By fax</label>
            <p>Get info through fax</p>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div>
          <input type="radio" id='fri'onChange={changeHandler} name='hola' value="u" />
          <div>
            <label htmlFor="fri">First Radio</label>
            <p>This is the First Radio</p>
          </div>
        </div>
        <div>
          <input type="radio" id='fif'onChange={changeHandler} name='hola' value="are"/>
          <div>
            <label htmlFor="fif">Second Radio</label>
            <p>This is the Second Radio</p>
          </div>
        </div>
        <div>
          <input type="radio" id='si'onChange={changeHandler} name='hola' value="who"/>
          <div>
            <label htmlFor="si">Third Radio</label>
            <p>This is the Third Radio</p>
          </div>
        </div>
      </fieldset>
      <button onClick={submited}>Submit</button>
     </form>
     </div>
    </>
  )
}

export default App
