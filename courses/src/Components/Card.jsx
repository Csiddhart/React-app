import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({data,likedCourses,setLikedCourses}) {
   function clickHandler() {
        // Logic
        if (likedCourses.includes(data.id)) {
            // pahle se liked 
            setLikedCourses((prev) => prev.filter((cid) => cid !== data.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([data.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, data.id]);//jodi zero na and existing taar sathe add korteh chaichi then eram bhabe--> prev ta k spread bhabe pathalam and new ta pathalam emni and emni ta aar speard ta aak sathe add hoye jabe
            }
            toast.success("Liked Successfully"); //zero thakuk ba element thaakuk aayi toast ta execute hoye jabe
        }
    }
  return (
    <div>
      <div>
        <img src={data.image.url} alt={data.image.alt} />
        <div>
          <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(data.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
          </button>
        </div>
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>

    </div>
  )
}

export default Card