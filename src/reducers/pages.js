import { CHANGE_PAGE } from "../actions/actionTypes";

export default (page = "main", action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload;
    default:
      return page;
  }
};
