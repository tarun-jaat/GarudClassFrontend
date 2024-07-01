import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { resetCourseState, setStep } from '../../../../Slices/courseSlice';
import { resetQuizState,setStep } from '../../../../Slices/QuizSlice';
import { QUIZ_STATUS } from '../../../../Utils/Constants';
import { updateQuizDetails } from '../../../../Services/Operations/QuizApi';

export default function PublishQuiz(){
  const { register, handleSubmit, setValue,getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quiz = useSelector((state) => state.quiz);
  const { token } = useSelector((state) => state.auth)


  useEffect(() => {
    if (quiz?.status === QUIZ_STATUS.PUBLISHED) {
      setValue("public", true)
    }
  }, [])

  const goToquiz = () => {
    dispatch(resetQuizState()); // reset the quiz state
    dispatch(setStep(1))
    navigate("/dashboard/quiz")
  }

  const handleQuizPublish = async () => {
    const quizId=quiz.quiz._id

    if (
      (quiz?.status === QUIZ_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (quiz?.status === QUIZ_STATUS.DRAFT && getValues("public") === false)
    ) {
      // form has not been updated
      // no need to make api call
      return
    }
    const formData = new FormData()
    formData.append("quiz", quiz?.quiz._id)
    const quizStatus = getValues("public")
      ? QUIZ_STATUS.PUBLISHED
      :QUIZ_STATUS.DRAFT
    formData.append("status", quizStatus)
    setLoading(true)
    const result = await updateQuizDetails(formData,quizId,token)
    if (result) {
      goToquiz()
    }
    setLoading(false)
  
  };

  const goBack = () => {
    dispatch(setStep(2));
  };

  const onSubmit = (data) => {
    // console.log(data)
    handleQuizPublish()
  }

  

  return (
    <div className="rounded-md border-[1px] bg-[#4880ff] text-richblack-5 p-6">
      <p className="text-2xl font-semibold text-richblack-5">
        Publish Settings
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox */}
        <div className="my-6 mb-8">
          <label htmlFor="public" className="inline-flex items-center text-lg">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-5 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
            />
            <span className="ml-2 text-richblack-5">
              Make this quiz as public
            </span>
          </label>
        </div>

        {/* Next Prev Button */}
        <div className="ml-auto flex max-w-max items-center gap-x-4">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-[#4880ff]"
          >
            Back
          </button>
          <button
            disabled={loading}
            type="submit"
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-[#4880ff]"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

