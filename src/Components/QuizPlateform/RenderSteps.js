import React from "react";
import { useSelector } from "react-redux";
import Aggrement from "./Aggrement/Aggrement";
import AttemptQuiz from "./AttemptQuiz/AttemptQuiz";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.quiz);
//   switch (step) {
//     case 1:
//       return <Aggrement />;
//     case 2:
//       return <AttemptQuiz />;
//     default:
//       return <div>Something went wrong</div>;
//   }

return(
    <div>
        {step === 1 && <Aggrement />}
        {step === 2 && <AttemptQuiz />}

    </div>
    
)
};
export default RenderSteps;
