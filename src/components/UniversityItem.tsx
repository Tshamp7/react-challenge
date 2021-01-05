import React from "react";
import { BoxText, Content } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import { useDispatch } from "react-redux";
import { deleteEduItem, setSelected } from "../redux/actions";

interface Props {
  eduItem: EducationItem;
  key: string;
}

const UniversityItem = ({ eduItem }: Props) => {
  const dispatch = useDispatch();

  const handleClick = (eduItem: EducationItem) => {
    dispatch(setSelected(eduItem));
  };

  const deleteClick = (eduItem: EducationItem) => {
    dispatch(deleteEduItem(eduItem));
  };

  return (
    <Content border="true" start="true">
      <li onClick={() => handleClick(eduItem)}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <BoxText txtAlign="start" cursor="true">
            {eduItem.title}
          </BoxText>
          <BoxText txtAlign="start">
            <i
              className="fas fa-trash"
              onClick={() => deleteClick(eduItem)}
              style={{ cursor: "pointer" }}
            ></i>
          </BoxText>
        </div>
      </li>
    </Content>
  );
};

export default UniversityItem;
