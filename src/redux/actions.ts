import { EducationItem } from "../components/EduDisplayDetail";
import { SET_SELECTED, ADD_EDU_ITEM, DELETE_EDU_ITEM } from "./types";

export function setSelected(eduItem: EducationItem) {
  return {
    type: SET_SELECTED,
    payload: eduItem,
  };
}

export function setEduItem(eduItem: EducationItem) {
  return {
    type: ADD_EDU_ITEM,
    payload: eduItem,
  };
}

export function deleteEduItem(eduItem: EducationItem) {
  return {
    type: DELETE_EDU_ITEM,
    payload: eduItem,
  };
}
