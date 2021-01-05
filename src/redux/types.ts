import { EducationItem } from "../components/EduDisplayDetail";

export const SET_SELECTED = "SET_SELECTED";
export const ADD_EDU_ITEM = "ADD_EDU_ITEM";

export interface SelectedItemState {
  selected: EducationItem;
}

export interface EducationListState {
  eduList: EducationItem[];
}

interface SetSelectedEducationItem {
  type: typeof SET_SELECTED;
  payload: EducationItem;
}

interface AddEducationItem {
  type: typeof ADD_EDU_ITEM;
  payload: EducationItem;
}

export type SelectedActionTypes = SetSelectedEducationItem;
export type AddEducationTypes = AddEducationItem;
