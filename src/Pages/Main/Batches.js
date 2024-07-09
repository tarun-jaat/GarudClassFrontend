import React from "react";
import { useSelector } from "react-redux";
import BasicBreadcrumbs from "../../Components/Dashboard/BreadCramps";
import CardBatches from "../../Components/Core/LandingPage/Batches/CardBatches";
import { Button } from "@mui/material";
import MyCourses from "../../Components/Dashboard/MyBatches";


function Batches() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="p-4 h-screen">
      <div className="w-full flex mt-14 ">
        <BasicBreadcrumbs second="Batch" />
        {user?.accountType === "Admin" || user?.accountType==="Instructor"  ? (
          <Button
            variant="outlined"
            color="primary"
            className="ml-4 w-[150px]"
            href="/dashboard/addBatch"
          >
            Add Batch
          </Button>
        ) : null}
      </div>
      <div className="my-4">
      {user?.accountType === "Admin" || user?.accountType==="Instructor"  ? (
        <>
         {/* <h1 className="text-xl my-2 w-full text-richblack-400 font-bold underline">Your Batches</h1>
         <hr/> */}<MyCourses/>
        </>
      ):(<>
       <h1 className="text-xl my-2 w-full text-richblack-600 font-bold underline">Batches</h1>
        <hr/>
        <div className="flex flex-wrap gap-2 mt-4 ">
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
        </div>
      </>)}

       
      </div>
    </div>
  );
}

export default Batches;
