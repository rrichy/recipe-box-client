import * as api from "../api/index";
import { FETCH_ALL, CREATE, UPDATE_RECIPE, DELETE_RECIPE } from "./actionTypes";

export function getBox() {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchBox();

      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postRecipe(recipe) {
  return async (dispatch) => {
    try {
      const { data } = await api.postRecipe(recipe);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateRecipe(id, recipe) {
  return async (dispatch) => {
    try {
      const { data } = await api.updateRecipe(id, recipe);
      dispatch({
        type: UPDATE_RECIPE,
        payload: { id, recipe: data },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRecipe(id) {
  return async (dispatch) => {
    try {
      await api.deleteRecipe(id);
      dispatch({
        type: DELETE_RECIPE,
        payload: { id },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
