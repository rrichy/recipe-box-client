import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  UPDATE_TOOLTIP_DESC,
  UPDATE_TOOLTIP_POS,
} from "../actions/actionTypes";

export default (
  tooltip = { show: false, description: "", x: 0, y: 0 },
  action
) => {
  switch (action.type) {
    case SHOW_TOOLTIP:
    case HIDE_TOOLTIP:
      return { ...tooltip, show: action.payload };
    case UPDATE_TOOLTIP_DESC:
      return { ...tooltip, description: action.payload };
    case UPDATE_TOOLTIP_POS:
      return { ...tooltip, x: action.payload[0], y: action.payload[1] };
    default:
      return tooltip;
  }
};
