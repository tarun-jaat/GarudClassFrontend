import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import "../../QuizComponentMain.js/Style.css";
import { resetQuizState, setScore, setStep } from "../../../Slices/QuizSlice";
import { submitAnswer,endQuiz } from "../../../Services/Operations/QuizApi";

function AttemptQuiz() {
  const { user } = useSelector((state) => state.profile);
  const { quiz } = useSelector((state) => state.quiz);
  const conductQuiz = useSelector((state) => state.quiz.conductQuiz);

  // console.log(conductQuiz)
  // const {conductQuiz}=useSelector((state)=>state.quiz);


  // console.log(quiz?.data?.questions);
  // if (!quiz || !quiz.data) {
  //   return <div>Loading...</div>;
  // }

  const [timeRemaining, setTimeRemaining] = useState(quiz?.data?.duration * 60);
  const [finished, setFinished] = useState(false);
  const [activeTab, setActiveTab] = useState("question"); // new state for active tab  //   const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [visitedIndices, setVisitedIndices] = useState([]);
  const [reviewedIndices, setReviewedIndices] = useState([]);
  const [notVisitedd, setNotVisited] = useState(quiz?.data?.questions.length);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answeredIndices, setAnsweredIndices] = useState([0]);
  const { token } = useSelector((state) => state.auth)
  const [submitting, setSubmitting] = useState(false);



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOptionSelect = (index, optionIndex) => {
    if (!visitedIndices.includes(index)) {
      setNotVisited(notVisitedd - 1);
      setVisitedIndices((prevVisitedIndices) => [...prevVisitedIndices, index]);
    }
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [index]: optionIndex,
    }));
    setAnsweredIndices((prevAnsweredIndices) => ({
      ...prevAnsweredIndices,
      [index]: true,
    }));
    setSubmitting(true);
  };

  useEffect(() => {
    if (submitting) {
      submitAnswertoAPi();
      setSubmitting(false);
    }
  }, [submitting, selectedOptions]);
  

  const handleMarkAsReview = (index) => {
    if (reviewedIndices[index]) {
      // Remove from review
      setReviewedIndices((prevReviewedIndices) => {
        const newReviewedIndices = { ...prevReviewedIndices };
        delete newReviewedIndices[index];
        return newReviewedIndices;
      });
    } else {
      // Add to review
      setReviewedIndices((prevReviewedIndices) => ({
        ...prevReviewedIndices,
        [index]: true,
      }));
    }
  };

  const handleNextClick = () => {
    if (!visitedIndices.includes(currentIndex + 1)) {
      setNotVisited(notVisitedd - 1);
      setVisitedIndices((prevVisitedIndices) => [
        ...prevVisitedIndices,
        currentIndex + 1,

      ]);
    }
    setCurrentIndex(currentIndex + 1);

  };

  const handlepreviousClick = () => {
    if (!visitedIndices.includes(currentIndex - 1)) {
      setNotVisited(notVisitedd - 1);
      setVisitedIndices((prevVisitedIndices) => [
        ...prevVisitedIndices,
        currentIndex - 1,
      ]);
    }
    setCurrentIndex(currentIndex - 1);
  };
  const handleClearClick = () => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [currentIndex]: null,
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        setFinished(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const goToquiz = () => {
    finishQuiz()
    // dispatch(resetQuizState()); // reset the quiz state
    // dispatch(setStep(1));
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setTimeout(() => {
      dispatch(setStep(3));
    }, 3000);
    

  };

  const submitAnswertoAPi = async () => {
    const selectedOptionIndex = selectedOptions[currentIndex];
    const currentQuestion = quiz.data.questions[currentIndex];
    const answer = currentQuestion.options[selectedOptionIndex];
    console.log(answer);
    const questionId = quiz.data.questions[currentIndex]._id;
    
  
    const response = await submitAnswer(conductQuiz, questionId, token, answer);
    if (response && response.data && response.data.success) {
      if (response.data.success) {
        console.log("Answer submitted successfully!");
      } else {
        console.error("Error submitting answer:", response.error);
      }
    } 
  };



  const finishQuiz=async()=>{
    const response = await endQuiz(conductQuiz,token);
    if (response && response.data && response.data.success) {
      if (response.data.success) {
        console.log("Answer submitted successfully!");
        dispatch(setScore(response.data.data.score))
        console.log("score",response.data.data.score)
        
      } else {
        console.error("Error submitting answer:", response.error);
      }
    } 
    
  }


  // function disableRightClick() {
  //   document.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //   }, false);
  // }
  
  // disableRightClick();

  // useEffect(() => {
  //   document.addEventListener("fullscreenchange", handleFullScreenChange);
  //   return () => {
  //     document.removeEventListener("fullscreenchange", handleFullScreenChange);
  //   };
  // }, []);

  // const handleFullScreenChange = () => {
  //   if (!document.fullscreenElement) {
  //     let alertInterval;
  //     alertInterval = setInterval(() => {
  //       alert("Please enter full screen mode to continue the quiz.");
  //     }, 6000);

  //     document.addEventListener("fullscreenchange", () => {
  //       clearInterval(alertInterval);
  //     });

  //     // Add an event listener to the alert box
  //     window.addEventListener("alertboxclick", () => {
  //       // Request full screen mode again
  //       document.body.requestFullscreen();
  //     });
  //   }
  // };

  return (
    <div className="h-full w-full bg-[#F5F6FA]">
      <nav className="h-[70px] px-4 w-full bg-[#4880FF] flex items-center justify-between ">
        <div className="flex gap-3 items-center">
          <img
            src={user.image}
            alt={user.firstName}
            className="h-[50px] rounded-full"
          />
          <h1 className="text-white font-semibold">
            {user.firstName} {user.lastName}
          </h1>
        </div>
        <p className="font-bold text-2xl text-white">
          @ {quiz?.data?.testName}
        </p>
        <div className="flex gap-3 items-center">
          <div className="text-white">
            <p className="text-sm ">Time Remaing</p>
            <p className=" bg-blue-300  font-bold text-center py-2 h-fit rounded-lg mt-1">
              {formatTime(timeRemaining)}
            </p>
          </div>
          {finished ? (
            <button className=" bg-pink-300 font-bold py-[10px] px-4 h-fit text-white rounded-3xl">
              Time Expired
            </button>
          ) : (
            <button
              onClick={goToquiz}
              className=" bg-caribbeangreen-300 h-fit font-bold py-2 px-4 text-white rounded-3xl"
            >
              Finish
            </button>
          )}
        </div>
      </nav>
      <div className={` ${timeRemaining < 300 ? "block" : "hidden"}`}>
        <Alert variant="filled" severity="warning">
          Only {formatTime(timeRemaining)} is left Please Finish test on time
        </Alert>
      </div>

      <div className="flex ">
        <div className="w-[75%]">
          <div className="bg-white flex py-2 justify-between pl-4 gap-2 items-center text-xl   ">
            <div className="flex items-center  gap-3">
              <p>Questions </p>
              <p className="bg-[#4880FF] px-2 py-1 text-white font-bold rounded-xl ">
                {currentIndex + 1}
                {" / "}
                {quiz?.data?.questions.length}
              </p>
            </div>
            <div className="bg-[#4880FF] px-4 py-2 rounded-lg text-white h-full w-1/2  flex justify-end">
              <p>
                Marking Schema{" "}
                <span className="bg-white text-md-end text-black p-2 rounded-xl ">
                  +1
                </span>{" "}
                <span className="bg-white text-black p-2 px-3 rounded-xl " span>
                  0
                </span>
              </p>
            </div>
          </div>
          <div className="px-4 py-3 bg-white m-4 rounded-xl">
            {quiz?.data?.questions.map((question, index) => {
              if (index === currentIndex) {
                return (
                  <div key={index}>
                    <p
                      className="text-lg px-4 py-3 font-semibold w-[95%] bg-white rounded-2xl"
                      style={{ userSelect: "none" }}
                    >
                      {question.questionText}
                    </p>
                    <div className="radio-input m-4 rounded-xl">
                      {question.options.map((option, optionIndex) => (
                        <label className="label" key={optionIndex}>
                          <input
                            value={optionIndex} // or option._id if you have a unique id for each option
                            name="value-radio"
                            id={option._id} // or a unique id for each option
                            type="radio"
                            checked={selectedOptions[index] === optionIndex}
                            onChange={() =>
                              handleOptionSelect(index, optionIndex)
                            }
                          />
                          <p className="text">{option}</p>
                          {/* {`${String.fromCharCode(65 + optionIndex)} ${option}`} */}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="flex items-center px-4  justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleClearClick}
                className="bg-[#267111] text-white text-center p-2 rounded-xl hover:scale-90"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  handleMarkAsReview(currentIndex);
                  handleNextClick();
                }}
                disabled={currentIndex === quiz?.data?.questions.length - 1}
                className={`bg-[#2676c2] text-white text-center p-2 rounded-xl hover:scale-90 ${
                  currentIndex === quiz?.data?.questions.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : reviewedIndices[currentIndex]
                    ? "block"
                    : ""
                }`}
              >
                {reviewedIndices[currentIndex]
                  ? "Remove Marked as Review"
                  : "Mark As review and next"}
              </button>
            </div>
            <div className="flex items-center ml-4 px-4 gap-2">
              <button
                onClick={handlepreviousClick}
                disabled={currentIndex === 0}
                className={`bg-[#ff76e1] text-white text-center p-2 rounded-xl hover:scale-90 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                disabled={currentIndex === quiz?.data?.questions.length - 1}
                className={`bg-[#2fc837] text-white text-center p-2 rounded-xl hover:scale-90 ${
                  currentIndex === quiz?.data?.questions.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="w-[30%] p-4 bg-white h-screen">
          <div className="p-2 flex flex-wrap gap-3 border-2 justify-between border-richblack-300 py-4 border-dotted w-full h-auto">
            <p className="text-richblack-300">
              Not visited{" "}
              <span className=" ml-2 shadow-md shadow-richblue-600 p-2 px-3 text-richblack-500 font-bold text-xl  bg-richblue-5 rounded-full">
                {quiz?.data?.questions.length - visitedIndices.length}
              </span>{" "}
            </p>
            <p className="text-richblack-300">
              Not Answered{" "}
              <span className=" ml-2 shadow-md shadow-pink-600 p-2 px-3 text-richblack-5 font-bold text-xl  bg-pink-200 rounded-xl">
                {notVisitedd}
              </span>{" "}
            </p>
            <p className=" flex items-center text-richblack-300">
              Marked for <br /> Reviewed{" "}
              <span
                style={{
                  clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0% 100%)",
                }}
                className="  ml-2 shadow-md shadow-blue-400 p-2 px-3 text-richblack-5 font-bold text-xl  bg-blue-200"
              >
                {/* {Object.values(reviewedIndices).map((value) => (
                  <p key={value}>{value}</p>
                ))}{" "} */}
                {reviewedIndices.length}
              </span>
            </p>
            <p className=" flex items-center text-richblack-300">
              Answered{" "}
              <span
                style={{
                  clipPath:
                    " polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                }}
                className="  ml-2 shadow-md  shadow-caribbeangreen-100 p-2 px-3 text-richblack-5 font-bold text-xl bg-caribbeangreen-300 h-fit"
              >
                {answeredIndices.length}
                {/* {Object.values(visitedIndices).map((value) => (
                  <p key={value}>{value}</p>
                ))}{" "} */}
              </span>{" "}
            </p>
          </div>
          <div className="px-4 py-3 bg-white m-4 rounded-xl">
            <ul className="flex gap-3 mb-4">
              <li
                className={`${
                  activeTab === "question"
                    ? "bg-[#4880FF] text-white"
                    : "text-richblack-300"
                } transition-all duration-700 ease-in-out py-2 px-4 rounded-lg cursor-pointer`}
                onClick={() => handleTabChange("question")}
              >
                Question
              </li>
              <li
                className={`${
                  activeTab === "instruction"
                    ? "bg-[#4880FF] text-white"
                    : "text-richblack-300"
                } py-2 transition-all duration-700 ease-in-out px-4 rounded-lg cursor-pointer`}
                onClick={() => handleTabChange("instruction")}
              >
                Instruction
              </li>
            </ul>
            {activeTab === "question" ? (
              <div className="flex items-center px-4 H-[400px] flex-wrap gap-3 overflow-y-auto rounded-2xl py-2 border-2 justify-between border-richblack-300  w-full h-auto">
                {quiz?.data.questions.map((question, index) => (
                  <p
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    key={index}
                    className={`text-richblack-500 w-10 cursor-pointer border text-center rounded-xl py-2 shadow-md ${
                      currentIndex === index
                        ? "clip-path bg-caribbeangreen-300 rounded-none font-bold text-white "
                        : reviewedIndices[index]
                        ? "clip-path-2 bg-blue-400 text-white "
                        : answeredIndices[index]
                        ? "clip-path-3 bg-caribbeangreen-200 text-white "
                        : ""
                    } `}
                  >
                    {index + 1}
                  </p>
                ))}
              </div>
            ) : (
              <div>
                {quiz?.data?.instructions.map((link) => {
                  return (
                    <ol className="px-4 list-disc" key={link}>
                      <li>{link}</li>
                    </ol>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttemptQuiz;
