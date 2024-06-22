import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Setting.css";
import { GrStatusCriticalSmall } from "react-icons/gr";

import moment from "moment";
import SideBarSetting from "./SideBarSetting";

function SettingHome(props) {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="relative flex flex-col gap-2 items-center  w-full">
      <div className="setting h-[120px] flex items-center justify-center w-full">
        <div className="absolute top-16">
          <div className="h-[120px] border-8 rounded-3xl border-white ">
            <img
              src={user.image}
              alt={user.firstName}
              className=" h-full rounded-2xl w-full"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full  bg-white rounded-lg flex flex-col pt-16  items-center">
        <h1 className="text-3xl font-semibold capitalize">
          {user.firstName} {user.lastName}
        </h1>
        <div className="flex items-center gap-5">
          <p className="text-richblack-400 text-sm">
            Member since{" "}
            <span className="text-richblack-600 font-semibold text-md">
              {moment(user.createdAt).format("D MMM YYYY")}
            </span>
          </p>
          <p className="flex items-center gap-3 ">
            <GrStatusCriticalSmall
              title="Active"
              className={
                user.active === true
                  ? "text-caribbeangreen-200"
                  : "text-pink-500"
              }
            />
            India
          </p>
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-2 ">
        <div className="w-[33%] h-[120px] bg-white rounded-lg py-2 px-4">
          <div>
            <p className="font-bold  text-brown-500 rounded-xl text-xl p-2 w-fit  ">

          {/* {user.courses?.length === 0 ? ('You have not enrolled in any courses.'):(
            `${user.courses.length}`
            )}
           */}
            </p>
            <p className="text-xl font-bold">Course Enrolled</p>
          </div>
          {/* <div>{user.courses.map((link, index) => {})}</div> */}
        </div>
        <div className="w-[33%] h-[120px] bg-white rounded-lg py-2 px-4">
        {/* <p className="font-bold  text-pink-500 rounded-xl text-xl p-2 w-fit">
        {user.quizzes?.length === 0 ? ('You have not enrolled in any courses.'):(
            `${user.quizzes.length}`
            )}            </p> */}
        
         <p className="text-xl font-bold">Quizzes Enrolled</p>
          
        </div>
        <div className="w-[33%] h-[120px] bg-white rounded-lg py-2 px-4">
        {/* <p>{user.courses.length || 'You have not enrolled in any courses.'}</p> */}
        <p className="font-bold  text-blue-500 rounded-xl text-3xl p-2 w-fit">
            34H
            </p>
            <p className="text-xl font-bold">Active Hours</p>

        </div>
      </div>
      <div className="w-full h-auto bg-white rounded-lg py-2 px-4">
      <p className="text-xl font-bold">Additional Details : </p>

      <p className="text-lg font-semibold text-richblack-400">About :-</p>
      <p>{user.additionalDetails.about}</p>
      <p className="text-lg font-semibold text-richblack-400">Contact Number:-</p>
      <p>{user.additionalDetails.contact}</p>
      <p className="text-lg font-semibold text-richblack-400">Gender:-</p>
      <p>{user.additionalDetails.gender}</p>
      </div>
      <SideBarSetting/>
    </div>
  );
}

export default SettingHome;
