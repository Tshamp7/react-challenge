import { combineReducers } from "redux";
import educationListReducer from "./eduListReducer";
import selectedReducer from "./selectedReducer";

export default combineReducers({
  selectedReducer,
  educationListReducer,
});
