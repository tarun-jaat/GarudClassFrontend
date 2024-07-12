import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuizState } from "../../../Slices/QuizSlice";
import { useNavigate } from "react-router-dom";

function ResultCard() {
  const navigate = useNavigate();
  const { quiz, score } = useSelector((state) => state.quiz);
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const handleFinishClick = () => {
    dispatch(resetQuizState());

    navigate("/dashboard"); 
  };

  return (
    <div className="mt-24">
      score:{score}
      <button onClick={handleFinishClick} className="bg-blue-100 px-4 py-2">
        finish
      </button>
    </div>
  );
}

export default ResultCard;
