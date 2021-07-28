import { ASSIGN_TOP } from "./actionTypes";

export function topRecipes(recipes) {
  return (dispatch) => {
    dispatch({ type: ASSIGN_TOP, payload: recipes });
  };
}
