import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizzes } from "../../Services/Operations/QuizApi";

import BasicBreadcrumbs from "../../Components/Dashboard/BreadCramps";
import { Button } from "@mui/material";
import { LuUsers2 } from "react-icons/lu";
import { IoMdStopwatch } from "react-icons/io";
import moment from 'moment';
import { FaStar } from "react-icons/fa";
import  GetAvgRating from '../../Utils/getAVGRating'
import { Link } from "react-router-dom";
import EnrolledQuiz from "../../Components/Dashboard/Quiz/EnrolledQuiz";
// import CreateCourseForm from "./createQuiz";

function Quiz() {

  const { user } = useSelector((state) => state.profile);
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const fetchedQuizzes = await getAllQuizzes();
        setQuizzes(fetchedQuizzes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuizzes();
  }, []); 

  const averageRating = GetAvgRating(quizzes.ratingAndReviews);



  return (
    <div className="p-4">
      <div className="w-full mt-14 flex ">
        <BasicBreadcrumbs second="Quiz" />
        {user.accountType === "Admin" || user.accountType === "Instructor" ? (
          <Button
            variant="outlined"
            color="primary"
            className="ml-4 w-[150px]"
            href="/dashboard/quiz/create-quiz"
          >
            Create Quiz
          </Button>
        ) : null}
        {/* <CreateCourseForm/> */}
      </div>
      <div className=" w-full my-4 h-72 border rounded-xl bg-white ">
        <p className=" bg-blue-200 p-4 text-xl font-mono rounded-xl text-white font-bold ">
          Quiz Enrolled 
        </p>
        <div className="flex items-center justify-center text-richblack-400">
          {/* <p className="mt-16">you have no Enrolled for any course </p> */}
          <EnrolledQuiz/>
        </div>
      </div>
      <div className="  w-full h-fit border rounded-xl bg-white ">
        <div className=" p-4 justify-between items-center flex bg-blue-200 w-full rounded-xl">
        <p className="  text-xl font-mono rounded-xl text-white font-bold ">
          Explore Quiz
          
        </p>
        <p className=" bg-blue-200 text-sm border border-white p-2 hover:translate-y-1 transition-all duration-200 ease-in-out   rounded-xl text-white  ">
          View All
          
        </p>
        </div>
        
        <div className="flex relative items-center py-8 px-2 justify-around">
        {quizzes.sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 3).map((quiz, index) => (
            <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 -mt-6 h-40 flex items-center justify-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-100">
            <img src={quiz.thumbnailImage} className=" object-cover  " alt="quiz"/>
            </div>
            <div className="px-2 flex justify-between items-center pt-3">
              <p className="text-sm text-richblack-300 ">Price : <strong className="text-blue-300 text-md"> {quiz.price} ₹</strong>  </p>
              <p className="text-sm text-richblack-300 flex items-center justify-center "><LuUsers2 fontSize={20}/> <strong className="text-richblack-400 text-md capitalize"> {quiz?.instructor?.firstName}</strong>  </p>
              <p className="text-sm text-yellow-50  flex items-center justify-center "><FaStar fontSize={20}/> <strong className="text-richblack-400 text-md capitalize"> {isNaN(averageRating) ? 0 : averageRating}</strong>  </p>
            </div>
            <div class="px-6 py-3">
              <h5 class="mb-2 capitalize block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               {quiz.testName}
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {quiz.testDescription}
              </p>
            </div>
            <div class="p-6 flex gap-2 pt-0">
              <Link to={`/dashboard/quiz/${quiz._id}`} quizId={quiz._id} data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Know More
              </Link>
              <button data-ripple-light="true" type="button" class="select-none rounded-lg border-1 border-blue-500 py-3 px-3 text-center align-middle font-sans font-bold uppercase text-blue-300 text-sm shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Add to Cart
              </button>
            </div>
            <p className="text-sm text-center p-1 text-richblack-200">{moment(quiz.created_at).format('MMMM Do, YYYY h:mm:ss a')}</p>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
}

export default Quiz;
