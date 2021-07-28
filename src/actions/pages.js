import { CHANGE_PAGE } from "./actionTypes";

export function changePage(page) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };
}
