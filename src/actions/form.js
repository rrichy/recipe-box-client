import { EDIT_RECIPE } from "./actionTypes";

export function editRecipe(recipe) {
  return (dispatch) => {
    dispatch({
      type: EDIT_RECIPE,
      payload: recipe,
    });
  };
}
