import { UPDATE_TOOLTIP_DESC, UPDATE_TOOLTIP_POS } from "./actionTypes";

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
