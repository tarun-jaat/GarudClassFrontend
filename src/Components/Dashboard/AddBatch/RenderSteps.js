import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa"
import BatchBuilder from './BatchBuilder/BatchBuilder'
import BatchInfoForm from './BatchInfo/BatchInfoForm'
import PublishBatch from './PublishBatch'

const RenderSteps = () => {

    const { step } = useSelector((state) => state.batch)
  
  
    const steps = [
      {
        id: 1,
        title: 'Batch Information'
      },
      {
        id: 2,
        title: 'Batch Builder'
      },
      {
        id: 3,
        title: 'Publish'
      }
    ]

    return (
        <div>
    
          <div className='flex w-full justify-center mb-2' >
            {
              steps.map((item) => (
                <Fragment key={item.id}>
                  <div className={`grid place-items-center aspect-square rounded-full w-[34px] border select-none
                    ${item.id < step && "bg-[#4880FF] text-white"}
                    ${item.id === step && " border-2 bg-[#004cff]  text-[#f5f5f5]"}
                    ${item.id > step && "border-richblack-white bg-white text-richblack-300"}
                  `} >
                    {
                      item.id < step ? <FaCheck className='font-bold text-richblack-5' /> : item.id
                    }
                  </div>
    
                  {
                    item.id !== steps.length && (
                      <>
                        <div className={`h-[calc(34px/2)] w-[33%] border-b-2 border-dashed
                      ${item.id < step ? "border-[#4880FF]" : "border-richblack-500"}
                      `} >
                        </div>
                      </>
                    )
                  }
                </Fragment>
              ))
            }
          </div>
    
          <div className='mb-4 ml-4'>
            <div className='hidden md:flex justify-around select-none ' >
              {
                steps.map(item => (
                  <div key={item.id} className={`min-w-[130px] text-center text-sm  uppercase tracking-wider
                  ${item.id <= step ? "text-richblack-500 " : "text-richblack-500"}`} >
                    {item.title}
                  </div>
                ))
              }
            </div>
          </div>
    
          <div className='md:hidden font-semibold mb-5 text-xl'>
            {step === 1 && "BatchInformationForm"}
            {step === 2 && "BatchBuilderForm"}
            {step === 3 && "Publish Batch"}
          </div>
    
          {step === 1 && <BatchInfoForm />}
          {step === 2 && <BatchBuilder/>}
          {step === 3 && <PublishBatch/>}
    
        </div>
      )
    }
    export default RenderSteps