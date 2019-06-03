import { combineReducers } from "redux";
import courseReducer from "./courseRerducer";

const rootReducer = combineReducers({
  courses: courseReducer
});

export default rootReducer;
