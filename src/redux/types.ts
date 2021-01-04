import { EducationItem } from "../components/EduDisplayDetail";

export const SET_SELECTED = "SET_SELECTED";

export interface SelectedItemState {
  selected: EducationItem;
}

interface SetSelectedEducationItem {
  type: typeof SET_SELECTED;
  payload: EducationItem;
}

export type SelectedActionTypes = SetSelectedEducationItem;
