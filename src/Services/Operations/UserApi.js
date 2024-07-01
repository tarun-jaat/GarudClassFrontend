import { toast } from 'react-hot-toast';
import { apiConnector } from '../apiConnecter';
import { studentFeeDataEndpoints } from '../api';

const {
  GET_STUDENT_FEE_DATA,
//   UPDATE_STUDENT_FEE_DATA,
//   ADD_STUDENT_INTO_DATABASE,
} = studentFeeDataEndpoints;

export const getAllUsersData = async () => {
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