const BASE_URL = process.env.REACT_APP_BASE_URL;


export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }
export const studentFeeDataEndpoints={
    GET_STUDENT_FEE_DATA: BASE_URL + "/userdata/student-fee-info",
    UPDATE_STUDENT_FEE_DATA:BASE_URL+ "/userdata/addData/:id",
    ADD_STUDENT_INTO_DATABASE:BASE_URL+ "/userdata/adddata"
} 

export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  }