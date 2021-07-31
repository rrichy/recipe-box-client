import { EDIT_RECIPE } from "../actions/actionTypes";

export default (
  data = {
    title: "",
    description: "",
    image: "",
    creator: "",
    ingredients: [""],
    directions: [""],
  },
  action
) => {
  switch (action.type) {
    case EDIT_RECIPE:
      return action.payload;
    default:
      return data;
  }
};
