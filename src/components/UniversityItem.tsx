import React from "react";
import { EducationItem } from "./EduDisplayDetail";
import { useDispatch } from "react-redux";
import { setSelected } from "../redux/actions";

interface Props {
  eduItem: EducationItem;
  key: string;
}

const UniversityItem = ({ eduItem }: Props) => {
  const dispatch = useDispatch();
  const handleClick = (eduItem: EducationItem) => {
    dispatch(setSelected(eduItem));
  };

  return (
    <div className="content">
      <li onClick={() => handleClick(eduItem)}>{eduItem.title}</li>
    </div>
  );
};

export default UniversityItem;
