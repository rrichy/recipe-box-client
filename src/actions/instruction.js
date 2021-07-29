import { UPDATE_INSTRUCTION, EMPTY_INSTRUCTION } from "./actionTypes";

export function updateInstruction(recipe) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_INSTRUCTION,
      payload: recipe,
    });
  };
}

export function emptyInstruction() {
  return (dispatch) => {
    dispatch({
      type: EMPTY_INSTRUCTION,
      payload: {},
    });
  };
}
