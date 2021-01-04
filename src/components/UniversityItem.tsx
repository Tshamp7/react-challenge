import React from "react";
import { BoxText, Content } from "../styles/styleComponents";
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
    <Content border="true" start="true">
      <li onClick={() => handleClick(eduItem, setSelected)}>
        <BoxText txtAlign="start" cursor="true">
          {eduItem.title}
        </BoxText>
      </li>
    </Content>
  );
};

export default UniversityItem;
