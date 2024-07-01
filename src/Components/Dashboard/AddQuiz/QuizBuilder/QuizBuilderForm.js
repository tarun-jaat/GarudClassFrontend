import React, { useState } from "react";
import './QuizBuilder.css'
import { useForm } from "react-hook-form"
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"
import { setEditQuiz, setQuiz, setStep } from "../../../../Slices/QuizSlice"
import { addQuestionDetails } from "../../../../Services/Operations/QuizApi";
import toast from "react-hot-toast";

export default function QuizBuilderForm() {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const quiz = useSelector((state) => state.quiz);
  const [loading, setLoading] = useState(false)

  const { token } = useSelector((state) => state.auth)

  console.log(quiz?.quiz._id)
  const handleCreateQuestion = async () => {
    const newQuestion = {
      text: questionText,
      options: options,
      correctAnswer: correctAnswer,
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setShowOptions(false);
    // Collect quiz ID from the quiz context
    const quizId = quiz?.quiz._id;

    // Create a new question object with the required data
    const questionData = { 
      questionText: newQuestion.text,
      options: newQuestion.options,
      answer: newQuestion.correctAnswer,
      marks: 1, // default marks, you can adjust this
    };

    // Call the addQuestionDetails API
    try {
      const response = await addQuestionDetails(quizId, questionData,token);
      console.log(response);
      toast.success("Question Added")
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch()

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm()

  const handleAddQuestionText = () => {
    setShowOptions(true);
  };

  const handleOptionChange = (index, value) => {
    setOptions(
      options.map((option, i) => {
        if (i === index) {
          return value;
        }
        return option;
      })
    );
  };

  const handleCorrectAnswerChange = (value) => {
    setCorrectAnswer(value);
  };

  const goBack = () => {
    dispatch(setStep(1))
    dispatch(setEditQuiz(true))
  }

  const goToNext = async () => {
    
  
    dispatch(setStep(3))
dispatch(setEditQuiz(true))

  };

  return (
    <div className="w-full mx-4">
      <div className="flex gap-2 items-center">
        <div className="form w-full">
          <input
            className="inputchip w-full py-3 px-3 rounded-lg"
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter question text"
          />
          <span className="input-border"></span>
        </div>
        <button className="text-white border py-3 px-2 rounded-xl bg-blue-50" onClick={handleAddQuestionText}>Add question text</button>
      </div>
      {showOptions && (
        <div className="flex flex-col items-center mt-4 text-richblack-700 gap-3 rounded-lg">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <input
                className="text-richblack-700 rounded-lg w-3/4 py-3 ml-5 mr-4 px-2 bg-white"
                key={index}
                type="text"
                value={options[index] || ""}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
            ))}
          <select
            className="p-3 rounded-xl mr-4"
            value={correctAnswer}
            placeholder="please select correct option"
            onChange={(e) => handleCorrectAnswerChange(e.target.value)}
          >
            <option value="">Select correct answer</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
  onClick={() => handleCreateQuestion(quiz)}
  className="bg-blue-200 px-3 rounded-lg hover:scale-90 py-2 text-white font-bold w-fit"
>
  Create question
</button>        </div>
      )}
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>
                S no.
              </th>
              <th>
                Question
              </th>
              <th>
                Option-1
              </th>
              <th>
                Option-2
              </th>
              <th>
                Option-3
              </th>
              <th>
                Option-4
              </th>
              <th>
                Correct Answer
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="border">
            {
              questions.map((quiz, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{quiz.text}</td>
                  {quiz.options.map((option, i) => (
                    <td key={i}>{option}</td>
                  ))}
                  <td>{quiz.correctAnswer}</td>
                  <td className="">
                    <button
                      // disabled={loading}
                      // onClick={() => handleEditClick(student)}
                      title="edit"
                      className="p-2 mr-1 transition-all font-extrabold bg-opacity-50 text-white bg-caribbeangreen-100  rounded-full duration-200 hover:scale-95"
                    >
                      <FiEdit2 size={20} />
                    </button>
                    <button
                      // disabled={loading}
                      // onClick={()=> deleteUser(student._id)}
                      title="delete"
                      className="p-2 h-fit text-white bg-[#ff0000] rounded-full   transition-all duration-200 hover:scale-90"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-x-3">
        <button
          onClick={goBack}
          className={`flex border-2 border-[#4880FF] hover:sc cursor-pointer items-center gap-x-2 rounded-md bg-white py-[8px] px-[20px] font-semibold text-[#4880FF]`}
        >
          Back
        </button>
        <button
            onClick={goToNext}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-[#4880ff] py-[8px] px-[20px] hover:scale-95 font-semibold text-richblack-5`}
          >
            Continue
          </button>
      </div>
    </div>
  );
}