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


  export const courseEndpoints = {
    GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
    COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
    EDIT_COURSE_API: BASE_URL + "/course/editCourse",
    COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
    CREATE_COURSE_API: BASE_URL + "/course/createCourse",
    CREATE_SECTION_API: BASE_URL + "/course/addSection",
    CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
    UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
    UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
    GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
    DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
    DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
    DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED:
      BASE_URL + "/course/getFullCourseDetails",
    LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
    CREATE_RATING_API: BASE_URL + "/course/createRating",
  }
  
  
// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_USER_ENROLLED_QUIZ_API: BASE_URL + "/profile/getEnrolledQuiz",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/getInstructorDashboardDetails",
}

export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}


export const quizEndpoints={
  CREATE_QUIZ_API:BASE_URL+"/quiz/createQuiz",
  GET_ALL_QUIZ_API:BASE_URL+"/quiz/getAllQuizzes",
  UPDATE_QUIZ_API:BASE_URL+"/quiz/updateQuiz",


  ADD_QUESTIONS_TO_QUIZ:BASE_URL+"/quiz/questions",
  GET_QUIZ_DETAILS_API:BASE_URL+"/quiz/find",



  DELETE_QUIZ_API:BASE_URL+"/quiz/deleteQuiz",
  GET_SINGLE_QUIZ_DETAILS_API:BASE_URL+"/quiz",
  SUBMIT_QUIZ_API:BASE_URL+"/quiz/submitQuiz",
  GET_QUIZ_RESULT_API:BASE_URL+"/quiz/getQuizResult",
  GET_QUIZ_PROGRESS_API:BASE_URL+"/quiz/getQuizProgress",

  
  START_QUIZ_API:BASE_URL+"/quiz/quizzes",
  SUBMIT_ANSWER_API:BASE_URL+"/quiz/conduct-quizzes",

}


export const batchEndpoints={
  CREATE_BATCH_API:BASE_URL+"/batch/createBatch",
  UPDATE_BATCH_DETAILS:BASE_URL+"/batch/updateBatchDetails",
  CREATE_BATCH_SUBJECT:BASE_URL+"/batch/createSubject",
  CREATE_SUBJECT_CHAPTER:BASE_URL+"/batch/subject/addChapter",
  CREATE_CHAPTER_TOPIC:BASE_URL+"/batch/subject/addTopic",
  GET_ALL_SUBJECTS:BASE_URL+"/batch/subject/getSubject",
  ADD_LECTURE_INTO_TOPIC:BASE_URL+"/batch/subject/addLecture",
  GET_ALL_INSTRUCTOR_BATCH_API: BASE_URL + "/batch/getInstructorBatches",
  GET_LECTURE_CONTENT_API:BASE_URL+"/batch/subject/getlectureContent",

  ADD_SECTION_INTO_SUBJECT_API:BASE_URL+'/batch/addSectionIntoSubject',

  GET_ALL_BATCH_API:BASE_URL+"/batch/getAllBatches",
  // GET_BATCH_DETAILS_API:BASE_URL+"/batch/find",
}