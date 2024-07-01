import { toast } from "react-hot-toast";
import { quizEndpoints } from "../api";
import { apiConnector } from "../apiConnecter";
// import { setConductQuiz } from "../../Slices/QuizSlice";
// import useQuizDispatch from "../../Hooks/useQuizDispatch";

const {
  GET_QUIZ_DETAILS_API,
  ADD_QUESTIONS_TO_QUIZ,
  DELETE_QUESTION_DETAILS_API,
  UPDATE_QUESTION_DETAILS_API,
  GET_ALL_QUIZ_API,
  CREATE_QUIZ_API,
  UPDATE_QUIZ_API,
  START_QUIZ_API,
  SUBMIT_ANSWER_API
} = quizEndpoints;

export const addQuizDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_QUIZ_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE quiz API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add quiz Details");
    }
    toast.success("quiz Details Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE quiz API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllQuizzes = async () => {
  const toastId = toast.loading("loading please Wait...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_QUIZ_API);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch quiz Categories");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_Quiz_API API ERROR............", error);
    toast.error(error.message);
  }

  toast.dismiss(toastId);
  return result;
};

export const fetchquizDetails = async (quizId, token) => {
  try {
    const response = await fetch(`${GET_QUIZ_DETAILS_API}/${quizId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz details:", error);
    return null;
  }
};

export const addQuestionDetails = async (quizId, questionData, token) => {
  console.log(quizId)
  try {
    const response = await fetch(`${ADD_QUESTIONS_TO_QUIZ}/${quizId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(questionData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz details:", error);
    return null;
  }
};
export const updateQuestionDetails = async (quizId, token, data) => {
  try {
    const response = await fetch(`${UPDATE_QUESTION_DETAILS_API}/${quizId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz details:", error);
    return null;
  }
};
export const deleteQuestionDetails = async (quizId, token) => {
  try {
    const response = await fetch(`${DELETE_QUESTION_DETAILS_API}/${quizId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz details:", error);
    return null;
  }
};


export const updateQuizDetails = async (data,quizId,token) => {

  let result = null;
  
  const toastId = toast.loading("Updating quiz details...");
  try {
    const response = await apiConnector("POST", `${UPDATE_QUIZ_API}/${quizId}`, data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    console.log("UPDATE quiz API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update quiz Details");
    }
    toast.success("quiz Details Updated Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE quiz API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};




export const startQuiz = async (quizId,token) => {
  let result = null;
  const toastId = toast.loading("Loading...");


  try {
    const response = await apiConnector("POST", `${START_QUIZ_API}/${quizId}/start`, quizId, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
      
    });
    console.log("start quiz API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not start quiz");
    }
    toast.success("quiz started Successfully");
    result=response?.data

  } catch (error) {
    console.log("quiz  start API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  console.log("this is last",result)
  return result;
};

export const submitAnswer = async (conductQuiz, questionId, token, answer) => {
  let result = null;
  console.log("answer",answer)
  const toastId = toast.loading("Loading...");
  
  try {
    const answerData = { answer: answer };

  
    const response = await apiConnector(
      "POST", 
      `${SUBMIT_ANSWER_API}/${conductQuiz}/questions/${questionId}/submit`,
      answerData , 

      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("Submit answer API response:", response);

    if (!response || !response.data || !response.data.success) {
      throw new Error("Failed to submit answer");
    }

    toast.success("Answer submitted successfully");
    result = response?.data?.data;
  } catch (error) {
    console.error("Submit answer API error:", error);
    toast.error(error.message || "Failed to submit answer");
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};


export const endQuiz = async (conductQuiz, token) => {
  try {
    const response = await apiConnector(
      "POST", 
      `${SUBMIT_ANSWER_API}/${conductQuiz}/end`,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
    toast.success("Quiz Finish Successfully successfully");
    console.log("End quiz API response:", response);
    return response.data;

  } catch (error) {
    console.error("END API error:", error);
    throw error;
  }
};