 import {imageReducer} from "./imageReducer";
 import { combineReducers } from "redux";

 const reducers=combineReducers({
     allImages:imageReducer
 })

 export default reducers;