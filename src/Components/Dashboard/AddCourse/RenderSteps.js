import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa"
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
import CourseInformationForm from "./CourseInformation/CourseInformationForm"
import PublishCourse from "./PublishCourse"

const RenderSteps = () => {

  const { step } = useSelector((state) => state.course)


  const steps = [
    {
      id: 1,
      title: 'Course Information'
    },
    {
      id: 2,
      title: 'Course Builder'
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
                  item.id < step ? <FaCheck className='font-bold text-richblack-900' /> : item.id
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
        <div className='hidden md:flex justify-between select-none ' >
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
        {step === 1 && "CourseInformationForm"}
        {step === 2 && "CourseBuilderForm"}
        {step === 3 && "PublishCourse"}
      </div>

      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse/>}

    </div>
  )
}

export default RenderSteps