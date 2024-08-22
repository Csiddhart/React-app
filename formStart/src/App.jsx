import { useState } from 'react'
import './App.css'

function App() {  //every thing basics are over here--> now the adv thing related to forms see on copy.jsx
  const [form,setForm]=useState({firstName:"",lastName:"",comments:"",checkkar:true,radio:""}); //this is used for making and setting things in a single go
  // const [first, setFirst] = useState("")
  // const [last, setLast] = useState("")

  // function fclickHandler(event){
  //   setFirst(event.target.value)
  //   console.log(event.target.value)
  // }

  // function lclickHandler(event){
  //   setFirst(event.target.value)
  //    console.log(event.target.value)
  // }

  console.log(form);

  function clickHandler(event){
    const {name,value,type,checked}=event.target
    setForm((prevData)=>{
      return{
        ...prevData,//this is for providing the prev value of the current updating value and also the ones' which are not getting updated and remain intact
        //[event.target.name]:event.target.value//ekhane tumi diye specify kore dichho kaar theke value baar kore aanbo and shoe korabo
        [name]:type==="checkbox"?checked:value//for understand this see the ss
      }
    })
  }

  //whenever there is a btn in a form, an onSubmit func gets executed --> see these in Copy.jsx
 
  
  //value in input field is used because when we update any field UI is re-rendered because UseState usage is there, so with help of the value we are able to store the state of that element
  //understand this using the picture  --> simple words useState diye ja value set korchi(i mean value which there in 'form' variable) setar sathe elements(here input field aaro onno kichu o hoteh pare)gulo sync a chole
  return (  //name is given because since we are using a single useState so we have to mark which one is changing so tai name diye equate/mark kore dilam
    <>
      <form>
        <input type="text" placeholder='first'  onChange={clickHandler} name='firstName' value={form.firstName}/>
        <input type="text" placeholder='last' onChange={clickHandler} name='lastName' value={form.lastName}/>
        <textarea name="comments" placeholder='write your comments' value={form.comments} onChange={clickHandler}></textarea>
        <input type="checkbox" onChange={clickHandler} name='checkkar' checked={form.checkkar}/>
        <input type="radio" onChange={clickHandler} name="radio" value="on" id="on"checked={form.radio=="on"}/> <label htmlFor="on">on</label>
        <input type="radio" onChange={clickHandler} name="radio" value="of" id="of"checked={form.radio=="of"}/> <label htmlFor="of">of</label>
      </form>
    </>
  )
}

export default App
