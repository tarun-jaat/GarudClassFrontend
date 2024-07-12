import { toast } from "react-hot-toast";

import { apiConnector } from "../apiConnecter";
import { batchEndpoints } from "../api";

const {
  CREATE_BATCH_API,
  GET_ALL_SUBJECTS,
  CREATE_BATCH_SUBJECT,
  CREATE_SUBJECT_CHAPTER,
  CREATE_CHAPTER_TOPIC,
  ADD_LECTURE_INTO_TOPIC,
  ADD_SECTION_INTO_SUBJECT_API,
  GET_ALL_INSTRUCTOR_BATCH_API,
  GET_LECTURE_CONTENT_API,
  UPDATE_BATCH_DETAILS,
  GET_ALL_BATCH_API,
  GET_FULL_BATCH_DETAILS_API,
} = batchEndpoints;

export const addBatchDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_BATCH_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE Batch API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Batch Details");
    }
    toast.success("Batch Details Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE Batch API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllSubjects = async (token, batchId) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  console.log(batchId, token);
  try {
    const response = await apiConnector(
      "POST",
      `${GET_ALL_SUBJECTS}/${batchId}`,
      batchId,
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("GET_ALL_SUBJECTS API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Subjects");
    }
    toast.success("Subjects Fetched Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_SUBJECTS API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createBatchSubjectChapter = async (token, data) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SUBJECT_CHAPTER, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE_BATCH_SUBJECT API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Batch Subject");
    }
    toast.success("Batch Subject Created Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE_BATCH_SUBJECT API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createBatchSubject = async (token, data) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_BATCH_SUBJECT, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE_BATCH_SUBJECT API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Batch Subject");
    }
    toast.success("Batch Subject Created Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE_BATCH_SUBJECT API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createChapterTopic = async (token, data) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_CHAPTER_TOPIC, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE_BATCH_SUBJECT API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Batch Subject");
    }
    toast.success("Batch Subject Created Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE_BATCH_SUBJECT API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", ADD_LECTURE_INTO_TOPIC, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CREATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture");
    }
    toast.success("Lecture Added");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const fetchInstructorCourses = async (token) => {
  let result = [];
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_BATCH_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("INSTRUCTOR COURSES API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// create a section
export const createSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      ADD_SECTION_INTO_SUBJECT_API,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("CREATE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Create Section");
    }
    toast.success("Course Section Created");
    result = response?.data?.populatedSection;
  } catch (error) {
    console.log("CREATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getLectureContent = async (chapterId, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      GET_LECTURE_CONTENT_API,
      chapterId,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("Get Lecture content API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not get Section");
    }
    toast.success("Section Data Retrived Successfully");
    result = response?.data?.lectureContent;
  } catch (error) {
    console.log("CREATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// edit the Batch details
export const editBatchDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", UPDATE_BATCH_DETAILS, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log("EDIT Batch API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update batch Details");
    }
    toast.success("Batch Details Updated Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("EDIT Batch API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllBatches = async () => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("GET", GET_ALL_BATCH_API);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Batch Categories");
    }
    // console.log(response)
    result = response?.data?.batches;
  } catch (error) {
    console.log("GET_ALL_Batch_API API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getFullBatchDetails = async (batchId, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "GET",
      `${GET_FULL_BATCH_DETAILS_API}/${batchId}`,batchId,
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("GET_BATCH_DETAILS_API API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Batch Details");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_BATCH_DETAILS_API API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
