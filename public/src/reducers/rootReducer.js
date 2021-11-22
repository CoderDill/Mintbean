import { combineReducers } from "redux";
import userReducer from "./userReducer";
import coloringReducer from './coloringReducer'
const rootReducer = combineReducers({
    userReducer, 
    coloringReducer
})

export default rootReducer; 