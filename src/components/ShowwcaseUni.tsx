import React from "react";
import { BasicContainer, BoxTitle, BoxText } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import UniversityItem from "./UniversityItem";

interface Props {
  eduList: EducationItem[];
  setSelected: Function;
}

const ShowwcaseUni = ({ eduList, setSelected }: Props) => {
  const eduItems = eduList.map((item) => {
    return (
      <UniversityItem
        key={item.institution}
        eduItem={item}
        setSelected={setSelected}
      />
    );
  });
  return (
    <BasicContainer>
      <div>
        <BoxTitle>Showwcase University</BoxTitle>
        <BoxText>Select One To See More!</BoxText>
      </div>
      <ul style={{ listStyle: "none", paddingLeft: "0", cursor: "pointer" }}>
        {eduItems}
      </ul>
    </BasicContainer>
  );
};

export default ShowwcaseUni;
