import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserEnrolledQuiz } from "../../../Services/Operations/ProfileAPI";

export default function EnrolledQuiz() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate(); 
  

  const [enrolledQuiz, setEnrolledQuiz] = useState(null);
  const getEnrolledQuiz = async () => {
    try {
      const res = await getUserEnrolledQuiz(token);
      console.log(res)
      setEnrolledQuiz(res);
    } catch (error) {
      console.log("Could not fetch enrolled courses.");
    }
  };
  useEffect(() => {
    getEnrolledQuiz();
  }, []);
  console.log("enrolled",enrolledQuiz?.quizzes?.testName)

  return (
    <>
      {!enrolledQuiz ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledQuiz.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any quiz yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg
        :grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
        3xl:grid-cols-6 4xl:grid-cols-7 5xl
        :grid-cols-8 6xl:grid-cols-9 7xl:grid-cols
        -10 8xl:grid-cols-11 9xl:grid-cols-12
        "
        >
          {enrolledQuiz.map((quiz) => (
            <div className="bg-white rounded-lg shadow-lg" key={quiz.id}>
              <div className="flex flex-col items-center justify-center p-4">
                <img className="w-32" src={quiz?.quizzes?.thumbnailImage} alt={quiz.testName} />
                <div className="text-xl font-bold text-richblack-50">
                  {quiz.testName}
                </div>
                <div className="text-sm text-richblack-50">
                  {quiz.testDescription}
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    className="bg-richblack-50 text-white rounded-lg px-4 py-2
                            hover:bg-richblack-100"
                    onClick={() => navigate(`/quiz/${quiz.id}`)}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
