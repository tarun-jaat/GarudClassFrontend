import { combineReducers } from "redux";
import authReducer from '../Slices/AuthSlice'
import userFeeDataSlice from "../Slices/userFeeDataSlice";

const rootReducer=combineReducers({
    auth:authReducer,
    userFeeData:userFeeDataSlice
})

export default rootReducer;