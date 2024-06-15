import { combineReducers } from "redux";
import authReducer from '../Slices/AuthSlice'
import userFeeDataSlice from "../Slices/userFeeDataSlice";
import ProfileReducer from '../Slices/ProfileSlice'
const rootReducer=combineReducers({
    profile:ProfileReducer,
    auth:authReducer,
    userFeeData:userFeeDataSlice
})

export default rootReducer;