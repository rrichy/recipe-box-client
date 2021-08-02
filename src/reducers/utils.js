import * as utils from "../actions/actionTypes";

const defaultState = {
  id: null,
  instruction: {
    show: false,
    data: {},
  },
  currentPage: "main",
  tooltip: {
    show: false,
    description: "",
    x: 0,
    y: 0,
  },
  topRecipes: [],
};

export default (utilState = defaultState, action) => {
  switch (action.type) {
    case utils.EDIT_RECIPE /* INSTRUCTIONs start */:
      return { ...utilState, id: action.payload };
    case utils.SHOW_INSTRUCTION:
    case utils.HIDE_INSTRUCTION:
      return {
        ...utilState,
        instruction: { ...utilState.instruction, show: action.payload },
      };
    case utils.UPDATE_INSTRUCTION:
    case utils.EMPTY_INSTRUCTION:
      return {
        ...utilState,
        instruction: { ...utilState.instruction, data: action.payload },
      }; /* INSTRUCTIONs end */
    case utils.CHANGE_PAGE /* PAGE */:
      return { ...utilState, currentPage: action.payload };
    case utils.SHOW_TOOLTIP: /* TOOLTIP start */
    case utils.HIDE_TOOLTIP:
      return {
        ...utilState,
        tooltip: { ...utilState.tooltip, show: action.payload },
      };
    case utils.UPDATE_TOOLTIP_DESC:
      return {
        ...utilState,
        tooltip: { ...utilState.tooltip, description: action.payload },
      };
    case utils.UPDATE_TOOLTIP_POS:
      return {
        ...utilState,
        tooltip: {
          ...utilState.tooltip,
          x: action.payload[0],
          y: action.payload[1],
        },
      }; /* TOOLTIP end */
    case utils.ASSIGN_TOP /* TOPRECIPES */:
      return { ...utilState, topRecipes: action.payload };
    default:
      return utilState;
  }
};
