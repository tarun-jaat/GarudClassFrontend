import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BiBookReader } from "react-icons/bi";

export default function Card() {
  return (
    <div className=" bg-white flex rounded-2xl  flex-col items-center gap-4 justify-between bg-opacity-60 shadow-2xl shadow-richblack-300 relative w-[350px] p-4 border border-richblack-200">
      <div className="mt-[80px] flex flex-col gap-4 ">
        <tag className="flex items-center gap-2 justify-between">
          <p className="flex items-center justify-between">
            <span className="text-richblack-200 font-light text-xs">
              Timing : 
            </span>
             35:00 hrs <CiStopwatch fontSize={20} />
          </p>
          <p className="flex items-center gap-2 justify-between">
            <span className="text-richblack-200 font-light text-xs">
              Rating : 
            </span>
             3.5 <TiStarFullOutline color="#FF9A00" fontSize={20} />
          </p>
        </tag>
        <p className=" font-bold text-2xl">Garud NEET Carsh Course 1.0</p>
        <p>
          In this course we will provide you the njf lorem jsimpu jsbd bhfsb
          bfhsdfjh
        </p>
        <div className="flex justify-between items-center gap-3">
          <Link className="p-2 border-2 border-blue-100 hover:text-white hover:bg-blue-100 text-md flex hover:scale-95 items-center duration-100  w-[50%] gap-2 rounded-md ">
            Add to cart <RiShoppingCart2Fill fontSize={24} />
          </Link>
          <Link className="p-2 hover:border-2 hover:border-blue-100 bg-blue-100 hover:bg-transparent text-white hover:text-black hover:scale-95 duration-100  w-1/2 text-md flex items-center gap-2 rounded-md ">
            Know More <BiBookReader fontSize={28} />
          </Link>
        </div>
      </div>
      <img
        src="https://timesofindia.indiatimes.com/photo/msid-72073355,imgsize-434895.cms"
        alt=""
        className=" shadow-lg shadow-richblack-600 absolute top-[-50px] rounded-md h-32"
      />
    </div>
    // < className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
  );
}
