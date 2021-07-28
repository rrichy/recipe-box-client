import { combineReducers } from "redux";

import box from "./box";
import page from "./pages";
import tooltip from "./tooltip";
import top from "./toprecipes";
import instruction from "./instruction";

export default combineReducers({
  box,
  page,
  tooltip,
  instruction,
  top,
});
