import { combineReducers } from "redux";

import recipes from "./recipes";
import utils from "./utils";

export default combineReducers({
  recipes,
  utils,
});
