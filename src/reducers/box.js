import {
  FETCH_ALL,
  CREATE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from "../actions/actionTypes";

export default (box = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...box, action.payload];
    case UPDATE_RECIPE:
      return box.map((r) =>
        r._id === action.payload.id ? action.payload.recipe : r
      );
    case DELETE_RECIPE:
      return box.filter((r) => r._id !== action.payload.id);
    default:
      return box;
  }
};
