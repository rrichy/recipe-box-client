export default (instruction = {}, action) => {
  switch (action.type) {
    case "UPDATE_INSTRUCTION":
      return action.payload;
    default:
      return instruction;
  }
};