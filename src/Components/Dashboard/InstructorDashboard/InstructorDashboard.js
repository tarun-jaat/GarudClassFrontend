import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchInstructorCourses } from "../../../Services/Operations/CourseApi";
import { getInstructorData } from "../../../Services/Operations/ProfileAPI";
import InstructorChart from "./InstructorChart";
// import Spinner from "../../Common/Spinner"

export default function Instructor() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const instructorApiData = await getInstructorData(token);
      const result = await fetchInstructorCourses(token);

      if (instructorApiData && instructorApiData.length) {
        setInstructorData(instructorApiData);
      }

      if (result && result.length) {
        setCourses(result);
      }

      setLoading(false);
    })();
  }, []);

  const totalAmount = instructorData
  ? instructorData.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0)
  : 0;
const totalStudents = instructorData
  ? instructorData.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0)
  : 0;

  return (
    <div>
      <div className="space-y-2">
        <p className="text-richblack-200 text-xl font-normal ">
          "Welcome back!{" "}
          <span className="text-[#4880FF] text-2xl font-bold ">
            {user.firstName}{" "}
          </span>{" "}
          <br />
          We've missed your energy and presence around here."
        </p>
      </div>

      <div>
      {loading ? (
          <div className="spinner"></div>
        ) : courses.length > 0 ? (
          <div>
            <div className="my-4 flex h-[450px] space-x-4">
              {/* Render chart / graph */}
              {totalAmount > 0 || totalStudents > 0 ? (
                <InstructorChart courses={instructorData} />
              ) : (
                <div className="flex-1 rounded-md bg-white border border-richblack-200 p-6">
                  <p className="text-lg font-bold text-[#4880FF]">Visualize</p>
                  <p className="mt-4 text-md font-medium text-richblack-500">
                    Not Enough Data To Visualize
                  </p>
                </div>
              )}
              {/* Total Statistics */}
              <div className="flex min-w-[250px] flex-col rounded-md bg-white p-6">
                <p className="text-lg font-bold text-[#4880FF]">Statistics</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-lg text-richblack-500">Total Courses</p>
                    <p className="text-3xl font-semibold text-brown-25">
                      {courses.length}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-500">Total Students</p>
                    <p className="text-3xl font-semibold text-blue-300">
                      {totalStudents}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-500">Total Income</p>
                    <p className="text-3xl font-semibold text-caribbeangreen-25">
                      Rs. {totalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-white p-6">
              {/* Render 3 courses */}
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-[#4880FF]">Your Courses</p>
                <Link to="/dashboard/my-courses">
                  <p className="text-xs font-semibold underline text[#4880FF]">View All</p>
                </Link>
              </div>
              <div className="my-4 flex items-start space-x-6">
                {courses.slice(0, 3).map((course) => (
                  <div key={course._id} className="w-1/3 border border-richblack-200 p-4 rounded-2xl">
                    <img
                      src={course.thumbnail}
                      alt={course.courseName}
                      className="h-[201px] w-full rounded-md object-fill"
                    />
                    <div className="mt-3 w-full">
                      <p className="text-md font-bold uppercase  text-[#4880FF]">
                        {course.courseName}
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <p className="text-xs font-medium text-richblack-500">
                          {course.studentsEnrolled.length} students
                        </p>
                        <p className="text-xs font-medium text-richblack-300">
                          |
                        </p>
                        <p className="text-xs font-medium text-richblack-700">
                          Rs. {course.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 rounded-md bg-white p-6 py-20">
            <p className="text-center text-2xl font-bold text-richblack-5">
              You have not created any courses yet
            </p>
            <Link to="/dashboard/addcourse">
              <p className="mt-1 text-center text-lg font-semibold text-blue-200">
                Create a course
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
