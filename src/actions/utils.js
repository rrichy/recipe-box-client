import * as utils from "./actionTypes";

/* TOOLTIP consts */
export const showTooltip = () => {
  return (dispatch) => {
    dispatch({
      type: utils.SHOW_TOOLTIP,
      payload: true,
    });
  };
};

export const hideTooltip = () => {
  return (dispatch) => {
    dispatch({
      type: utils.HIDE_TOOLTIP,
      payload: false,
    });
  };
};

export const updateTooltipDesc = (description) => {
  return (dispatch) =>
    dispatch({
      type: utils.UPDATE_TOOLTIP_DESC,
      payload: description,
    });
};

export const updateTooltipPos = (position) => {
  return (dispatch) =>
    dispatch({
      type: utils.UPDATE_TOOLTIP_POS,
      payload: position,
    });
};

/* INSTRUCTION constS */
export const editRecipe = (id) => {
  return (dispatch) => {
    dispatch({
      type: utils.EDIT_RECIPE,
      payload: id,
    });
  };
};

export const showInstruction = () => {
  return (dispatch) => {
    dispatch({
      type: utils.SHOW_INSTRUCTION,
      payload: true,
    });
  };
};

export const hideInstruction = () => {
  return (dispatch) => {
    dispatch({
      type: utils.HIDE_INSTRUCTION,
      payload: false,
    });
  };
};

export const updateInstruction = (recipe) => {
  return (dispatch) => {
    dispatch({
      type: utils.UPDATE_INSTRUCTION,
      payload: recipe,
    });
  };
};

export const emptyInstruction = () => {
  return (dispatch) => {
    dispatch({
      type: utils.EMPTY_INSTRUCTION,
      payload: {},
    });
  };
};

/* PAGE const */
export const changePage = (page) => {
  return (dispatch) => {
    dispatch({
      type: utils.CHANGE_PAGE,
      payload: page,
    });
  };
};

/* TOP RECIPE const */
export const topRecipes = (recipes) => {
  return (dispatch) => {
    dispatch({ type: utils.ASSIGN_TOP, payload: recipes });
  };
};
