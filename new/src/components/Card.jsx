import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


const Card = (props) => {
  let course = props.course;
  let likedcourses=props.likedcourses;
  let setLikedcourses=props.setLikedcourses;

  function  clickHandler(){
   
if(likedcourses.includes(course.id)){
console.log(likedcourses.length);

    setLikedcourses((prev)=>prev.filter((cid)=>(cid !==course.id)));

    toast.warning("liked removed");}

else{
     if(likedcourses.length===0){
      
      setLikedcourses([course.id]);}
     else{ setLikedcourses((prev)=>[...prev,course.id])  };
    toast.success("Liked Succesfully");}
  
  }

  
  return (

    <div className="w-[300px] bg-pink-100  bg-white rounded-xl shadow-md overflow-hidden" >

      <div  className="relative"><img src={course.image.url} alt="" /></div>

      <div  className="w-[40px] h-[40px]  bg-white  rounded-full  relative  bottom-10 left-60

        grid  place-items-center">  <button onClick={clickHandler}>{!likedcourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) :(<FcLike fontSize="1.75rem" />)}
          </button></div>

        <div  className="p-4">
          <p  className="text-black font-extrabold text-lg leading-6">{course.title}</p>
          <p  className=" mt-2  text-black  font-semibold ">{course.description.length>100?(course.description.substring(0,100)+"...."):(course.description)}</p> 
          </div>

      </div>
  );
};

export default Card;
