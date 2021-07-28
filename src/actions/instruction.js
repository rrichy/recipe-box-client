import { UPDATE_INSTRUCTION } from "./actionTypes";

export function updateInstruction(recipe) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_INSTRUCTION,
      payload: recipe,
    });
  };
}
