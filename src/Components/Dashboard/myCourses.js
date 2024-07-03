import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchInstructorCourses } from "../../Services/Operations/CourseApi"
import IconBtn from "../Common/ButtonCommon"
import CoursesTable from "./InstructorDashboard/CoursesTable"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}