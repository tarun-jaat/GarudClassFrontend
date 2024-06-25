import { createSlice } from "@reduxjs/toolkit"

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    step: 1,
    questions: [],
    quiz:null,
    editQuiz:false,
    currentQuestion: 0,
    score: 0,
    isFinished: false,
  },
  reducers: {
    setStep: (state, action) => {
        state.step = action.payload
      },
      setQuiz: (state, action) => {
        state.course = action.payload
      },
      setEditQuiz: (state, action) => {
        state.editCourse = action.payload
      },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    nextQuestion: (state) => {
      state.currentQuestion++;
    },
    answerQuestion: (state, action) => {
      if (action.payload.isCorrect) {
        state.score++;
      }
    },
    finishQuiz: (state) => {
      state.isFinished = true;
    },
  },
});

export const {setStep,setQuiz, setEditQuiz,addQuestion, nextQuestion, answerQuestion, finishQuiz } = quizSlice.actions;
export default quizSlice.reducer;