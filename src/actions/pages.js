import { CHANGE_PAGE, EDIT_RECIPE } from "./actionTypes";

export function changePage(page) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };
}
