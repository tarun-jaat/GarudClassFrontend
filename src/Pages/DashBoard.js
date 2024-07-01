import React from "react";
import Navbar from "../Components/Dashboard/Navbar";
import SideBar from "../Components/Dashboard/SideBar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  
  return (
    <div className="relative flex min-h-[calc(100vh-1rem)] bg-[#F5F6FA] ">
      <div className="w-[15%]">
      <SideBar />
      </div>
      <div className="h-screen w-[10%] flex-1 overflow-auto">
        <div className="mt-0">
          <Navbar />
          <div className="mt-80px">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
