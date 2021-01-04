import { SelectedItemState, SelectedActionTypes, SET_SELECTED } from "./types";

const initialSelectedItemState = {
  selected: { title: "", institution: "", start: "", end: "", details: "" },
};

export function selectedReducer(
  state = initialSelectedItemState,
  action: SelectedActionTypes
): SelectedItemState {
  switch (action.type) {
    case SET_SELECTED:
      return {
        selected: action.payload,
      };
    default:
      return state;
  }
}
