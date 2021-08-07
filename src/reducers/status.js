import { LOADING, SUCCESS } from "../actions/actionTypes";

export default (status = SUCCESS, action) => {
  switch (action.type) {
    case SUCCESS:
    case LOADING:
      return action.type;
    default:
      return status;
  }
};
