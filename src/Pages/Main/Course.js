import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicBreadcrumbs from "../../Components/Dashboard/BreadCramps";
import { Button } from "@mui/material";
import EnrolledCourses from "../../Components/Dashboard/EnrolledCourse";
import MyCourses from "../../Components/Dashboard/myCourses";
export default function Course() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="p-4">
      <div className="w-full flex mt-14 ">
        <BasicBreadcrumbs second="Course" />
        {user?.accountType === "Admin" || user?.accountType==="Instructor"  ? (
          <Button
            variant="outlined"
            color="primary"
            className="ml-4 w-[150px]"
            href="/dashboard/addcourse"
          >
            Add course
          </Button>
        ) : null}
      </div>
      {user?.accountType === "Student" ? (
        <EnrolledCourses />
      ) : (
        <MyCourses />
      )}
      </div>
  )
}
