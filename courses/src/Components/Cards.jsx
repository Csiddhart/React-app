import React,{useState} from 'react'
import Card from './Card'

function Cards({course,cat}) {
  const [likedCourses, setLikedCourses] = useState([]);  //eta ekhane banachi kano eta ekhane korle sob kota card a aaksathe UI teh appear hoye jabe
   let getCourse=()=>{
    if(cat==="All"){ 
    let allCourses=[]
          //j api object ta pacchi setar value(mane entire value --> here data) taar moddhye forEach lagachi,then taar moddhye ja category values ache(mane bhetore key-value pair ache) setar thekeo data k baar kore store koriye nebo
      Object.values(course).forEach((courseCategory)=>{
      courseCategory.forEach((courseValues)=>{
        allCourses.push(courseValues)  //for understanding this see the ss
      })
    })
    return allCourses  //ki holo ekhane ja ja major nesting chilo taader moddhye aak aak kore gelam then sekhaner data gulo k baar kore aakta jayega teh store koriye nilam
    }else{
      return course[cat]
    }
    }

  return (
    <div>{
      getCourse()?.map((e)=>{ //jodi func ta call e na kori then array ta return ki kore korbe and baki kaaj ta ki kore korbo
        return(
          <Card data={e} key={e.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        )
      })
      }
      </div>
  )
 }

export default Cards