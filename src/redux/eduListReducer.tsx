import { EducationListState, AddEducationTypes, ADD_EDU_ITEM } from "./types";

const educationListReducer = (
  state: EducationListState = { eduList: [] },

  action: AddEducationTypes
): EducationListState => {
  switch (action.type) {
    case ADD_EDU_ITEM:
      return {
        eduList: [...state.eduList, action.payload],
      };
    default:
      return state;
  }
};

export default educationListReducer;
