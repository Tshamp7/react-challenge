import { SelectedItemState, SelectedActionTypes, SET_SELECTED } from "./types";

const selectedReducer = (
  state: SelectedItemState = {
    selected: { title: "", institution: "", start: "", end: "", details: "" },
  },
  action: SelectedActionTypes
): SelectedItemState => {
  switch (action.type) {
    case SET_SELECTED:
      return { selected: action.payload };

    default:
      return state;
  }
};

export default selectedReducer;
