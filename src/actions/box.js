import * as api from "../api/index";

export function getBox() {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchBox();

      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postRecipe(recipe) {
  return async (dispatch) => {
    try {
      const { data } = await api.postRecipe(recipe);
      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
