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
    <div className="content">
      <li onClick={() => handleClick(eduItem, setSelected)}>{eduItem.title}</li>
    </div>
  );
};

export default UniversityItem;
