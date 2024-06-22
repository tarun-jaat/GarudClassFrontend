import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicBreadcrumbs from "../../Components/Dashboard/BreadCramps";
import { Button } from "@mui/material";
import CreateCourseForm from "./createQuiz";

function Quiz() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="p-4">
      <div className="w-full mt-14 flex ">
        <BasicBreadcrumbs second="Quiz" />
        {user?.accountType === "Admin" || user?.accountType==="Instructor"  ? (
          <Button
            variant="outlined"
            color="primary"
            className="ml-4 w-[150px]"
            href="/dashboard"
          >
            Create Quiz
          </Button>
        ) : null}
        <CreateCourseForm/>
      </div>
    </div>
  );
}

export default Quiz;
