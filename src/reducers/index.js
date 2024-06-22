import { combineReducers } from "redux";
import authReducer from '../Slices/AuthSlice'
import userFeeDataSlice from "../Slices/userFeeDataSlice";
import ProfileReducer from '../Slices/ProfileSlice'
import cartReducer from "../Slices/cartSlice";
import courseReducer from "../Slices/courseSlice";
import viewCourseReducer from "../Slices/viewCourse";
const rootReducer=combineReducers({
    profile:ProfileReducer,
    auth:authReducer,
    userFeeData:userFeeDataSlice,
    course: courseReducer,
    cart: cartReducer,
    viewCourse: viewCourseReducer,
})

export default rootReducer;