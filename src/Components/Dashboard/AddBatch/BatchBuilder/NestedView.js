import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { FaPlus } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { RxDropdownMenu } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"


import {
  deleteSection,
  deleteSubSection,
} from "../../../../Services/Operations/CourseApi"
import { setBatch } from "../../../../Slices/BatchSilce"
import ConfirmationModal from "../../../Common/ConfirmationModal"
import SubSectionModal from "../../AddCourse/CourseBuilder/SubsectionModal";

export default function NestedView({ handleChangeEditSectionName }) {
  const { course } = useSelector((state) => state.course)
  const {Batch}= useSelector((state)=>state.batch)
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  // States to keep track of mode of modal [add, view, edit]
  const [addSubSection, setAddSubsection] = useState(null)
  const [viewSubSection, setViewSubSection] = useState(null)
  const [editSubSection, setEditSubSection] = useState(null)
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  const handleDeleleSection = async (sectionId) => {
    const result = await deleteSection({
      sectionId,
      courseId: course._id,
      token,
    })
    if (result) {
      dispatch(setBatch(result))
    }
    setConfirmationModal(null)
  }

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({ subSectionId, sectionId, token })
    if (result) {
      // update the structure of course
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setBatch(updatedCourse))
    }
    setConfirmationModal(null)
  }

  return (
    <>
      <div
        className="rounded-lg bg-[#4880FF] p-6 px-6"
        id="nestedViewContainer"
      >
        {course?.courseContent?.map((section) => (
          // Section Dropdown
          <details key={section._id} open>
            {/* Section Dropdown Content */}
            <summary className="flex cursor-pointer items-center px-2 justify-between border-b-2 border-b-richblack-5 rounded-full py-2">
              <div className="flex items-center gap-x-3">
                <RxDropdownMenu className="text-2xl text-white" />
                <p className="font-semibold text-white">
                  {section.sectionName}
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )
                  }
                >
                  <MdEdit className="text-2xl text-richblack-5 border rounded-full p-[2px]" />
                </button>
                <button
                  onClick={() =>
                    setConfirmationModal({
                      text1: "Delete this Section?",
                      text2: "All the lectures in this section will be deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => handleDeleleSection(section._id),
                      btn2Handler: () => setConfirmationModal(null),
                    })
                  }
                >
                  <RiDeleteBin6Line className="text-2xl text-richblack-5 border p-[2px] rounded-full" />
                </button>
                <span className="font-medium text-white">|</span>
                <AiFillCaretDown className={`text-xl text-richblack-5`} />
              </div>
            </summary>
            <div className="px-6 pb-4">
              {/* Render All Sub Sections Within a Section */}
              {section.subSection.map((data) => (
                <div
                  key={data?._id}
                  onClick={() => setViewSubSection(data)}
                  className="flex cursor-pointer items-center justify-between gap-x-3 border-b-2 border-b-white px-2 rounded-full py-2"
                >
                  <div className="flex items-center gap-x-3 py-2 ">
                    <RxDropdownMenu className="text-2xl text-richblack-5" />
                    <p className="font-semibold text-richblack-50">
                      {data.title}
                    </p>
                  </div>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-x-3"
                  >
                    <button
                      onClick={() =>
                        setEditSubSection({ ...data, sectionId: section._id })
                      }
                    >
                      <MdEdit className="text-2xl text-richblack-5 rounded-full border border-white p-[2px]" />
                    </button>
                    <button
                      onClick={() =>
                        setConfirmationModal({
                          text1: "Delete this Sub-Section?",
                          text2: "This lecture will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () =>
                            handleDeleteSubSection(data._id, section._id),
                          btn2Handler: () => setConfirmationModal(null),
                        })
                      }
                    >
                      <RiDeleteBin6Line className="text-2xl border p-[2px] rounded-full text-white" />
                    </button>
                  </div>
                </div>
              ))}
              {/* Add New Lecture to Section */}
              <button
                onClick={() => setAddSubsection(section._id)}
                className="mt-3 flex items-center gap-x-1 bg-white rounded-lg p-2"
              >
                <FaPlus className="text-lg" />
                <p>Add Lecture</p>
              </button>
            </div>
          </details>
        ))}
      </div>
      {/* Modal Display */}
      {addSubSection ? (
        <SubSectionModal
          modalData={addSubSection}
          setModalData={setAddSubsection}
          add={true}
        />
      ) : viewSubSection ? (
        <SubSectionModal
          modalData={viewSubSection}
          setModalData={setViewSubSection}
          view={true}
        />
      ) : editSubSection ? (
        <SubSectionModal
          modalData={editSubSection}
          setModalData={setEditSubSection} 
          edit={true}
        />
      ) : (
        <></>
      )}
      {/* Confirmation Modal */}
      {confirmationModal ? (
        <ConfirmationModal modalData={confirmationModal} />
      ) : (
        <></>
      )}
    </>
  )
}