import React from "react";
import Navbar from "../Components/Dashboard/Navbar";
import SideBar from "../Components/Dashboard/SideBar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  
  return (
    <div className="relative flex min-h-100vh bg-[#F5F6FA] ">
      <SideBar />
      <Navbar/>

       <div className="h-100vh flex-1 overflow-auto">
        <div className=" w-full md:pl-72 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
