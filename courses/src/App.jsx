import { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { apiUrl,filterData } from './Data'

//understand the architecture and what is happening on filter buttons from images

function App() {
  const [category, setCategory] = useState(filterData[0].title)//initially u have to give for initial rendering
  const [loading, setLoading] = useState(true);
  const [fetchedData,setFetchData]=useState([])//kano onekh data aashche api theke so aakta variable a store hobe nah so array teh store korachi and setar opor a map func chaiye debo for creating cards

  const fetchDataforCards= async()=>{
    setLoading(true);
    try{
      let res = await fetch(apiUrl);// now amra data toh peye jacchi but eta k toh pass kora teh parbo na kano tomar aayi data ta structure a nei so structure diteh gele kothau store kora teh hobe
      let output= await res.json();//conver ting raw data into json
      setFetchData(output.data);//api er bhetore dhuke data ta store koriye dicchi(eta kichu o hoteh pare so check ta api and then do it)
      //whenever u are not able to understand how to manage that data or what will happen so console log that and see what will happen and then u will be able to understand
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{  //kono api call hok ba kono changes hocche tomar ui teh then seta k ui er moddhye lekho
    fetchDataforCards();
  },[])

  return (  //from this prj u will learn many concept but also the toast and icons and how to import them and use them
  
      <div>

       <div>
         <Navbar/>
       </div>

       <div>
       <div>
        <Filter filter={filterData} sat={setCategory} cat={category}/>
       </div>
       

       <div>
        {
          loading ? (
              <Spinner />
            ) : (
              <Cards course={fetchedData} cat={category}/>
            )
          }
       </div>
      </div>
      </div>
    
  )
}

export default App
