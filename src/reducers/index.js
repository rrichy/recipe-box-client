import { combineReducers } from "redux";

import box from "./box";
import instruction from "./instruction";

export default combineReducers({
  box,
  instruction,
});
