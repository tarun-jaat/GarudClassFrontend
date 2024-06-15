import React from "react";
import Navbar from "../Components/Dashboard/Navbar";
import SideBar from "../Components/Dashboard/SideBar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-[#F5F6FA]">
      <SideBar />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
