import {
  SHOW_INSTRUCTION,
  HIDE_INSTRUCTION,
  UPDATE_INSTRUCTION,
  EMPTY_INSTRUCTION,
} from "../actions/actionTypes";

export default (instruction = { show: false, data: {} }, action) => {
  switch (action.type) {
    case SHOW_INSTRUCTION:
    case HIDE_INSTRUCTION:
      return { ...instruction, show: action.payload };
    case UPDATE_INSTRUCTION:
    case EMPTY_INSTRUCTION:
      return { ...instruction, data: action.payload };
    default:
      return instruction;
  }
};
