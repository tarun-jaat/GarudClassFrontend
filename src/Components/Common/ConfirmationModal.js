import React from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import IconBtn from "./ButtonCommon"
export default function ConfirmationModal({ modalData }) {
  return (

    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-[#4880ff] bg-white p-6">
        
        <p className="text-2xl font-semibold text-[#4880ff] "> {modalData?.text1} </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">  {modalData?.text2} </p>
      
        {/* <div className="flex justify-between items-center mx-4 ">
        
        <button className="cursor-pointer rounded-md bg-[#4880ff] py-[8px] px-[20px] font-semibold text-white" 

onClick = {()=>modalData?.btn1Handler} >
            {modalData?.btn1Text}
            </button>
            
        </div> */}
<div className="flex items-center justify-between  gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="cursor-pointer rounded-md border-2 border-[#4880ff] bg-white py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}


/*
it is modal like when we click on logout in dashboard profile then all background screen become blure and a alreat appear that "are
you sure to logout" and blew two option "yes" or "No" , if we click on yes then logout happend and click on No then model get cancal out;
*/