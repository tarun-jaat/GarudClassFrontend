import React from 'react'
import {Link}from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiMaterialsScience } from "react-icons/gi";

export default function Card() {
  return (
    <>
    <div className={`relative border shadow-xl shadow-richblack-100  border-richblack-300 bg-opacity-15 h-fit w-[450px] hover:bg-opacity-30 p-4 rounded-s-3xl flex flex-col justify-between  gap-3`}>
      <p className=' text-start font-bold text-xl uppercase'>IIT | jee </p>
      <hr className='w-[60%]'/>

      <p className='text-start text-sm my-[-8px] underline underline-offset-2  text-richblack-300'>Benefits</p>
      <div className=' flex gap-3 flex-wrap w-60'>
        <p className=' shadow-md shadow-blue-50 w-fit h-fit text-richblack-600  rounded-3xl cursor-pointer bg-opacity-90  bg-blue-5 p-2 border'>Study Material</p>
        <p className=' shadow-md shadow-blue-50 w-fit h-fit text-richblack-600  rounded-3xl cursor-pointer bg-opacity-90  bg-blue-5 p-2 border'>Mock Test</p>
        <p className=' shadow-md shadow-blue-50 w-fit h-fit text-richblack-600  rounded-3xl cursor-pointer bg-opacity-90  bg-blue-5 p-2 border'>Course</p>
      </div> 
      <hr className='w-[60%]'/>
      <Link className='flex w-fit  gap-3 p-2 rounded-2xl border border-richblack-300 items-center hover:bg-blue-100 bg-white   hover:text-white text-blue-100 hover:font-bold scale-105 justify-between  '>
      Explore Category <IoIosArrowRoundForward fontSize={28}/>
      </Link>
      <div  className='absolute h-full flex items-center text-blue-200 justify-center w-[150px] right-0 bg-opacity-40 mr-[0px] bg-pink-50 m-[-16px] rounded-e-3xl rounded-s-full '>
        <GiMaterialsScience fontSize={"84px"}/>
</div>

    </div>
    
    </>
    
  )
}
