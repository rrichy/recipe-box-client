import { combineReducers } from "redux";

import box from "./box";
import page from "./pages";
import tooltip from "./tooltip";
import top from "./toprecipes";
import instruction from "./instruction";
import form from "./form";

export default combineReducers({
  box,
  page,
  form,
  tooltip,
  instruction,
  top,
});
