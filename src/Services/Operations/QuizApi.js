import { toast } from "react-hot-toast";
import { quizEndpoints } from "../api";
import { apiConnector } from "../apiConnecter";

const {
  GET_QUIZ_DETAILS_API,
  ADD_QUESTIONS_TO_QUIZ,
  GET_ALL_QUIZ_API,
  CREATE_QUIZ_API,
} = quizEndpoints;


export const addQuizDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_QUIZ_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE quiz API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add quiz Details")
    }
    toast.success("quiz Details Added Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE quiz API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

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


export const fetchquizDetails= async (quizId, token) =>{
  try {
    const response = await fetch(`${GET_QUIZ_DETAILS_API}/${quizId}`, {
      method: 'GET',
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
    console.error('Error fetching quiz details:', error);
    return null;
  }
}