import { EducationItem } from "../components/EduDisplayDetail";
import { SET_SELECTED } from "./types";

export function setSelected(eduItem: EducationItem) {
  return {
    type: SET_SELECTED,
    payload: eduItem,
  };
}
