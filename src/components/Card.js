import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'

export const Card = (props) => {
  let course = props.course
  let likedCourses = props.likedCourses
  let setLikedCourses = props.setLikedCourses

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehle se like hai
      setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)));
      toast.warning('Like Removed')
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success('Liked Successfully')
    }

  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url}/>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 shadow-xl grid place-items-center'>
          <button onClick={clickHandler}>
          {
            !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
          }
          </button>
        </div>
    </div>
 
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white text-base mt-2'>                    
        {
          props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
        }
        </p>
      </div>

    </div>
  )
}
