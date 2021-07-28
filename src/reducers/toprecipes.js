import { ASSIGN_TOP } from "../actions/actionTypes";

export default (top = [], action) => {
  switch (action.type) {
    case ASSIGN_TOP:
      return action.payload;
    default:
      return top;
  }
};
