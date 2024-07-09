import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchInstructorCourses } from "../../Services/Operations/BatchApi"
// import { fetchInstructorCourses } from "../../Services/Operations/CourseApi"
import IconBtn from "../Common/ButtonCommon"
import BatchesTable from "./InstructorDashboard/BatchesTable"
// import CoursesTable from "./InstructorDashboard/CoursesTable"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [batches, setBatches] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setBatches(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-4 mt-4 mb-
        4">
            <h1 className="text-2xl font-bold">My Batches</h1>  
        </div>
      {/* {courses && <CoursesTable courses={courses} setCourses={setCourses} />} */}
      {batches && <BatchesTable batches={batches} setBatches={setBatches} />}
    </div>
  )
}