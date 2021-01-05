import React from "react";
import { BoxText, Content } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import { useDispatch } from "react-redux";
import { setSelected } from "../redux/actions";

interface Props {
  eduItem: EducationItem;
}

const UniversityItem = ({ eduItem }: Props) => {
  const dispatch = useDispatch();
  const handleClick = (eduItem: EducationItem) => {
    dispatch(setSelected(eduItem));
  };

  return (
    <Content border="true" start="true">
      <li onClick={() => handleClick(eduItem)}>
        <BoxText txtAlign="start" cursor="true">
          {eduItem.title}
        </BoxText>
      </li>
    </Content>
  );
};

export default UniversityItem;
