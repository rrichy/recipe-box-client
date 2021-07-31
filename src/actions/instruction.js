import {
  SHOW_INSTRUCTION,
  HIDE_INSTRUCTION,
  UPDATE_INSTRUCTION,
  EMPTY_INSTRUCTION,
} from "./actionTypes";

export function showInstruction() {
  return (dispatch) => {
    dispatch({
      type: SHOW_INSTRUCTION,
      payload: true,
    });
  };
}

export function hideInstruction() {
  return (dispatch) => {
    dispatch({
      type: HIDE_INSTRUCTION,
      payload: false,
    });
  };
}

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
