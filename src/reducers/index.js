import { combineReducers } from "redux";

import recipes from "./recipes";
import utils from "./utils";
import status from "./status";

export default combineReducers({
  recipes,
  utils,
  status,
});
