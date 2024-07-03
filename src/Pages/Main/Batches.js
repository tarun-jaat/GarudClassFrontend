import React from "react";
import BasicBreadcrumbs from "../../Components/Dashboard/BreadCramps";
import CardBatches from "../../Components/Core/LandingPage/Batches/CardBatches";

function Batches() {
  return (
    <div className="p-4">
      <div className="w-full mt-14 flex ">
        <BasicBreadcrumbs second="Batches" />
      </div>
      <div className="my-4">
        <h1 className="text-3xl my-2 w-full text-richblack-600 font-bold underline">Batches</h1>
        <hr/>
        <div className="flex flex-wrap gap-2 mt-4 ">
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>
            <CardBatches/>

        </div>
      </div>
    </div>
  );
}

export default Batches;
