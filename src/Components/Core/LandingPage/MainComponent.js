import { Button } from "@mui/material";
import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { TfiThought } from "react-icons/tfi";
import { HiOutlineLightBulb } from "react-icons/hi";
import './Style.css'
const Skills = [
  {
    name: "Public Speaking",
    icon: <TfiThought fontSize={28} color="#ff6802" />,
  },
  {
    name: "Carrer-Oriented",
    icon: <GiShoppingBag fontSize={28} color="#dc00b" />,
  },
  {
    name: "Problem Solving",
    icon: <HiOutlineLightBulb fontSize={28} color="#ffd600" />,
  },
];

function MainComponent() {
  return (
    <div className="h-[700px] md:px-10 flex md:flex-row flex-col-reverse items-center bg-[#f4fbfe] w-full">
      <div className="md:w-[46%] w-full md:p-16 flex flex-col px-4 gap-8 items-start">
        <h1 className="font-extrabold md:text-4xl text-2xl   text-[#1B2124]  xl:text-[50px] md:text-[32px] md:leading-[58px] xl:leading-[60px] mb-[6px]">
          Up Your <span className="text-blue-200">Skills</span> To{" "}
          <span className="text-blue-200"> Advance</span> Your{" "}
          <span className="text-blue-200"> Carrer</span> Path
        </h1>
        <p className="md:text-lg text-sm text-richblack-600 font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          consequuntur, consequuntur, consequuntur, consequuntur. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Accusantium,
          consequuntur,
        </p>
        <Button className="md:p-3 md:px-4 rounded-xl" variant="contained">
          Get Started
        </Button>
        <div className="flex flex-wrap md:gap-4 gap-1">
          {Skills.map((link, index) => (
            <div
              key={index}
              className="bg-white shadow-md bg-opacity-0 rounded-xl w-fit h-fit md:p-4 p-2 flex gap-2 items-center "
            >
              <p style={{ textShadow: "#0000 1px 0 10px" }}>{link.icon}</p>
              <p className="md:text-lg text-sm">{link.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 w-full md:px-0 px-7 md:mb-0 md:mt-0 mt-24 mb-16 relative flex justify-center items-center">
        <div className="border-2 z-20 border-blue-100 rounded-full  pl-6 pt-4">
          <img
            src="https://img.freepik.com/premium-photo/young-student-boy-feeling-happy-excited-surprised-shocked-smiling-astonished-something-unbelievable_1194-262212.jpg"
            loading="lazy"
            alt="img"
            className=" h-74 w-74 rounded-full object-cover"
          />
        </div>
        <div className="bg-blue-300 h-12 w-12 rounded-full top-2 right-6 shadow-xl shadow-blue-50  absolute"></div>
        <div className="bg-blue-300 h-16 w-16 rounded-full bottom-3 left-9 shadow-xl shadow-blue-50  absolute"></div>
        <div className=" bg-blue-50 h-6 w-6 rounded-full -top-3 left-18 shadow-lg shadow-blue-500  absolute"></div>
        <div className="bg-blue-50 h-8 w-8 rounded-full top-16 left-16 shadow-xl shadow-blue-50  absolute"></div>
        <div className="animation absolute z-10 h-64 w-64 -bottom-16 right-0 p-2">
          <div className=" border p-4 h-full w-full rounded-full ">
            <div className=" border p-4 h-full w-full rounded-full ">
              <div className=" border p-4 h-full w-full rounded-full ">
                <div className=" border h-full w-full rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
