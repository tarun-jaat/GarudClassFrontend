import React from "react";
// import { Slide } from 'react-slideshow-image'
import "./Style.css";
import Slideshow from "./SlideShow";
function OurSelections() {
  return (
    <div className=" relative w-full flex justify-between shadow-xl shadow-richblack-500 items-center rounded-lg  border-2 border-blue-100 h-full md:w-[60%]">
      <div className="OurSelections  flex flex-col justify-center items-start  ">
        <div className="flex flex-col gap-4 pl-9 justify-center items-start ">
          <p
            style={{ textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className=" text-white text-[32px] font-bold md:text-[42px]"
          >
            Our Selections
          </p>
          <p
            style={{ textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            className="text-white w-3/5 text-[18px] font-inter font-semibold md:text-[24px]"
          >
            "Where Dreams Take Flight, Excellence Ignites!"
          </p>
        </div>
      </div>
      {/* <Slideshow /> */}
    </div>
  );
}

export default OurSelections;
