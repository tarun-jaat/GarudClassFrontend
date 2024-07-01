import React, { useState, useEffect } from "react";
import { useCallback } from 'react';

import { useParams } from "react-router-dom";
import BasicBreadcrumbs from "../Dashboard/BreadCramps";
import { fetchquizDetails } from "../../Services/Operations/QuizApi";
import RatingStar from "../Common/RatingStar";
import GetAvgRating from "../../Utils/getAVGRating";
import { Tab, initMDB } from "mdb-ui-kit";

import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../Slices/cartSlice"
import { ACCOUNT_TYPE } from "../../Utils/Constants"
import ConfirmationModal from "../Common/ConfirmationModal"

import { setQuiz } from "../../Slices/QuizSlice";


import moment from "moment";
import { TiStopwatch } from "react-icons/ti";




function SingleQuizDetails() {
  initMDB({ Tab });
  const [confirmationModal, setConfirmationModal] = useState(null)

  const { id } = useParams();
  const [quiz, setQuizDetailArr] = useState({});
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  const [response, setResponse] = useState(null);

  const quizId = id;
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const getQuizDetails = async () => {
      try {
        const res = await fetchquizDetails(quizId, token);
        setQuizDetailArr(res);
      } catch (error) {
        console.log(error);
      }
    };
    getQuizDetails(); // Call the function once
  }, [quizId, token]);

  useEffect(() => {
    const count = GetAvgRating(quiz?.data?.ratingAndReviews);
    setAvgReviewCount(count);
  }, [response]);


  const handleBuyCourse = () => {
    if (user && quiz?.data?.studentsEnrolled.includes(user?._id)) {
      dispatch(setQuiz(quiz));
    // dispatch(setStep(2));
      navigate("/attempt-quiz");
    } else {
      console.log("hii")

    }
  };
    // setConfirmationModal({
    //   text1: "You are not logged in!",
    //   text2: "Please login to Purchase Course.",
    //   btn1Text: "Login",
    //   btn2Text: "Cancel",
    //   btn1Handler: () => navigate("/login"),
    //   btn2Handler: () => setConfirmationModal(null),
    // })
  

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = useCallback(() => {
    if (user && user.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.");
      return;
    }
  
    if (token) {
      dispatch(addToCart(quiz));
    } else {
      setConfirmationModal({
        text1: "You are not logged in!",
        text2: "Please login to add To Cart",
        btn1Text: "Login",
        btn2Text: "Cancel",
        btn1Handler: () => navigate("/login"),
        btn2Handler: () => setConfirmationModal(null),
      });
    }
  }, [user, token, quiz, dispatch, navigate]);


  return (
    <div className="relative p-4 w-full h-screen">
      <div className=" relative mt-[70px]">
        <BasicBreadcrumbs second={`Quiz / Details`} />
      </div>
      <div>
      <div className="mt-5 p-4 flex flex-col gap-3 bg-white rounded-xl">
        <h1 className="text-4xl  font-bold capitalize">
          {quiz?.data?.testName}
        </h1>
        <h3 className="text-xl capitalize  text-richblack-400 ">
          {" "}
          {quiz?.data?.testDescription}
        </h3>
        <div className="text-md flex flex-wrap items-center gap-2">
          <span className="text-yellow-25">{avgReviewCount}</span>
          <RatingStar Review_Count={avgReviewCount} Star_Size={24} />
          <span>{`(${quiz?.data?.ratingAndReviews.length} reviews)`}</span>
          <span>{`${quiz?.data?.studentsEnrolled.length} students enrolled`}</span>
        </div>
        <span className="text-xl capitalize">
          {"Created by "}
          {quiz?.data?.instructor?.firstName} {quiz?.data?.instructor?.lastName}
        </span>
        <span className="text-xl flex items-center text-richblack-400 capitalize gap-2">
          <TiStopwatch />
          {"Published at "}
          {moment(quiz?.data?.created_at).format("D MMM YYYY h:mm a")}
        </span>
      </div>
      <div className="mt-4 p-4 flex flex-col gap-3 bg-white rounded-xl">
        <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link active"
              id="ex-with-icons-tab-1"
              href="#ex-with-icons-tabs-1"
              role="tab"
              aria-controls="ex-with-icons-tabs-1"
              aria-selected="true"
            >
              <i class="fas fa-chart-pie fa-fw me-2"></i>About Quiz
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link"
              id="ex-with-icons-tab-2"
              href="#ex-with-icons-tabs-2"
              role="tab"
              aria-controls="ex-with-icons-tabs-2"
              aria-selected="false"
            >
              <i class="fas fa-chart-line fa-fw me-2"></i>About Instructor
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              data-mdb-tab-init
              class="nav-link"
              id="ex-with-icons-tab-3"
              href="#ex-with-icons-tabs-3"
              role="tab"
              aria-controls="ex-with-icons-tabs-3"
              aria-selected="false"
            >
              <i class="fas fa-cogs fa-fw me-2"></i>Instructions
            </a>
          </li>
        </ul>

        <div class="tab-content" id="ex-with-icons-content">
          <div
            className="tab-pane   flexborder fade show active"
            id="ex-with-icons-tabs-1"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-1"
          >
            <div className="flex flex-col gap-3 items-start">
              <span className="text-lg ">
                {"Category : "}
                {quiz?.data?.category.name}
              </span>
              <span className="text-lg ">
                {"Total Questions : "}
                {quiz?.data?.noOfQuestion}
              </span>
              <span className="text-lg ">
                {"Duration : "}
                {quiz?.data?.duration}
                {"m"}
              </span>
              <span className="text-lg ">
                {"Price : "}
                {quiz?.data?.price}
                {" ₹ "}
              </span>
              <span className="text-lg ">
                {"Student Enrolled : "}
                {quiz?.data?.studentsEnrolled.length}
              </span>
              <span className="text-lg ">
                {"Rating And Reviews : "}
                {quiz?.data?.ratingAndReviews.length}
              </span>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="ex-with-icons-tabs-2"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-2"
          >
            <div>
              <img
                src={quiz?.data?.instructor?.image}
                alt="instructor"
                className="h-14"
              />

              <p className="text-2xl text-blue-200 font-mono font-bold">
                {quiz?.data?.instructor?.firstName}{" "}
                {quiz?.data?.instructor?.lastName}
              </p>
              <p className="text-md text-richblack-300">
                {quiz?.data?.instructor?.email}
              </p>

              <p className="text-lg">
                {quiz?.data?.instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="ex-with-icons-tabs-3"
            role="tabpanel"
            aria-labelledby="ex-with-icons-tab-3"
          >
            <div className="flex flex-col gap-3 items-start">
              <strong>Instructions:</strong>
              {quiz?.data?.instructions.map((link) => {
                return (
                  <ol className="px-4 list-disc" key={link}>
                    <li>{link}</li>
                  </ol>
                );
              })}
            </div>
          </div>
          <div className={`flex absolute right-8 top-[27%] flex-col gap-2 rounded-xl border-2  bg-white border-blue-100 p-4 w-fit  text-richblack-5`} >
        {/* Course Image */}
        <img src={quiz?.data?.thumbnailImage} alt={quiz?.data?.testName}  className="max-h-[200px] shadow-md shadow-richblack-200 min-h-[180px] w-[300px] overflow-hidden rounded-2xl object-cover md:max-w-full"/>
       
        <div className="px-4">
        {(!user || !quiz?.data?.studentsEnrolled.includes(user?._id)) && (

          <div className="space-x-3 pb-4 text-richblack-500 text-2xl font-semibold">
            Rs. {quiz?.data?.price}

          </div>
        )}

          <div className="flex flex-col gap-3">
            <button className="bg-blue-100 text-white shadow-md shadow-richblack-300 font-bold rounded-xl py-2"
              // onClick = {user && quiz?.data?.studentsEnrolled.includes(user?._id) ? () => navigate("/attempt-quiz") :
               onClick={handleBuyCourse}  
                // }
               >
              {user && quiz?.data?.studentsEnrolled.includes(user?._id) ? "Attempt Quiz" : "Buy Now"}
            </button>
            {(!user || !quiz?.data?.studentsEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="border-2 border-blue-100 text-black shadow-md shadow-richblack-300 rounded-xl py-2"> Add to Cart </button>
            )}
          </div>
          <div>
            <p className="pb-1 pt-4 text-center text-sm text-richblack-300">{moment(quiz?.data?.created_at).format("D MMM YYYY h:mm a")}
            </p>
          </div>
          
          <div className="text-center"> 
            <button className="mx-auto flex items-center gap-2 py-2 text-blue-100 " onClick={handleShare} >
              <FaShareSquare size={15} /> Share
            </button>
          </div>

        </div>
      </div>
        </div>
        
      </div>
      
      </div>
      {confirmationModal && <ConfirmationModal modalData = {confirmationModal} />}

    </div>
  )

};

export default SingleQuizDetails;
