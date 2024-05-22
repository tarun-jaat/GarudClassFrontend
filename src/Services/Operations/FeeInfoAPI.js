import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiConnecter';
import { studentFeeDataEndpoints } from '../api';

const {
  GET_STUDENT_FEE_DATA,
  UPDATE_STUDENT_FEE_DATA,
  ADD_STUDENT_INTO_DATABASE,
} = studentFeeDataEndpoints;

export const getAllUserFeeData = async () => {
  const toastId = toast.loading('Loading...');
  try {
    const response = await apiConnector('GET', GET_STUDENT_FEE_DATA);
    if (!response ||!response.data ||!response.data.data) {
      throw new Error('Could Not Fetch the User Data');
    }
    // console.log(response) 
    return response.data;
  } catch (error) {
    console.log('GET_STUDENT_FEE_DATA API ERROR............', error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
};

export const updateStudentFeeData = async (studentId, updatedData) => {
  try {
    const response = await fetch(`/api/update-student-fee-data/${studentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating student fee data:", error);
    throw error;
  }
};

export const addStudentIntoDatabase = async (data) => {
  let result=null
  if (!data) {
    throw new Error('Invalid data provided for add');
  }
  const toastId = toast.loading('Adding...');
  try {
    const response = await apiConnector('POST', ADD_STUDENT_INTO_DATABASE, data,   );
    if (!response ||!response.data ||!response.data.success) {
      throw new Error('Could Not Add Student Into Database');
    }
    toast.success('Student added into database successfully');
    result=response?.data?.data
  } catch (error) {
    console.log('ADD_STUDENT_INTO_DATABASE API ERROR............', error);
    toast.error(error.message);
    return { data: null };
  } finally {
    toast.dismiss(toastId);
  }
  return result;
};