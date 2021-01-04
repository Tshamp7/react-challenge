import React from "react";
import { BasicContainer, BoxTitle, BoxText } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import UniversityItem from "./UniversityItem";

interface Props {
  eduList: EducationItem[];
  setSelected: Function;
}

const ShowwcaseUni = ({ eduList, setSelected }: Props) => {
  const eduItems = eduList.reverse().map((item) => {
    return (
      <div className="content">
        <UniversityItem
          key={item.institution}
          eduItem={item}
          setSelected={setSelected}
        />
      </div>
    );
  });
  return (
    <BasicContainer start={"start"} className="ui card">
      <div className="content">
        <BoxTitle className="header">Showwcase University</BoxTitle>
        {eduList.length > 0 ? <BoxText>Select One To See More!</BoxText> : null}
      </div>
      <div className="content">
        <ul style={{ listStyle: "none", paddingLeft: "0", cursor: "pointer" }}>
          {eduItems.reverse()}
        </ul>
      </div>
    </BasicContainer>
  );
};

export default ShowwcaseUni;
