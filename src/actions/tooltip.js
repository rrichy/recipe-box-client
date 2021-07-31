import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  UPDATE_TOOLTIP_DESC,
  UPDATE_TOOLTIP_POS,
} from "./actionTypes";

export function showTooltip() {
  return (dispatch) => {
    dispatch({
      type: SHOW_TOOLTIP,
      payload: true,
    });
  };
}

export function hideTooltip() {
  return (dispatch) => {
    dispatch({
      type: HIDE_TOOLTIP,
      payload: false,
    });
  };
}

export function updateTooltipDesc(description) {
  return (dispatch) =>
    dispatch({
      type: UPDATE_TOOLTIP_DESC,
      payload: description,
    });
}

export function updateTooltipPos(position) {
  return (dispatch) =>
    dispatch({
      type: UPDATE_TOOLTIP_POS,
      payload: position,
    });
}
