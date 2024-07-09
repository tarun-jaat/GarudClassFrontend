import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

import { setCourse, setEditCourse } from "../../../Slices/courseSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { formatDate } from "../../../Services/FormateDate"
// import {
//   deleteCourse,
//   fetchInstructorCourses,
// } from "../../../Services/Operations/CourseApi"
import { fetchInstructorCourses } from "../../../Services/Operations/BatchApi"
import { COURSE_STATUS } from "../../../Utils/Constants"
import { BATCH_STATUS } from "../../../Utils/Constants"
import ConfirmationModal from "../../Common/ConfirmationModal"

export default function BatchesTable({ batches, setBatches }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 30

//   const handleCourseDelete = async (courseId) => {
//     setLoading(true)
//     await deleteCourse({ courseId: courseId }, token)
//     const result = await fetchInstructorCourses(token)
//     if (result) {
//       setBatches(result)
//     }
//     setConfirmationModal(null)
//     setLoading(false)
//   }

  // console.log("All Course ", batches)

  return (
    <>
      <Table className="rounded-xl border border-richblack-800 bg-white ">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b bg-blue-200 border-b-richblack-800 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-5">
              Batches
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-5">
              Duration
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-5">
              Price
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-5">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {batches?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-500">
                No batches found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            batches?.map((batch) => (
              <Tr
                key={batch._id}
                className="flex gap-x-10 border-b border-richblack-800 px-6 py-8"
              >
                <Td className="flex flex-1 gap-x-4">
                  <img
                    src={batch?.thumbnail}
                    alt={batch?.batchName}
                    className="h-[148px] w-[220px] bg-blue-200 rounded-lg  object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-richblack-600">
                      {batch.batchName}
                    </p>
                    <p className="text-xs text-richblack-300">
                      {batch.batchDescription.split(" ").length >
                      TRUNCATE_LENGTH
                        ? batch.batchDescription
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ") + "..."
                        : batch.batchDescription}
                    </p>
                    <p className="text-[12px] text-black">
                      Created: {formatDate(batch.createdAt)}
                    </p>
                    {batch.publishedStatus === COURSE_STATUS.PUBLISHED ? (
                        <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-blue-200 px-2 py-[2px] text-[12px] font-medium text-white">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-white text-richblack-600">
                          <FaCheck size={8} />
                        </div>
                        Published
                      </p>
                      
                    ) : (
                        <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Drafted
                      </p>
                    )}
                  </div>
                </Td>
                <Td className="text-sm font-medium text-richblack-600">
                  2hr 30min
                </Td>
                <Td className="text-sm font-medium text-richblack-600">
                  ₹{batch.price}
                </Td>
                <Td className="text-sm font-medium text-richblack-600 ">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-batch/${batch._id}`)
                    }}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    // onClick={() => {
                    //   setConfirmationModal({
                    //     text1: "Do you want to delete this batch?",
                    //     text2:
                    //       "All the data related to this batch will be deleted",
                    //     btn1Text: !loading ? "Delete" : "Loading...  ",
                    //     btn2Text: "Cancel",
                    //     btn1Handler: !loading
                    //       ? () => handleCourseDelete(batch._id)
                    //       : () => {},
                    //     btn2Handler: !loading
                    //       ? () => setConfirmationModal(null)
                    //       : () => {},
                    //   })
                    // }}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}