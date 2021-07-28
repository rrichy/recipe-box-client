import { FETCH_ALL, CREATE } from "../actions/actionTypes";

export default (box = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...box, action.payload];
    default:
      return box;
  }
};
