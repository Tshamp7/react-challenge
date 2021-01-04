import React from "react";
import { EducationItem } from "./EduDisplayDetail";

interface Props {
  eduItem: EducationItem;
  setSelected: Function;
  key: string;
}

const UniversityItem = ({ eduItem, setSelected }: Props) => {
  const handleClick = (eduItem: EducationItem, setSelected: Function) => {
    setSelected(eduItem);
  };

  return (
    <li onClick={() => handleClick(eduItem, setSelected)}>{eduItem.title}</li>
  );
};

export default UniversityItem;
