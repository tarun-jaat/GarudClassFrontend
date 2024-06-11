const BASE_URL = process.env.REACT_APP_BASE_URL;


export const endpoints = {
    LOGIN_API: BASE_URL + "/auth/login",
}

export const studentFeeDataEndpoints={
    GET_STUDENT_FEE_DATA: BASE_URL + "/userdata/student-fee-info",
    UPDATE_STUDENT_FEE_DATA:BASE_URL+ "/userdata/addData/:id",
    ADD_STUDENT_INTO_DATABASE:BASE_URL+ "/userdata/adddata"
} 

export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  }