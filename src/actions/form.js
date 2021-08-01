import { EDIT_RECIPE } from "./actionTypes";

export function editRecipe(id) {
  return (dispatch) => {
    dispatch({
      type: EDIT_RECIPE,
      payload: id,
    });
  };
}
