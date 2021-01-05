import {
  EducationListState,
  AddEducationTypes,
  ADD_EDU_ITEM,
  DELETE_EDU_ITEM,
  DeleteEducationTypes,
} from "./types";

const educationListReducer = (
  state: EducationListState = { eduList: [] },

  action: AddEducationTypes | DeleteEducationTypes
): EducationListState => {
  switch (action.type) {
    case ADD_EDU_ITEM:
      return {
        eduList: [...state.eduList, action.payload],
      };
    case DELETE_EDU_ITEM:
      return {
        eduList: state.eduList.filter((item) => {
          return item.title !== action.payload.title;
        }),
      };
    default:
      return state;
  }
};

export default educationListReducer;
