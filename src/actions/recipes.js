import * as api from "../api/index";
import {
  FETCH_ALL,
  CREATE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  LOADING,
  SUCCESS,
} from "./actionTypes";

export function getRecipes() {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchRecipes();

      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postRecipe(recipe) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const { data } = await api.postRecipe(recipe);
      dispatch({
        type: CREATE,
        payload: data,
      });
      dispatch({ type: SUCCESS });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateRecipe(id, recipe) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const { data } = await api.updateRecipe(id, recipe);
      dispatch({
        type: UPDATE_RECIPE,
        payload: { id, recipe: data },
      });
      dispatch({ type: SUCCESS });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRecipe(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      await api.deleteRecipe(id);
      dispatch({
        type: DELETE_RECIPE,
        payload: { id },
      });
      dispatch({ type: SUCCESS });
    } catch (error) {
      console.log(error);
    }
  };
}
