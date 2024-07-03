import React from "react";
import { dashBoardCardData } from "../../Data/DashBoardCard.data";
import { MdInsights } from "react-icons/md";
import { useSelector } from "react-redux";
import Instructor from "../../Components/Dashboard/InstructorDashboard/InstructorDashboard";
import UserBanner from "../../Components/Dashboard/UserBanner";
import ActiveCourses from "../../Components/Dashboard/ActiveCourses";

function DashBoardHome() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="p-4">
      <h1 className="text-3xl mt-16 font-bold">DashBoard</h1>
      { user?.accountType ==='Admin' && (
        <div className="flex mt-6 justify-between items-center gap-x-4">
          {dashBoardCardData.map((link, index) => (
            <div
              key={index}
              className="w-[262px] h-[161px] bg-white rounded-lg felx flex-col gap-4 p-3"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <h2 className="text-md text-richblack-400">{link.title}</h2>
                  <p className="text-3xl font-bold">{link.value}</p>
                </div>
                <img className=" " src={link.icon} alt={link.title} />
              </div>
              <p className="text-sm text-richblack-400 flex items-center mt-6 gap-3">
                <span className=" text-caribbeangreen-600 flex text-xl items-center gap-2">
                  {"8"}<MdInsights fontSize={22} />
                </span>
                Up from yesterday
              </p>
            </div>
          ))}
          
        </div> 
      )}
      {user?.accountType==='Instructor' &&(
            <Instructor/>
          )}
          {user?.accountType==='Student'&&(
            <UserBanner/>
          )}
          <div className="details flex justify-between mt-8 gap-4 w-full">
      {user?.accountType === 'Student' &&(
    <>
      <ActiveCourses/>
    </>
  )}
      </div>
    </div>
  );
}

export default DashBoardHome;