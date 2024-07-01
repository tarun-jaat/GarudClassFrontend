import React,{useState} from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { setQuiz, setStep } from "../../../Slices/QuizSlice";
import { Button } from "@mui/material";
import {useNavigate } from "react-router-dom";
import { startQuiz } from "../../../Services/Operations/QuizApi";
import { setConductQuiz } from "../../../Slices/QuizSlice";
function Aggrement() {
  const { user } = useSelector((state) => state.profile);
  const {quiz} =useSelector((state)=>state.quiz);
  const { token } = useSelector((state) => state.auth)

  const [isChecked, setIsChecked] = useState(false); 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleNextClick = () => {
    if (isChecked) {
      // navigate("/attempt-quiz");
      conductQuiz()
      dispatch(setStep(2))
      dispatch(setQuiz(quiz))
      requestFullscreen(); 
    }
  };
  console.log(quiz)
 
  const conductQuiz =async ()=>{
    const quizId=quiz?.data?._id
    try{
      const response = await startQuiz(quizId,token)
      console.log("conductQuizID")
      console.log("test")
      dispatch(setConductQuiz(response?.data?._id))
      console.log(response?.data?._id)
      console.log(response)
      }catch(err){
        console.log(err)
      }

  }

  
  

  const requestFullscreen = () => {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    } else if (document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
    }
  };
  
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="bg-richblack-5 h-fit  w-full">
      <nav className="h-[70px] px-4 w-full bg-[#4880FF] flex items-center  gap-[30%] ">
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
            {"@"}
        {quiz?.data?.testName}
        </p>
      </nav>
      <div className="flex px-8 mt-5">
        <div className="w-[70%]">
          <ol className="border h-4/6 overflow-y-scroll p-4 flex flex-col gap-3 rounded-xl list-disc bg-white">
            <p className="text-black text-[17px] font-semibold">
              General Instructions
            </p>
            <li>Total duration of examination is {quiz?.data?.duration} minutes.</li>
            <li>
              Your clock will be set at the server. The countdown timer at the
              top right corner of screen will display the remaining time
              available for you to complete the examination. When the timer
              reaches zero, the examination will end by itself. You need not
              terminate the examination or submit your paper
            </li>
            <li>
              You are not allowed to use any calculator and any other computing
              machine.
            </li>
            <li>
              Click on the question number in the Question Palette to go to that
              question directly.
            </li>
            <li>
              Select an answer for a multiple choice type question by clicking
              on the bubble placed before the 4 choices in the form of radio
              buttons (o).
            </li>
            <li>
              Click on <strong> Save & Next </strong> to save your answer for
              the current question and then go to the next question.
            </li>
            <li>
              You may click on<strong> Mark for Review & Next</strong> to save
              your answer for the current question and also mark it for review,
              and then go to the next question.
            </li>
            <p className="text-pink-100">
              <strong className="text-richblack-500"> Caution:</strong> Note
              that your answer for the current question will not be saved, if
              you navigate to another question directly by clicking on a
              question number without saving the answer to the previous
              question.
            </p>
            <li>
              To deselect your chosen answer, click on the bubble of the chosen
              option again or click on the Clear Response button.
            </li>
            <p>
              <strong> Declaration by the candidate:</strong>
              <br />
              "I have read and understood all the above instructions. I have
              also read and understood clearly the instructions given on the
              admit card and shall follow the same. I also understand that in
              case I am found to violate any of these instructions, my
              candidature is liable to be cancelled. I also confirm that at the
              start of the examination all the computer hardware allotted to me
              are in proper working condition. I will not disclose, publish,
              reproduce, transmit, store, or facilitate transmission and storage
              of the contents of the CAT or any information therein in whole or
              part thereof in any form or by any means, verbal or written,
              electronically or mechanically for any purpose. I am aware that
              this shall be in violation of the Indian Contract Act, 1872 and/or
              the Copyright Act, 1957 and/or the Information Technology Act,
              2000. I am aware that such actions and/or abetment thereof as
              aforementioned may constitute a cognizable offence punishable with
              imprisonment for a term up to three years and fine up to Rs. Two
              Lakhs. I agree to this Non-Disclosure Agreement."
            </p>
          </ol>
          <div className="mt-4">
            <MDBCheckbox
              name="flexCheck"
              className="text-pink-200"
              value=""
              onChange={handleCheckboxChange}

              id="flexCheckDefault"
              label="I have read and understood the instructions.All Computer Hardwares allotted to me are in proper working condition.I agree that in case of not adhering to the instructions, I will be disqualified from taking the exam."
            />
            <div className="flex gap-2 float-end">
            <Button 
                   variant="outlined">Previous</Button>
            <Button 
            disabled={!isChecked}
            onClick={handleNextClick}
                   variant="contained">Next</Button>
            
                   
            </div>

          </div>
        </div>

        <div className="flex flex-col w-[30%] items-center px-8 ">
          <img src={user.image} className="h-32 rounded-lg shadow-lg shadow-richblack-700" />
          <p className="text-2xl mt-4 font-semibold capitalize">{user.firstName}</p>
        </div>

      </div>

    
    </div>
  );
}

export default Aggrement;
