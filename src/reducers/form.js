import { EDIT_RECIPE } from "../actions/actionTypes";

export default (id = null, action) => {
  switch (action.type) {
    case EDIT_RECIPE:
      return action.payload;
    default:
      return id;
  }
};
